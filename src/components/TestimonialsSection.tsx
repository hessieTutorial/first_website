import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote:
        'TaskGo replaced four disconnected tools for our engineering and design teams. Sprint velocity jumped by 35% in our very first quarter.',
      author: 'Sophia Martinez',
      role: 'VP of Product',
      company: 'ScaleCraft Labs',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
      rating: 5,
      highlight: '35% Sprint Velocity',
    },
    {
      quote:
        'The automated workflows and real-time sprint boards keep every stakeholder aligned without endless status meetings. It is remarkably intuitive.',
      author: 'David Chen',
      role: 'Head of Engineering',
      company: 'Vanguard Systems',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
      rating: 5,
      highlight: 'Zero Status Meetings',
    },
    {
      quote:
        'Onboarding sixty designers and product managers took less than an afternoon. The interface feels lightweight yet exceptionally powerful.',
      author: 'Amara Okafor',
      role: 'Design Operations Lead',
      company: 'HyperFlow Media',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
      rating: 5,
      highlight: 'Single-Day Rollout',
    },
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-white border-t border-[#E5E7EF]">
      <div className="max-w-[1140px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 md:mb-16">
          <h2 className="text-[30px] sm:text-[36px] font-[750] text-[#17152C] tracking-tight leading-[1.15]">
            Real Results, Real Impact. Our Success Stories
          </h2>
          <p className="mt-3 text-[14px] text-[#737487] leading-relaxed">
            Real-world success stories showcasing growth, performance, and productivity improvements.
          </p>
        </div>

        {/* 3 Testimonial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[18px] p-6 sm:p-7 border border-[#E5E7EF] shadow-card-subtle hover:border-[#6046E9]/40 hover:shadow-card-hover transition-all duration-200 flex flex-col justify-between group text-left"
            >
              <div>
                {/* Star Rating & Pill */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[10px] bg-[#E9E7FF] text-[#6046E9] font-bold px-2 py-0.5 rounded-full">
                    {item.highlight}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-[13.5px] text-[#202034] leading-relaxed font-normal mb-6">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-[#F5F6F9] flex items-center gap-3">
                <img
                  src={item.avatar}
                  alt={item.author}
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-[#E9E7FF]"
                />
                <div>
                  <h4 className="font-bold text-[13px] text-[#17152C] leading-snug">
                    {item.author}
                  </h4>
                  <p className="text-[11.5px] text-[#737487]">
                    {item.role} · <span className="font-medium text-[#17152C]">{item.company}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
