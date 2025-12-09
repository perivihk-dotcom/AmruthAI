import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { companyInfo } from '../../data/mock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
        isScrolled ? 'bg-black/95 backdrop-blur-sm' : 'bg-black'
      }`}
      style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}
    >
      <div className="max-w-[1400px] mx-auto px-4 md:px-[7.6923%]">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src={companyInfo.logo}
              alt={companyInfo.name}
              className="h-12 w-12 object-contain"
            />
            <span className="text-xl font-semibold text-white tracking-tight">
              {companyInfo.name}
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-lg font-normal transition-colors duration-300 ${
                  isActive(link.path)
                    ? 'text-[#FFE500]'
                    : 'text-[#4D4D4D] hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            to="/contact"
            className="hidden md:flex items-center justify-center px-6 py-3 bg-[#FFE500] text-black font-medium text-lg transition-all duration-400 hover:bg-[#FFE500]/10 hover:text-[#FFE500]"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-lg font-normal py-2 transition-colors duration-300 ${
                    isActive(link.path)
                      ? 'text-[#FFE500]'
                      : 'text-[#4D4D4D] hover:text-white'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                to="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-center px-6 py-3 bg-[#FFE500] text-black font-medium text-lg mt-4"
              >
                Get Started
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
