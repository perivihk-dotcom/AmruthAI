import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Cpu, Bot, Globe, Smartphone, ArrowRight } from 'lucide-react';
import { services } from '../../data/mock';

const iconMap = {
  Brain,
  Cpu,
  Bot,
  Globe,
  Smartphone
};

const ServicesPreview = () => {
  return (
    <section className="relative bg-black py-24 lg:py-32">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            repeating-linear-gradient(0deg, transparent, transparent 1px, transparent 1px, transparent 7.6923%),
            repeating-linear-gradient(-90deg, #fff, #fff 1px, transparent 1px, transparent 7.6923%)
          `,
          backgroundSize: '100% 100%'
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 md:px-[7.6923%] relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#FFE500] text-sm font-medium tracking-wider uppercase mb-4">
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
            AI Solutions That Drive Results
          </h2>
          <p className="text-lg text-white/60 max-w-2xl mx-auto">
            From strategy to implementation, we provide end-to-end AI services tailored to your business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((service) => {
            const IconComponent = iconMap[service.icon];
            return (
              <div
                key={service.id}
                className="group relative bg-white/[0.02] border border-white/10 p-8 transition-all duration-400 hover:bg-white/[0.05] hover:border-[#FFE500]/30"
              >
                {/* Icon */}
                <div className="w-14 h-14 flex items-center justify-center bg-[#FFE500]/10 text-[#FFE500] mb-6 transition-all duration-400 group-hover:bg-[#FFE500] group-hover:text-black">
                  {IconComponent && <IconComponent size={28} />}
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-white mb-3">
                  {service.title}
                </h3>
                <p className="text-white/60 text-base leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {service.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-white/50">
                      <span className="w-1.5 h-1.5 bg-[#FFE500] rounded-full" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link
            to="/services"
            className="inline-flex items-center gap-3 px-8 py-4 bg-transparent border border-white/20 text-white font-medium text-lg transition-all duration-400 hover:bg-white hover:text-black"
          >
            <span>View All Services</span>
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
