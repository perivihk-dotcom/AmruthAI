import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Home } from "lucide-react";

const NotFoundPage = () => {
  return (
    <section className="relative bg-black min-h-screen flex items-center justify-center">
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `
              repeating-linear-gradient(0deg, transparent, transparent 1px, transparent 1px, transparent 7.6923%),
              repeating-linear-gradient(-90deg, #fff, #fff 1px, transparent 1px, transparent 7.6923%)
            `,
            backgroundSize: "100% 100%",
          }}
        />
        <div className="max-w-[1400px] mx-auto px-4 md:px-[7.6923%] relative z-10 text-center">
          <div className="text-[150px] md:text-[200px] font-bold text-[#FFE500] leading-none mb-4">
            404
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-white mb-6">
            Page Not Found
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-xl mx-auto mb-10">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/"
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-[#FFE500] text-black font-medium text-lg transition-all duration-400 hover:bg-[#FFE500]/10 hover:text-[#FFE500]"
            >
              <Home size={20} />
              <span>Back to Home</span>
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white/10 text-white font-medium text-lg transition-all duration-400 hover:bg-white hover:text-black"
            >
              <ArrowLeft size={20} />
              <span>Go Back</span>
            </button>
          </div>
        </div>
      </section>
  );
};

export default NotFoundPage;
