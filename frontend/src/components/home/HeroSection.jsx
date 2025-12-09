import React, { Suspense } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { companyInfo, stats } from '../../data/mock';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-black overflow-hidden">
      {/* Background Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 1px, transparent 1px, transparent 7.6923%),
            repeating-linear-gradient(-90deg, #fff, #fff 1px, transparent 1px, transparent 7.6923%)
          `,
          backgroundSize: '100% 100%'
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 md:px-[7.6923%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-0 min-h-screen items-center">
          {/* Left Content */}
          <div className="relative z-10 py-20 lg:py-0">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 border border-white/10 mb-8">
              <Sparkles size={16} className="text-[#FFE500]" />
              <span className="text-white/80 text-sm font-medium">AI-Powered Innovation</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-[66px] font-semibold text-white leading-[1.1] tracking-[-0.62px] mb-6">
              {companyInfo.tagline}
            </h1>

            {/* Subtext */}
            <p className="text-lg md:text-xl text-white/70 leading-relaxed max-w-xl mb-10">
              {companyInfo.description} Partner with us to unlock the full potential of artificial intelligence for your business.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                to="/contact"
                className="inline-flex items-center justify-between gap-3 px-6 py-4 bg-[#FFE500] text-black font-medium text-lg transition-all duration-400 hover:bg-[#FFE500]/10 hover:text-[#FFE500] min-h-[56px]"
              >
                <span>Start Your AI Journey</span>
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-between gap-3 px-6 py-4 bg-white/10 text-white font-medium text-lg transition-all duration-400 hover:bg-white hover:text-black min-h-[56px]"
              >
                <span>Explore Services</span>
                <ArrowRight size={20} />
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center md:text-left">
                  <div className="text-3xl md:text-4xl font-semibold text-[#FFE500] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/50">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Spline 3D */}
          <div className="relative h-[500px] lg:h-[700px] w-full lg:w-[700px] overflow-visible">
            <Suspense
              fallback={
                <div className="w-full h-full flex items-center justify-center">
                  <div className="w-16 h-16 border-4 border-[#FFE500]/20 border-t-[#FFE500] rounded-full animate-spin" />
                </div>
              }
            >
              <Spline scene="https://prod.spline.design/NbVmy6DPLhY-5Lvg/scene.splinecode" />
            </Suspense>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
