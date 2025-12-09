import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { images } from '../../data/mock';

const AboutPreview = () => {
  const highlights = [
    'Industry-leading AI expertise',
    'Proven track record with 50+ projects',
    'Dedicated support & continuous improvement',
    'Custom solutions tailored to your needs'
  ];

  return (
    <section className="relative bg-black py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-4 md:px-[7.6923%]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image Section */}
          <div className="relative">
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={images.aiBrain}
                alt="AI Technology"
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent" />
            </div>
            {/* Accent Border */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#FFE500] -z-10" />
          </div>

          {/* Content Section */}
          <div>
            <span className="inline-block text-[#FFE500] text-sm font-medium tracking-wider uppercase mb-4">
              About Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6 leading-tight">
              Pioneering the Future of AI Innovation
            </h2>
            <p className="text-lg text-white/70 leading-relaxed mb-8">
              At AmruthAI, we believe in the transformative power of artificial intelligence. 
              Our team of world-class researchers and engineers work tirelessly to develop 
              solutions that help businesses thrive in the digital age.
            </p>

            {/* Highlights */}
            <ul className="space-y-4 mb-10">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <CheckCircle size={20} className="text-[#FFE500] flex-shrink-0" />
                  <span className="text-white/80 text-lg">{item}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <Link
              to="/about"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#FFE500] text-black font-medium text-lg transition-all duration-400 hover:bg-[#FFE500]/10 hover:text-[#FFE500]"
            >
              <span>Learn More About Us</span>
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
