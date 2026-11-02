import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'Features', href: '#features' },
    { label: 'Why Choose', href: '#why-choose' },
    { label: 'Testimonial', href: '#testimonials' },
    { label: 'Pricing', href: '#pricing' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#E5E7EF]/80 transition-all duration-200">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Left: Geometric Logo + TaskGo Wordmark */}
        <a href="#hero" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-[8px] bg-[#6046E9] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 17L12 22L22 17" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="white" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <span className="font-extrabold text-[19px] tracking-tight text-[#17152C]">
            Task<span className="text-[#6046E9]">Go</span>
          </span>
        </a>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] font-medium text-[#737487] hover:text-[#6046E9] transition-colors duration-150"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Contact Us CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-[#17152C] hover:bg-[#202034] text-white text-[12px] font-semibold px-5 py-2.5 rounded-full transition-all duration-200 shadow-sm hover:shadow active:scale-95"
          >
            Contact Us
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#17152C] hover:bg-[#F5F6F9] transition-colors focus:outline-none"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-[#E5E7EF] px-5 py-5 space-y-3 shadow-lg animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block text-[14px] font-medium text-[#202034] hover:text-[#6046E9] py-2 px-1 rounded-md"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-[#E5E7EF] flex flex-col gap-2.5">
            <a
              href="#pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-[13px] font-medium text-[#737487]"
            >
              Log in
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center bg-[#17152C] text-white text-[13px] font-semibold py-2.5 rounded-full shadow-sm"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
