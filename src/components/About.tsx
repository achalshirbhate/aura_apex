import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Target, Award, ShieldCheck } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-32 bg-cyber-bg relative z-10 border-t border-white/5 overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[450px] h-[450px] bg-cyber-lime/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Story Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyber-lime/10 border border-cyber-lime/30 text-cyber-lime text-xs font-mono font-bold tracking-widest uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Our Story</span>
            </div>

            {/* Heading */}
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.2]">
              Built for those who demand more from fitness technology.
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-4 text-cyber-textMuted text-base sm:text-lg leading-relaxed">
              <p>
                We founded Aura Apex on a simple belief: the fitness industry deserved the same technological sophistication as finance, healthcare, and enterprise software.
              </p>
              <p>
                Our mission is to democratize access to elite fitness infrastructure — giving every gym, trainer, and user the intelligent tools that were once only available to the biggest players.
              </p>
            </div>

            {/* Core Values Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-2xl bg-cyber-card border border-cyber-cardBorder flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-cyber-bg border border-white/10 text-cyber-lime flex-shrink-0">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Democratized Tech</h4>
                  <p className="text-xs text-cyber-textMuted mt-0.5">Bringing elite software capabilities to gym owners and trainers worldwide.</p>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-cyber-card border border-cyber-cardBorder flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-cyber-bg border border-white/10 text-cyber-lime flex-shrink-0">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">Unified Ecosystem</h4>
                  <p className="text-xs text-cyber-textMuted mt-0.5">Connecting members, operators, and partners into one intelligent layer.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Founder Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="relative p-8 rounded-3xl bg-cyber-card border border-cyber-cardBorder shadow-2xl overflow-hidden group hover:border-cyber-lime/40 transition-colors duration-300">
              {/* Subtle top glow line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-cyber-lime to-transparent" />

              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  {/* Founder Monogram Avatar */}
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyber-lime/20 to-cyber-lime/5 border border-cyber-lime/40 flex items-center justify-center text-cyber-lime font-extrabold text-2xl shadow-lime-glow-sm">
                    TJ
                  </div>
                  <div>
                    <h3 className="text-xl font-extrabold text-white tracking-tight">
                      Tanvi Jain
                    </h3>
                    <p className="text-xs font-mono text-cyber-lime font-semibold mt-0.5">
                      Founder &amp; CEO, Aura Apex
                    </p>
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-cyber-bg border border-white/5 space-y-3">
                  <p className="text-xs sm:text-sm text-gray-300 italic leading-relaxed">
                    &ldquo;Fitness isn&apos;t just about equipment—it&apos;s about connection, intelligence, and continuous progression. We built Aura Apex to elevate every single touchpoint in the fitness journey.&rdquo;
                  </p>
                  <div className="flex items-center gap-2 pt-2 border-t border-white/5 text-[11px] font-mono text-cyber-textMuted">
                    <Award className="w-4 h-4 text-cyber-lime" />
                    <span>LEADERSHIP VISION &bull; AURA APEX</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
