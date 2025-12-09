import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Cpu, Database, Workflow, Bot, GraduationCap, ArrowRight, Check } from 'lucide-react';
import Layout from '../components/layout/Layout';
import { services } from '../data/mock';

const iconMap = {
  Brain,
  Cpu,
  Database,
  Workflow,
  Bot,
  GraduationCap
};

const ServicesPage = () => {
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
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
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
                    <div className="relative aspect-[4/3] bg-white/[0.02] border border-white/10 p-8 flex items-center justify-center">
                      <div className="text-[#FFE500]/10">
                        {IconComponent && <IconComponent size={200} strokeWidth={0.5} />}
                      </div>
                      {/* Decorative Elements */}
                      <div className="absolute top-4 left-4 w-20 h-20 border border-[#FFE500]/20" />
                      <div className="absolute bottom-4 right-4 w-20 h-20 border border-[#FFE500]/20" />
                    </div>
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
