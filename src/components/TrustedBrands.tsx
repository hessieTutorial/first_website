import React from 'react';

export const TrustedBrands: React.FC = () => {
  const brands = [
    {
      name: 'IPRUM',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#737487]">
          <polygon points="12 2 2 7 12 12 22 7 12 2" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
          <polygon points="2 17 12 22 22 17" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
        </svg>
      ),
    },
    {
      name: 'Logopium',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#737487]">
          <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="2" />
          <path d="M12 8V16M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: 'CCG',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#737487]">
          <path d="M4 12C4 7.58172 7.58172 4 12 4C14.5 4 16.7 5.1 18.2 6.9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <path d="M20 12C20 16.4183 16.4183 20 12 20C9.5 20 7.3 18.9 5.8 17.1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      name: 'LOGO',
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-[#737487]">
          <rect x="4" y="4" width="16" height="16" rx="4" stroke="currentColor" strokeWidth="2" />
          <circle cx="12" cy="12" r="3" fill="currentColor" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-10 border-y border-[#E5E7EF]/80 bg-[#FAFAFC]/60 px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left Endorsement Statement */}
        <p className="text-[13px] md:text-[13.5px] font-medium text-[#737487] text-center md:text-left max-w-[280px] leading-snug">
          Endorsed by the globe's leading innovative enterprises.
        </p>

        {/* Right 4 Logo Containers */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full md:w-auto">
          {brands.map((brand) => (
            <div
              key={brand.name}
              className="bg-white border border-[#E5E7EF] rounded-full px-5 py-2.5 flex items-center justify-center gap-2.5 shadow-card-subtle hover:border-[#6046E9]/40 hover:shadow-card-hover transition-all duration-200 cursor-default min-w-[130px]"
            >
              <div className="opacity-70 group-hover:opacity-100 transition-opacity">
                {brand.icon}
              </div>
              <span className="font-bold text-[13px] tracking-wider text-[#17152C] opacity-80">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
