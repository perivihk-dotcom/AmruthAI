import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart, Linkedin, Twitter } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { teamMembers, stats, companyInfo } from '../data/mock';

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
  const numericValue = parseInt(value.replace(/[^0-9]/g, ''));
  const suffix = value.replace(/[0-9]/g, '');

  const count = useCountUp(numericValue, 2000, isVisible);

  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-semibold text-[#FFE500] mb-2">
        {count}{suffix}
      </div>
      <div className="text-white/60">{label}</div>
    </div>
  );
};

const AboutPage = () => {
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

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with AI technology.'
    },
    {
      icon: Eye,
      title: 'Transparency',
      description: 'Open communication and honest partnerships are at the core of everything we do.'
    },
    {
      icon: Heart,
      title: 'Client Success',
      description: 'Your success is our success. We\'re committed to delivering measurable results.'
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-black py-24 lg:py-32">
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
        <div className="max-w-[1400px] mx-auto px-4 md:px-[7.6923%] relative z-10">
          <div className="max-w-3xl">
            <span className="inline-block text-[#FFE500] text-sm font-medium tracking-wider uppercase mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[66px] font-semibold text-white leading-[1.1] tracking-[-0.62px] mb-6">
              Building the Future of AI
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
              Founded in {companyInfo.founded}, Amruth AI has been at the forefront of artificial intelligence innovation, helping businesses across industries harness the power of AI to solve complex challenges.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-[#121212] py-16">
        <div className="max-w-[1400px] mx-auto px-4 md:px-[7.6923%]">
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8">
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
      </section>

      {/* Mission & Values */}
      <section className="relative bg-black py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-4 md:px-[7.6923%]">
          {/* Mission */}
          <div className="text-center mb-20">
            <span className="inline-block text-[#FFE500] text-sm font-medium tracking-wider uppercase mb-4">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 max-w-4xl mx-auto">
              To democratize AI and empower every business to achieve extraordinary outcomes
            </h2>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/[0.02] border border-white/10 p-8 transition-all duration-400 hover:border-[#FFE500]/30"
              >
                <div className="w-14 h-14 flex items-center justify-center bg-[#FFE500] text-black mb-6">
                  <value.icon size={28} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-white/60 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative bg-[#121212] py-24 lg:py-32">
        <div className="max-w-[1400px] mx-auto px-4 md:px-[7.6923%]">
          <div className="text-center mb-16">
            <span className="inline-block text-[#FFE500] text-sm font-medium tracking-wider uppercase mb-4">
              Our Team
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
              Meet the Experts
            </h2>
            <p className="text-lg text-white/60 max-w-2xl mx-auto">
              Our team brings together world-class talent from leading tech companies and research institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="group bg-black/50 border border-white/10 overflow-hidden transition-all duration-400 hover:border-[#FFE500]/30"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover transition-transform duration-400 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                  <p className="text-[#FFE500] text-sm mb-3">{member.role}</p>
                  <p className="text-white/60 text-sm leading-relaxed mb-4">{member.bio}</p>
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="p-2 bg-white/10 text-white/60 hover:bg-[#FFE500] hover:text-black transition-all duration-300"
                    >
                      <Linkedin size={16} />
                    </a>
                    <a
                      href="#"
                      className="p-2 bg-white/10 text-white/60 hover:bg-[#FFE500] hover:text-black transition-all duration-300"
                    >
                      <Twitter size={16} />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-black py-24">
        <div className="max-w-[1400px] mx-auto px-4 md:px-[7.6923%] text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            Join Us on Our Journey
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10">
            We're always looking for talented individuals who share our passion for AI innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FFE500] text-black font-medium text-lg transition-all duration-400 hover:bg-[#FFE500]/10 hover:text-[#FFE500]"
            >
              <span>Get in Touch</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default AboutPage;
