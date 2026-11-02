import React from 'react';
import { HeroDashboard } from './HeroDashboard';
import { ArrowRight, Sparkles, Code2, Layout, Users2 } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section id="hero" className="relative pt-12 md:pt-20 pb-16 md:pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-hero-glow">
      {/* Decorative Atmospheric Radial Blurs */}
      <div className="absolute top-12 left-1/4 -translate-x-1/2 w-[480px] h-[360px] bg-[#E9E7FF]/70 rounded-full blur-[90px] pointer-events-none -z-10" />
      <div className="absolute top-20 right-1/4 translate-x-1/2 w-[440px] h-[340px] bg-[#E0EDFF]/60 rounded-full blur-[80px] pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[720px] h-[400px] bg-[#F2F0FF]/50 rounded-full blur-[100px] pointer-events-none -z-10" />

      <div className="max-w-[1240px] mx-auto text-center">
        {/* Main Heading — Exactly 2 lines at desktop */}
        <h1 className="text-[34px] sm:text-[42px] md:text-[48px] font-extrabold text-[#17152C] tracking-tight leading-[1.08] max-w-[700px] mx-auto">
          Simplify Task Management<br className="hidden sm:inline" /> Boost Productivity
        </h1>

        {/* Supporting Description */}
        <p className="mt-4 text-[13.5px] sm:text-[14px] text-[#737487] font-normal max-w-md mx-auto leading-relaxed">
          Easy manage tasks and enhance productivity from start to finish.
        </p>

        {/* CTA Buttons */}
        <div className="mt-7 flex items-center justify-center gap-3.5 flex-wrap">
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

        {/* Dashboard Mockup Wrapper with Floating Role Labels */}
        <div className="relative mt-12 md:mt-16 max-w-[1140px] mx-auto">
          {/* Floating Role Label 1: AI Analyst (Top Left) */}
          <div className="absolute -top-5 -left-1 sm:left-4 lg:-left-6 z-20 bg-white/95 backdrop-blur-md rounded-full px-3.5 py-1.5 border border-[#E5E7EF] shadow-card-hover flex items-center gap-2 animate-float-slow hover:scale-105 transition-transform">
            <span className="w-2 h-2 rounded-full bg-[#6046E9] ring-3 ring-[#E9E7FF]" />
            <span className="text-[11.5px] font-bold text-[#17152C]">AI Analyst</span>
          </div>

          {/* Floating Role Label 2: Web Developer (Top Right) */}
          <div className="absolute -top-5 -right-1 sm:right-6 lg:-right-6 z-20 bg-white/95 backdrop-blur-md rounded-full px-3.5 py-1.5 border border-[#E5E7EF] shadow-card-hover flex items-center gap-2 animate-float-delayed hover:scale-105 transition-transform">
            <span className="w-2 h-2 rounded-full bg-[#3B82F6] ring-3 ring-blue-100" />
            <span className="text-[11.5px] font-bold text-[#17152C]">Web Developer</span>
          </div>

          {/* Floating Role Label 3: Programmer (Bottom Left) */}
          <div className="hidden sm:flex absolute -bottom-4 left-6 lg:left-2 z-20 bg-white/95 backdrop-blur-md rounded-full px-3.5 py-1.5 border border-[#E5E7EF] shadow-card-hover items-center gap-2 animate-float-delayed hover:scale-105 transition-transform">
            <span className="w-2 h-2 rounded-full bg-[#10B981] ring-3 ring-emerald-100" />
            <span className="text-[11.5px] font-bold text-[#17152C]">Programmer</span>
          </div>

          {/* Floating Role Label 4: Human Resources (Bottom Right) */}
          <div className="hidden sm:flex absolute -bottom-4 right-6 lg:right-4 z-20 bg-white/95 backdrop-blur-md rounded-full px-3.5 py-1.5 border border-[#E5E7EF] shadow-card-hover items-center gap-2 animate-float-slow hover:scale-105 transition-transform">
            <span className="w-2 h-2 rounded-full bg-[#F59E0B] ring-3 ring-amber-100" />
            <span className="text-[11.5px] font-bold text-[#17152C]">Human Resources</span>
          </div>

          {/* Embedded Hero Dashboard */}
          <HeroDashboard />
        </div>
      </div>
    </section>
  );
};
