import React from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TrustedBrands } from './components/TrustedBrands';
import { FeaturesSection } from './components/FeaturesSection';
import { StatisticsSection } from './components/StatisticsSection';
import { StepsSection } from './components/StepsSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PricingSection } from './components/PricingSection';
import { CTASection } from './components/CTASection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  return (
    /* Outer Purple Frame:
       Desktop: Gradient linear-gradient(135deg, #6650EA 0%, #7461ED 55%, #5941DB 100%)
       Breathing room margin on desktop, full-width on mobile.
    */
    <div className="min-h-screen bg-[linear-gradient(135deg,#6650EA_0%,#7461ED_55%,#5941DB_100%)] p-0 sm:p-3 md:p-6 lg:p-8 flex flex-col justify-center items-center">
      {/* Centered White Website Canvas:
          Max-width ~1440px, rounded corners on desktop, thin pale lavender outline, subtle inset.
      */}
      <div className="w-full max-w-[1440px] bg-white rounded-none sm:rounded-[24px] lg:rounded-[32px] overflow-hidden shadow-[0_25px_60px_-15px_rgba(23,21,44,0.35)] border-0 sm:border sm:border-[#E9E7FF]/70 ring-0 sm:ring-1 sm:ring-white/20 transition-all duration-300">
        {/* Navigation Bar */}
        <Navbar />

        {/* Main Content Area */}
        <main>
          {/* Hero Section with Embedded Dashboard & Floating Role Labels */}
          <HeroSection />

          {/* Trusted Brands Logo Strip */}
          <TrustedBrands />

          {/* Features Section (Asymmetric 5-card layout) */}
          <FeaturesSection />

          {/* Why Teams Choose Task Pilot (Statistics Section) */}
          <StatisticsSection />

          {/* Three-Step Onboarding Section */}
          <StepsSection />

          {/* Testimonial / Success Stories Section */}
          <TestimonialsSection />

          {/* Pricing Plans Section */}
          <PricingSection />

          {/* Final Call to Action */}
          <CTASection />
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
