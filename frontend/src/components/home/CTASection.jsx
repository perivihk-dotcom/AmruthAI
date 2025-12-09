import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap } from 'lucide-react';

const CTASection = () => {
  return (
    <section className="relative bg-black py-24 lg:py-32 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[#FFE500]/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-[1400px] mx-auto px-4 md:px-[7.6923%] relative z-10">
        <div className="text-center">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-[#FFE500] text-black mb-8">
            <Zap size={32} />
          </div>

          {/* Content */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 max-w-3xl mx-auto leading-tight">
            Ready to Transform Your Business with AI?
          </h2>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mx-auto mb-10">
            Let's discuss how our AI solutions can help you achieve your business goals. 
            Schedule a free consultation with our experts today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FFE500] text-black font-medium text-lg transition-all duration-400 hover:bg-[#FFE500]/10 hover:text-[#FFE500]"
            >
              <span>Schedule Free Consultation</span>
              <ArrowRight size={20} />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 text-white font-medium text-lg transition-all duration-400 hover:bg-white hover:text-black"
            >
              <span>Explore Our Services</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
