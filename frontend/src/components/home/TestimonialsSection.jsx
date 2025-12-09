import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../../data/mock';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="relative bg-[#121212] py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-4 md:px-[7.6923%]">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block text-[#FFE500] text-sm font-medium tracking-wider uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
            What Our Clients Say
          </h2>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="relative bg-black/50 border border-white/10 p-8 md:p-12">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 text-[#FFE500]/20">
              <Quote size={60} />
            </div>

            {/* Content */}
            <div className="relative z-10">
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed mb-8 italic">
                "{currentTestimonial.quote}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-lg font-semibold text-white">
                    {currentTestimonial.author}
                  </h4>
                  <p className="text-white/50">
                    {currentTestimonial.role}, {currentTestimonial.company}
                  </p>
                </div>

                {/* Navigation */}
                <div className="flex gap-3">
                  <button
                    onClick={prevTestimonial}
                    className="p-3 bg-white/10 text-white transition-all duration-400 hover:bg-[#FFE500] hover:text-black"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-3 bg-white/10 text-white transition-all duration-400 hover:bg-[#FFE500] hover:text-black"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 transition-all duration-300 ${
                  index === currentIndex ? 'bg-[#FFE500]' : 'bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
