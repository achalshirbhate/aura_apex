import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, User, MessageSquare, Send, CheckCircle2, AlertCircle, Phone, MapPin, Sparkles } from 'lucide-react';
import { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ fullName?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const MAX_CHARACTERS = 500;

  const validate = () => {
    const newErrors: { fullName?: string; email?: string; message?: string } = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email Address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message content cannot be empty';
    } else if (formData.message.length > MAX_CHARACTERS) {
      newErrors.message = `Message cannot exceed ${MAX_CHARACTERS} characters`;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate API network request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ fullName: '', email: '', message: '' });
      setErrors({});
    }, 1200);
  };

  const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const val = e.target.value;
    if (val.length <= MAX_CHARACTERS) {
      setFormData({ ...formData, message: val });
      if (errors.message) {
        setErrors({ ...errors, message: undefined });
      }
    }
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-cyber-bg relative z-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Contact Details & Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyber-lime/10 border border-cyber-lime/30 text-cyber-lime text-xs font-mono font-semibold">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CONTACT</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              Let&apos;s talk about your vision.
            </h2>

            <p className="text-cyber-textMuted text-base leading-relaxed">
              Whether you&apos;re a gym owner ready to modernize, a trainer building your brand, or an investor exploring the space &mdash; we&apos;d love to connect.
            </p>

            {/* Direct Contact Cards */}
            <div className="space-y-4 pt-4">
              {/* Email */}
              <a
                href="mailto:auraapex04@gmail.com"
                className="p-4 rounded-2xl bg-cyber-card border border-cyber-cardBorder flex items-center gap-4 hover:border-cyber-lime/50 transition-colors group"
              >
                <div className="p-3 rounded-xl bg-cyber-bg border border-white/10 text-cyber-lime group-hover:border-cyber-lime">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-cyber-textMuted font-mono">EMAIL US</div>
                  <div className="text-sm font-semibold text-white group-hover:text-cyber-lime transition-colors">
                    auraapex04@gmail.com
                  </div>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+918010949460"
                className="p-4 rounded-2xl bg-cyber-card border border-cyber-cardBorder flex items-center gap-4 hover:border-cyber-lime/50 transition-colors group"
              >
                <div className="p-3 rounded-xl bg-cyber-bg border border-white/10 text-cyber-lime group-hover:border-cyber-lime">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-cyber-textMuted font-mono">CALL US</div>
                  <div className="text-sm font-semibold text-white group-hover:text-cyber-lime transition-colors">
                    +91 80109 49460
                  </div>
                </div>
              </a>

              {/* Office Location */}
              <div className="p-4 rounded-2xl bg-cyber-card border border-cyber-cardBorder flex items-center gap-4">
                <div className="p-3 rounded-xl bg-cyber-bg border border-white/10 text-cyber-lime">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-cyber-textMuted font-mono">OFFICE LOCATION</div>
                  <div className="text-sm font-semibold text-white">
                    MIT AOE, Alandi, Pune, Maharashtra
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-cyber-card border border-cyber-cardBorder shadow-2xl relative overflow-hidden">
              <div className="border-b border-white/10 pb-4 mb-6 flex items-center justify-between">
                <h3 className="text-xl font-bold text-white">Send Us a Message</h3>
                <span className="text-xs font-mono text-cyber-lime">AURA APEX CONNECT</span>
              </div>

              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="py-12 text-center space-y-4"
                  >
                    <div className="w-16 h-16 rounded-full bg-cyber-lime/20 border border-cyber-lime text-cyber-lime flex items-center justify-center mx-auto shadow-lime-glow">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h4 className="text-2xl font-bold text-white">Message Transmitted!</h4>
                    <p className="text-sm text-cyber-textMuted max-w-md mx-auto">
                      Thank you for contacting Aura Apex. Our team will review your message and reach out shortly.
                    </p>
                    <button
                      onClick={() => setIsSuccess(false)}
                      className="px-6 py-2.5 rounded-xl bg-cyber-bg border border-white/10 text-white text-xs font-mono hover:border-cyber-lime/40 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form key="form" onSubmit={handleSubmit} className="space-y-5" noValidate>
                    {/* Full Name */}
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1.5" htmlFor="fullName">
                        Full Name <span className="text-cyber-lime">*</span>
                      </label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-3.5 w-4 h-4 text-cyber-textMuted" />
                        <input
                          id="fullName"
                          type="text"
                          value={formData.fullName}
                          onChange={(e) => {
                            setFormData({ ...formData, fullName: e.target.value });
                            if (errors.fullName) setErrors({ ...errors, fullName: undefined });
                          }}
                          placeholder="Alex Mercer"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl bg-cyber-bg border text-sm text-white focus:outline-none transition-colors ${
                            errors.fullName
                              ? 'border-red-500/80 focus:border-red-500'
                              : 'border-white/10 focus:border-cyber-lime'
                          }`}
                        />
                      </div>
                      {errors.fullName && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Email Address */}
                    <div>
                      <label className="block text-xs font-medium text-gray-300 mb-1.5" htmlFor="email">
                        Email Address <span className="text-cyber-lime">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-3.5 w-4 h-4 text-cyber-textMuted" />
                        <input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => {
                            setFormData({ ...formData, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: undefined });
                          }}
                          placeholder="alex@fitness.com"
                          className={`w-full pl-10 pr-4 py-3 rounded-xl bg-cyber-bg border text-sm text-white focus:outline-none transition-colors ${
                            errors.email
                              ? 'border-red-500/80 focus:border-red-500'
                              : 'border-white/10 focus:border-cyber-lime'
                          }`}
                        />
                      </div>
                      {errors.email && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>

                    {/* Message + Character Counter */}
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <label className="block text-xs font-medium text-gray-300" htmlFor="message">
                          Message <span className="text-cyber-lime">*</span>
                        </label>

                        {/* Character Counter */}
                        <span
                          className={`text-xs font-mono ${
                            formData.message.length >= MAX_CHARACTERS
                              ? 'text-red-400 font-bold'
                              : formData.message.length > MAX_CHARACTERS * 0.8
                              ? 'text-yellow-400'
                              : 'text-cyber-textMuted'
                          }`}
                        >
                          {formData.message.length} / {MAX_CHARACTERS} characters
                        </span>
                      </div>

                      <div className="relative">
                        <MessageSquare className="absolute left-3.5 top-3.5 w-4 h-4 text-cyber-textMuted" />
                        <textarea
                          id="message"
                          rows={4}
                          value={formData.message}
                          onChange={handleMessageChange}
                          placeholder="Describe your fitness business or vision..."
                          className={`w-full pl-10 pr-4 py-3 rounded-xl bg-cyber-bg border text-sm text-white focus:outline-none transition-colors resize-none ${
                            errors.message
                              ? 'border-red-500/80 focus:border-red-500'
                              : 'border-white/10 focus:border-cyber-lime'
                          }`}
                        />
                      </div>
                      {errors.message && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" /> {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Send Message Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-cyber-lime text-black font-bold text-sm hover:bg-cyber-limeHover transition-all shadow-lime-glow disabled:opacity-50 active:scale-98"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 rounded-full border-2 border-black border-t-transparent animate-spin" />
                          <span>Transmitting Message...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message</span>
                        </>
                      )}
                    </button>
                  </form>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
