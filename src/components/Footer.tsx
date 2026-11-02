import React from 'react';
import { Twitter, Github, Linkedin, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-white border-t border-[#E5E7EF] px-4 sm:px-6 lg:px-8 pt-16 pb-12 text-left">
      <div className="max-w-[1140px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#F5F6F9]">
          {/* LEFT: TaskGo Logo + Short Product Description (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-[7px] bg-[#6046E9] flex items-center justify-center shadow-sm">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <span className="font-extrabold text-[18px] tracking-tight text-[#17152C]">
                Task<span className="text-[#6046E9]">Go</span>
              </span>
            </div>

            <p className="text-[13px] text-[#737487] leading-relaxed max-w-sm">
              The modern task management platform built for high-velocity teams. Organize, automate, and ship your best work faster.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#FAFBFD] border border-[#E5E7EF] text-[#737487] hover:text-[#6046E9] hover:border-[#6046E9]/40 flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={14} />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#FAFBFD] border border-[#E5E7EF] text-[#737487] hover:text-[#6046E9] hover:border-[#6046E9]/40 flex items-center justify-center transition-colors"
                aria-label="GitHub"
              >
                <Github size={14} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-full bg-[#FAFBFD] border border-[#E5E7EF] text-[#737487] hover:text-[#6046E9] hover:border-[#6046E9]/40 flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={14} />
              </a>
            </div>
          </div>

          {/* MIDDLE: Product Links (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-[13px] font-bold text-[#17152C] uppercase tracking-wider">
              Product
            </h4>
            <ul className="space-y-2.5 text-[13px]">
              <li>
                <a href="#features" className="text-[#737487] hover:text-[#6046E9] transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-[#737487] hover:text-[#6046E9] transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#integrations" className="text-[#737487] hover:text-[#6046E9] transition-colors">
                  Integrations
                </a>
              </li>
              <li>
                <a href="#changelog" className="text-[#737487] hover:text-[#6046E9] transition-colors flex items-center gap-1.5">
                  <span>Changelog</span>
                  <span className="text-[9px] bg-[#E9E7FF] text-[#6046E9] font-bold px-1.5 py-0.2 rounded-full">
                    v2.4
                  </span>
                </a>
              </li>
            </ul>
          </div>

          {/* RIGHT: Company Links (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-[13px] font-bold text-[#17152C] uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2.5 text-[13px]">
              <li>
                <a href="#about" className="text-[#737487] hover:text-[#6046E9] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#contact" className="text-[#737487] hover:text-[#6046E9] transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-[#737487] hover:text-[#6046E9] transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-[#737487] hover:text-[#6046E9] transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[12px] text-[#737487]">
          <p>© 2026 TaskGo. All rights reserved.</p>
          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1 text-[#737487] hover:text-[#6046E9] font-medium transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp size={13} />
          </button>
        </div>
      </div>
    </footer>
  );
};
