import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Brain, Cpu, Bot, Globe, Smartphone, ArrowRight, Check } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { services } from '../data/mock';

const iconMap = {
  Brain,
  Cpu,
  Bot,
  Globe,
  Smartphone
};

// Animated service visual component
const ServiceAnimation = ({ serviceId, IconComponent }) => {
  const animations = {
    'web-development': (
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Browser window animation */}
        <div className="relative w-64 h-48 border-2 border-cyan-400/40 rounded-lg overflow-hidden bg-gradient-to-br from-blue-900/20 to-purple-900/20">
          {/* Browser header */}
          <div className="h-6 bg-gradient-to-r from-slate-800/80 to-slate-700/80 border-b border-white/10 flex items-center px-2 gap-1">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <div className="w-2 h-2 rounded-full bg-yellow-500" />
            <div className="w-2 h-2 rounded-full bg-green-500" />
          </div>
          {/* Content lines animating */}
          <div className="p-3 space-y-2">
            <div className="h-3 bg-gradient-to-r from-cyan-500/40 to-blue-500/40 rounded animate-pulse" style={{ width: '80%' }} />
            <div className="h-3 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded animate-pulse" style={{ width: '60%', animationDelay: '0.2s' }} />
            <div className="h-3 bg-gradient-to-r from-green-500/30 to-teal-500/30 rounded animate-pulse" style={{ width: '90%', animationDelay: '0.4s' }} />
            <div className="h-8 bg-gradient-to-r from-indigo-500/20 to-violet-500/20 rounded mt-3 animate-pulse" style={{ animationDelay: '0.6s' }} />
            <div className="flex gap-2 mt-2">
              <div className="h-6 w-16 bg-gradient-to-r from-orange-500/50 to-amber-500/50 rounded animate-pulse" style={{ animationDelay: '0.8s' }} />
              <div className="h-6 w-16 bg-gradient-to-r from-emerald-500/30 to-teal-500/30 rounded animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>
        </div>
        {/* Floating code brackets */}
        <div className="absolute top-4 left-4 text-cyan-400/60 text-4xl font-mono animate-bounce" style={{ animationDuration: '2s' }}>&lt;/&gt;</div>
        <div className="absolute bottom-4 right-4 text-purple-400/50 text-2xl font-mono animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>{"{ }"}</div>
        <div className="absolute top-8 right-8 w-3 h-3 bg-pink-500 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
      </div>
    ),
    'app-development': (
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Phone mockup */}
        <div className="relative w-36 h-72 border-4 border-gradient-to-b from-purple-500/60 to-pink-500/60 rounded-3xl overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800" style={{ borderColor: '#a855f7' }}>
          {/* Notch */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-16 h-4 bg-black rounded-full" />
          {/* Screen content */}
          <div className="mt-8 p-3 space-y-3">
            <div className="h-20 bg-gradient-to-br from-violet-500/30 via-fuchsia-500/20 to-pink-500/30 rounded-xl animate-pulse" />
            <div className="grid grid-cols-3 gap-2">
              {[
                'from-red-500/40 to-orange-500/40',
                'from-green-500/40 to-emerald-500/40',
                'from-blue-500/40 to-cyan-500/40',
                'from-yellow-500/40 to-amber-500/40',
                'from-purple-500/40 to-violet-500/40',
                'from-pink-500/40 to-rose-500/40'
              ].map((gradient, i) => (
                <div key={i} className={`aspect-square bg-gradient-to-br ${gradient} rounded-lg animate-pulse`} style={{ animationDelay: `${i * 0.15}s` }} />
              ))}
            </div>
            <div className="h-10 bg-gradient-to-r from-cyan-500/50 to-blue-500/50 rounded-full animate-pulse mt-4" />
          </div>
        </div>
        {/* Floating elements */}
        <div className="absolute top-8 right-8 w-12 h-12 border-2 border-pink-500/50 rounded-xl animate-spin bg-gradient-to-br from-pink-500/10 to-purple-500/10" style={{ animationDuration: '8s' }} />
        <div className="absolute bottom-12 left-8 w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
        <div className="absolute top-20 left-12 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-bounce" style={{ animationDuration: '1.5s' }} />
      </div>
    ),
    'ai-automations': (
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Central gear */}
        <div className="relative">
          <div className="w-24 h-24 border-4 border-transparent rounded-full animate-spin" style={{ animationDuration: '4s', borderImage: 'linear-gradient(45deg, #06b6d4, #8b5cf6, #ec4899) 1' }}>
            <div className="absolute inset-0 border-4 border-cyan-500/40 rounded-full" />
            <div className="absolute inset-2 border-2 border-purple-500/40 rounded-full" />
            <div className="absolute inset-4 bg-gradient-to-br from-cyan-500/30 to-purple-500/30 rounded-full" />
          </div>
          {/* Connecting lines */}
          <div className="absolute top-1/2 -left-16 w-16 h-0.5 bg-gradient-to-r from-transparent via-cyan-500 to-purple-500">
            <div className="absolute right-0 w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-ping" />
          </div>
          <div className="absolute top-1/2 -right-16 w-16 h-0.5 bg-gradient-to-l from-transparent via-pink-500 to-purple-500">
            <div className="absolute left-0 w-3 h-3 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
          </div>
          <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-0.5 h-16 bg-gradient-to-t from-purple-500 via-violet-500 to-transparent">
            <div className="absolute bottom-0 w-3 h-3 bg-gradient-to-r from-violet-400 to-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }} />
          </div>
        </div>
        {/* Orbiting dots */}
        <div className="absolute w-48 h-48 animate-spin" style={{ animationDuration: '6s' }}>
          <div className="absolute top-0 left-1/2 w-4 h-4 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full shadow-lg shadow-green-500/50" />
        </div>
        <div className="absolute w-56 h-56 animate-spin" style={{ animationDuration: '8s', animationDirection: 'reverse' }}>
          <div className="absolute top-0 left-1/2 w-3 h-3 bg-gradient-to-r from-orange-400 to-amber-400 rounded-full shadow-lg shadow-orange-500/50" />
        </div>
        <div className="absolute w-40 h-40 animate-spin" style={{ animationDuration: '5s' }}>
          <div className="absolute top-0 left-1/2 w-2 h-2 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full" />
        </div>
      </div>
    ),
    'ai-ml': (
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Neural network visualization */}
        <div className="relative w-64 h-48">
          {/* Input layer */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 flex flex-col gap-6">
            {['from-blue-400 to-cyan-400', 'from-green-400 to-emerald-400', 'from-purple-400 to-violet-400'].map((gradient, i) => (
              <div key={i} className={`w-5 h-5 bg-gradient-to-r ${gradient} rounded-full animate-pulse shadow-lg`} style={{ animationDelay: `${i * 0.3}s` }} />
            ))}
          </div>
          {/* Hidden layer */}
          <div className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 flex flex-col gap-4">
            {['from-pink-400 to-rose-400', 'from-orange-400 to-amber-400', 'from-cyan-400 to-teal-400', 'from-violet-400 to-purple-400'].map((gradient, i) => (
              <div key={i} className={`w-6 h-6 bg-gradient-to-r ${gradient} rounded-full animate-pulse shadow-lg`} style={{ animationDelay: `${i * 0.2 + 0.5}s` }} />
            ))}
          </div>
          {/* Output layer */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-8">
            {['from-emerald-400 to-green-400', 'from-red-400 to-rose-400'].map((gradient, i) => (
              <div key={i} className={`w-5 h-5 bg-gradient-to-r ${gradient} rounded-full animate-pulse shadow-lg`} style={{ animationDelay: `${i * 0.4 + 1}s` }} />
            ))}
          </div>
          {/* Connection lines */}
          <svg className="absolute inset-0 w-full h-full">
            <defs>
              <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.5" />
              </linearGradient>
            </defs>
            <line x1="20" y1="24" x2="128" y2="12" stroke="url(#grad1)" strokeWidth="2" className="animate-pulse" />
            <line x1="20" y1="24" x2="128" y2="48" stroke="url(#grad1)" strokeWidth="2" className="animate-pulse" />
            <line x1="20" y1="96" x2="128" y2="84" stroke="url(#grad1)" strokeWidth="2" className="animate-pulse" />
            <line x1="20" y1="96" x2="128" y2="120" stroke="url(#grad1)" strokeWidth="2" className="animate-pulse" />
            <line x1="20" y1="168" x2="128" y2="156" stroke="url(#grad1)" strokeWidth="2" className="animate-pulse" />
            <line x1="128" y1="48" x2="244" y2="60" stroke="url(#grad1)" strokeWidth="2" className="animate-pulse" />
            <line x1="128" y1="120" x2="244" y2="132" stroke="url(#grad1)" strokeWidth="2" className="animate-pulse" />
          </svg>
        </div>
        {/* Data particles */}
        <div className="absolute w-full h-full overflow-hidden">
          {[
            { color: 'bg-cyan-400', left: 20, top: 30 },
            { color: 'bg-pink-400', left: 35, top: 50 },
            { color: 'bg-green-400', left: 50, top: 40 },
            { color: 'bg-purple-400', left: 65, top: 60 },
            { color: 'bg-orange-400', left: 80, top: 35 }
          ].map((particle, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 ${particle.color} rounded-full animate-ping`}
              style={{
                left: `${particle.left}%`,
                top: `${particle.top}%`,
                animationDelay: `${i * 0.4}s`,
                animationDuration: '2s'
              }}
            />
          ))}
        </div>
      </div>
    ),
    'ai-consulting': (
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Brain with pulse effect */}
        <div className="relative">
          <div className="w-32 h-32 flex items-center justify-center">
            <Brain size={80} className="text-transparent bg-gradient-to-br from-cyan-400 via-purple-500 to-pink-500 bg-clip-text" style={{ stroke: 'url(#brainGradient)', fill: 'none' }} />
            <svg width="0" height="0">
              <defs>
                <linearGradient id="brainGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#06b6d4" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#ec4899" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          {/* Pulse rings */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-32 h-32 border-2 border-cyan-500/40 rounded-full animate-ping" style={{ animationDuration: '2s' }} />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-40 h-40 border border-purple-500/30 rounded-full animate-ping" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }} />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-48 h-48 border border-pink-500/20 rounded-full animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }} />
          </div>
        </div>
        {/* Floating icons */}
        <div className="absolute top-4 right-12 animate-bounce" style={{ animationDuration: '2s' }}>
          <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg flex items-center justify-center text-white text-sm">💡</div>
        </div>
        <div className="absolute bottom-8 left-12 animate-bounce" style={{ animationDuration: '2.5s', animationDelay: '0.5s' }}>
          <div className="w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-400 rounded-lg flex items-center justify-center text-white text-sm">📊</div>
        </div>
        <div className="absolute top-12 left-8 animate-bounce" style={{ animationDuration: '3s', animationDelay: '1s' }}>
          <div className="w-8 h-8 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-lg flex items-center justify-center text-white text-sm">🎯</div>
        </div>
        <div className="absolute bottom-12 right-8 animate-bounce" style={{ animationDuration: '2.2s', animationDelay: '0.3s' }}>
          <div className="w-8 h-8 bg-gradient-to-r from-pink-400 to-rose-400 rounded-lg flex items-center justify-center text-white text-sm">🚀</div>
        </div>
      </div>
    )
  };

  return (
    <div className="group relative aspect-[4/3] bg-gradient-to-br from-slate-900/50 to-slate-800/30 border border-white/10 p-8 flex items-center justify-center overflow-hidden">
      {/* Colorful light beam effect on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute top-0 left-0 w-full h-[2px] overflow-hidden">
          <div className="absolute top-0 left-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-cyan-400 to-transparent group-hover:animate-[lightPassRight_1.5s_ease-in-out_infinite]" />
        </div>
        <div className="absolute top-0 right-0 w-[2px] h-full overflow-hidden">
          <div className="absolute top-[-100%] right-0 w-full h-[50%] bg-gradient-to-b from-transparent via-purple-500 to-transparent group-hover:animate-[lightPassDown_1.5s_ease-in-out_infinite_0.375s]" />
        </div>
        <div className="absolute bottom-0 left-0 w-full h-[2px] overflow-hidden">
          <div className="absolute bottom-0 right-[-100%] w-[50%] h-full bg-gradient-to-r from-transparent via-pink-500 to-transparent group-hover:animate-[lightPassLeft_1.5s_ease-in-out_infinite_0.75s]" />
        </div>
        <div className="absolute top-0 left-0 w-[2px] h-full overflow-hidden">
          <div className="absolute bottom-[-100%] left-0 w-full h-[50%] bg-gradient-to-b from-transparent via-emerald-400 to-transparent group-hover:animate-[lightPassUp_1.5s_ease-in-out_infinite_1.125s]" />
        </div>
      </div>
      
      {/* Service-specific animation */}
      {animations[serviceId] || (
        <div className="text-cyan-400/20">
          {IconComponent && <IconComponent size={150} strokeWidth={0.5} />}
        </div>
      )}
      
      {/* Corner decorations */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-500/30 group-hover:border-cyan-400/60 transition-colors duration-300" />
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-pink-500/30 group-hover:border-pink-400/60 transition-colors duration-300" />
      
      {/* Background glow effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </div>
  );
};

const ServicesPage = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

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
              Our Services
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-[66px] font-semibold text-white leading-[1.1] tracking-[-0.62px] mb-6">
              Comprehensive AI Solutions
            </h1>
            <p className="text-lg md:text-xl text-white/70 leading-relaxed">
              From strategic consulting to full-scale implementation, we provide end-to-end AI services that transform businesses and drive measurable results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative bg-black py-16 lg:py-24">
        <div className="max-w-[1400px] mx-auto px-4 md:px-[7.6923%]">
          <div className="space-y-20">
            {services.map((service, index) => {
              const IconComponent = iconMap[service.icon];
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={service.id}
                  id={service.id}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center scroll-mt-24 ${
                    !isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Content */}
                  <div className={!isEven ? 'lg:order-2' : ''}>
                    <div className="w-16 h-16 flex items-center justify-center bg-[#FFE500] text-black mb-6">
                      {IconComponent && <IconComponent size={32} />}
                    </div>
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-white/70 leading-relaxed mb-8">
                      {service.description}
                    </p>
                    <ul className="space-y-4 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3">
                          <Check size={20} className="text-[#FFE500] flex-shrink-0" />
                          <span className="text-white/80 text-lg">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-3 text-[#FFE500] font-medium text-lg hover:underline"
                    >
                      <span>Get Started</span>
                      <ArrowRight size={20} />
                    </Link>
                  </div>

                  {/* Visual */}
                  <div className={!isEven ? 'lg:order-1' : ''}>
                    <ServiceAnimation serviceId={service.id} IconComponent={IconComponent} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative bg-[#121212] py-24">
        <div className="max-w-[1400px] mx-auto px-4 md:px-[7.6923%] text-center">
          <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
            Not Sure Which Service You Need?
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto mb-10">
            Our experts will help you identify the best AI solutions for your specific business challenges. Schedule a free consultation today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FFE500] text-black font-medium text-lg transition-all duration-400 hover:bg-[#FFE500]/10 hover:text-[#FFE500]"
          >
            <span>Schedule Free Consultation</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>
    </Layout>
  );
};

export default ServicesPage;
