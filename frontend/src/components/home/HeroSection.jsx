import React, { Suspense, useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { companyInfo, stats } from '../../data/mock';

const Spline = React.lazy(() => import('@splinetool/react-spline'));

// Counter animation hook
const useCountUp = (end, duration = 2000, startCounting = false) => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    if (!startCounting) {
      setCount(0);
      return;
    }
    
    let startTime = null;
    const animate = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      setCount(Math.floor(easeOutQuart * end));
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    requestAnimationFrame(animate);
  }, [end, duration, startCounting]);
  
  return count;
};

// Animated stat component
const AnimatedStat = ({ value, label, isVisible }) => {
  // Parse the value to extract number and suffix
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9]/g, '');
  
  const count = useCountUp(numericValue, 2000, isVisible);
  
  return (
    <div className="text-center md:text-left">
      <div className="text-3xl md:text-4xl font-semibold text-[#FFE500] mb-1">
        {count}{suffix}
      </div>
      <div className="text-sm text-white/50">{label}</div>
    </div>
  );
};

const HeroSection = () => {
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
            <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <AnimatedStat
                  key={index}
                  value={stat.value}
                  label={stat.label}
                  isVisible={statsVisible}
                />
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
