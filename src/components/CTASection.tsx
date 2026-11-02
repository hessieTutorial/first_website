import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export const CTASection: React.FC = () => {
  return (
    <section className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-[1140px] mx-auto">
        <div className="relative rounded-[26px] bg-gradient-to-br from-[#F2F0FF] via-[#E9E7FF]/70 to-[#F5F6F9] border border-[#E9E7FF] p-8 sm:p-14 md:p-16 text-center overflow-hidden shadow-card-subtle">
          {/* Subtle Decorative Ambient Circles */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-200/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* Heading */}
            <h2 className="text-[32px] sm:text-[40px] font-extrabold text-[#17152C] tracking-tight leading-[1.12]">
              Ready to Take Control of Your Workflow?
            </h2>

            {/* Supporting Description */}
            <p className="mt-4 text-[14px] sm:text-[15px] text-[#737487] max-w-lg mx-auto leading-relaxed">
              Bring your team together, organize your tasks, and achieve more with TaskGo.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex items-center justify-center gap-3.5 flex-wrap">
              <a
                href="#pricing"
                className="inline-flex items-center gap-2 bg-[#6046E9] hover:bg-[#7561ED] text-white text-[12px] font-semibold px-6 py-3 rounded-full shadow-pill-glow hover:shadow-lg transition-all duration-200 active:scale-95 group"
              >
                <span>Get Started Free</span>
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="#demo"
                className="inline-flex items-center gap-2 bg-white hover:bg-[#F5F6F9] border border-[#E5E7EF] text-[#17152C] text-[12px] font-semibold px-6 py-3 rounded-full transition-all duration-200 hover:border-[#CBD5E1]"
              >
                <span>Book a Demo</span>
              </a>
            </div>

            {/* Sub-note */}
            <p className="mt-4 text-[11px] text-[#737487]">
              Free 14-day trial · No credit card required · Instant setup
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
