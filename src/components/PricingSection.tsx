import React, { useState } from 'react';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

export const PricingSection: React.FC = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annually'>('annually');

  const plans = [
    {
      name: 'Basic',
      tagline: 'Ideal for solo creators and emerging startup projects.',
      priceMonthly: 0,
      priceAnnually: 0,
      badge: null,
      features: [
        'Essential task management boards',
        'Up to 5 team members',
        'Basic list and board views',
        'Standard file uploads (100MB)',
        'Community email support',
      ],
      ctaText: 'Get Started Free',
      ctaStyle: 'bg-white hover:bg-[#F5F6F9] border border-[#E5E7EF] text-[#17152C]',
      popular: false,
    },
    {
      name: 'Pro',
      tagline: 'Built for scaling design, product, and engineering squads.',
      priceMonthly: 24,
      priceAnnually: 19,
      badge: 'Most Popular',
      features: [
        'Unlimited projects and workflows',
        'Unlimited active team members',
        'Automated workflows & triggers',
        'Advanced sprint & progress analytics',
        'Slack, GitHub, and Figma integrations',
        'Priority 24/7 support & fast SLA',
      ],
      ctaText: 'Start 14-Day Free Trial',
      ctaStyle: 'bg-[#6046E9] hover:bg-[#7561ED] text-white shadow-pill-glow',
      popular: true,
    },
    {
      name: 'Enterprise',
      tagline: 'Tailored for high-growth enterprises needing security and scale.',
      priceMonthly: 59,
      priceAnnually: 49,
      badge: null,
      features: [
        'Advanced team roles and custom permissions',
        'SAML, Okta, and Auth0 SSO integration',
        'Dedicated Customer Success Manager',
        'Custom workflow triggers and webhooks',
        '99.99% uptime guarantee with enterprise SLA',
        'SOC-2 Type II audit compliance report',
      ],
      ctaText: 'Contact Sales',
      ctaStyle: 'bg-[#17152C] hover:bg-[#202034] text-white',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 md:py-28 px-4 sm:px-6 lg:px-8 bg-[#FAFAFC]/60 border-t border-[#E5E7EF]">
      <div className="max-w-[1140px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 md:mb-12">
          <h2 className="text-[30px] sm:text-[36px] font-[750] text-[#17152C] tracking-tight leading-[1.15]">
            Simple Plans for Every Team
          </h2>
          <p className="mt-3 text-[14px] text-[#737487] leading-relaxed">
            Choose the plan that works best for your team's productivity goals.
          </p>

          {/* Billing Cycle Toggle */}
          <div className="mt-7 inline-flex items-center p-1 rounded-full bg-[#EFF1F5] border border-[#E5E7EF]">
            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`px-4 py-1.5 rounded-full text-[12px] font-semibold transition-all duration-150 ${
                billingCycle === 'monthly'
                  ? 'bg-white text-[#17152C] shadow-sm'
                  : 'text-[#737487] hover:text-[#17152C]'
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setBillingCycle('annually')}
              className={`px-4 py-1.5 rounded-full text-[12px] font-semibold flex items-center gap-1.5 transition-all duration-150 ${
                billingCycle === 'annually'
                  ? 'bg-[#6046E9] text-white shadow-sm'
                  : 'text-[#737487] hover:text-[#17152C]'
              }`}
            >
              <span>Annually</span>
              <span
                className={`text-[10px] font-bold px-1.5 py-0.2 rounded-full ${
                  billingCycle === 'annually'
                    ? 'bg-white/20 text-white'
                    : 'bg-[#E9E7FF] text-[#6046E9]'
                }`}
              >
                Save 20%
              </span>
            </button>
          </div>
        </div>

        {/* 3 Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan, idx) => {
            const price = billingCycle === 'annually' ? plan.priceAnnually : plan.priceMonthly;

            return (
              <div
                key={idx}
                className={`rounded-[20px] p-7 flex flex-col justify-between transition-all duration-200 relative ${
                  plan.popular
                    ? 'bg-white border-2 border-[#6046E9] shadow-card-hover -translate-y-1'
                    : 'bg-white border border-[#E5E7EF] shadow-card-subtle hover:border-[#6046E9]/40 hover:shadow-card-hover'
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#6046E9] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-extrabold text-[20px] text-[#17152C]">
                      {plan.name}
                    </h3>
                  </div>

                  <p className="text-[12.5px] text-[#737487] min-h-[38px] leading-snug mb-5">
                    {plan.tagline}
                  </p>

                  {/* Price */}
                  <div className="flex items-baseline gap-1.5 pb-6 mb-6 border-b border-[#F5F6F9]">
                    <span className="text-[38px] font-extrabold text-[#17152C] tracking-tight">
                      ${price}
                    </span>
                    <span className="text-[12px] text-[#737487] font-medium">
                      / user / month
                    </span>
                  </div>

                  {/* Feature Checklist */}
                  <div className="space-y-3 mb-8">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-[#17152C]">
                      What's Included
                    </div>
                    {plan.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-[12.5px] text-[#202034]">
                        <div className="w-4 h-4 rounded-full bg-[#E9E7FF] text-[#6046E9] flex items-center justify-center shrink-0 mt-0.5">
                          <Check size={11} strokeWidth={3} />
                        </div>
                        <span className="leading-snug">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  type="button"
                  className={`w-full py-3 px-4 rounded-full text-[12px] font-semibold transition-all duration-200 active:scale-95 flex items-center justify-center gap-1.5 ${plan.ctaStyle}`}
                >
                  <span>{plan.ctaText}</span>
                  <ArrowRight size={13} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
