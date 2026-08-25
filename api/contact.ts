import type { VercelRequest, VercelResponse } from '@vercel/node';
import { sendContactEmail } from './_email.js';

// In-memory rate limiting map for basic IP protection (IP -> last timestamp)
const rateLimitMap = new Map<string, number>();

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS Headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }

  try {
    // 1. Basic Rate Limiting Check (5 seconds per IP)
    const clientIp = (req.headers['x-forwarded-for'] as string) || req.socket.remoteAddress || 'unknown';
    const now = Date.now();
    const lastRequest = rateLimitMap.get(clientIp) || 0;
    if (now - lastRequest < 5000) {
      return res.status(429).json({
        success: false,
        message: 'Rate limit exceeded. Please wait a few seconds before submitting again.',
      });
    }
    rateLimitMap.set(clientIp, now);

    // 2. Extract Body & Perform Validation
    const { fullName, email, message } = req.body || {};

    const trimmedName = typeof fullName === 'string' ? fullName.trim() : '';
    const trimmedEmail = typeof email === 'string' ? email.trim().toLowerCase() : '';
    const trimmedMessage = typeof message === 'string' ? message.trim() : '';

    if (!trimmedName) {
      return res.status(400).json({ success: false, message: 'Full Name is required.' });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!trimmedEmail || !emailRegex.test(trimmedEmail)) {
      return res.status(400).json({ success: false, message: 'Please enter a valid email address.' });
    }

    if (!trimmedMessage) {
      return res.status(400).json({ success: false, message: 'Message content cannot be empty.' });
    }

    if (trimmedMessage.length > 500) {
      return res.status(400).json({ success: false, message: 'Message cannot exceed 500 characters.' });
    }

    // 3. Send Email Notification
    await sendContactEmail({
      fullName: trimmedName,
      email: trimmedEmail,
      message: trimmedMessage,
    });

    return res.status(200).json({ success: true });
  } catch (error: any) {
    console.error('API /api/contact error:', error);
    return res.status(500).json({
      success: false,
      message: 'Something went wrong processing your request. Please try again.',
    });
  }
}
