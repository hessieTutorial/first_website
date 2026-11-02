import React from 'react';

export const StatisticsSection: React.FC = () => {
  const metrics = [
    {
      metric: '40%',
      description: 'Faster Task Completion and Automated workflows.',
      bg: 'bg-white',
    },
    {
      metric: '3×',
      description: 'Higher Team Alignment and Real-time updates.',
      bg: 'bg-[#EFF1F5]/80',
    },
    {
      metric: '100%',
      description: 'Real-Time Insights Across and Track progress bottlenecks.',
      bg: 'bg-white',
    },
    {
      metric: '10k+',
      description: 'Active Users Startups, agencies, and growing teams.',
      bg: 'bg-[#EFF1F5]/80',
    },
  ];

  return (
    <section id="why-choose" className="py-20 md:py-24 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E5E7EF]/80">
      <div className="max-w-[1140px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 md:mb-14">
          <h2 className="text-[30px] sm:text-[36px] font-[750] text-[#17152C] tracking-tight leading-[1.15]">
            Why Teams Choose Task Pilot
          </h2>
          <p className="mt-3 text-[14px] text-[#737487] leading-relaxed">
            Trusted by teams to manage work more efficiently. Designed to help teams do their best work.
          </p>
        </div>

        {/* 4 Equal-Width Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {metrics.map((item, idx) => (
            <div
              key={idx}
              className={`${item.bg} border border-[#E5E7EF] rounded-[16px] p-5 sm:p-6 relative flex flex-col justify-between min-h-[115px] shadow-card-subtle hover:border-[#6046E9]/40 hover:shadow-card-hover transition-all duration-200 group`}
            >
              {/* Tiny Purple Decorative Circle Near Top Right Corner */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#6046E9] opacity-70 group-hover:scale-125 group-hover:opacity-100 transition-all" />

              {/* Large Navy Metric */}
              <div className="text-[32px] sm:text-[36px] font-extrabold text-[#17152C] tracking-tight leading-none mb-2">
                {item.metric}
              </div>

              {/* Small Description Toward Bottom */}
              <p className="text-[12px] sm:text-[12.5px] text-[#737487] leading-snug font-normal">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
