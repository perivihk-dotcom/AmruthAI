import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { companyInfo } from '../../data/mock';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' }
  ];

  const serviceLinks = [
    { label: 'Web Development', id: 'web-development' },
    { label: 'App Development', id: 'app-development' },
    { label: 'AI Automations', id: 'ai-automations' },
    { label: 'AI/ML Solutions', id: 'ai-ml' },
    { label: 'AI Consulting', id: 'ai-consulting' }
  ];

  return (
    <footer className="bg-black border-t border-white/10">
      {/* Main Footer Content */}
      <div className="max-w-[1400px] mx-auto px-4 md:px-[7.6923%] py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={companyInfo.logo}
                alt={companyInfo.name}
                className="h-12 w-12 object-contain"
              />
              <span className="text-xl font-semibold text-white">
                {companyInfo.name}
              </span>
            </Link>
            <p className="text-white/60 text-base leading-relaxed">
              {companyInfo.description}
            </p>
            <div className="flex gap-4">
              <a
                href={companyInfo.socialLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#FFE500] hover:text-black transition-all duration-400"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={`https://wa.me/919440203095`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#FFE500] hover:text-black transition-all duration-400"
              >
                <i className="fa-brands fa-whatsapp text-lg"></i>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 hover:text-[#FFE500] transition-colors duration-300 flex items-center gap-2 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-4">
              {serviceLinks.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.id}`}
                    className="text-white/60 hover:text-[#FFE500] transition-colors duration-300"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={`mailto:${companyInfo.email}`}
                  className="text-white/60 hover:text-[#FFE500] transition-colors duration-300 flex items-start gap-3"
                >
                  <Mail size={20} className="mt-1 flex-shrink-0" />
                  <span>{companyInfo.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${companyInfo.phone}`}
                  className="text-white/60 hover:text-[#FFE500] transition-colors duration-300 flex items-start gap-3"
                >
                  <Phone size={20} className="mt-1 flex-shrink-0" />
                  <span>{companyInfo.phone}</span>
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <MapPin size={20} className="mt-1 flex-shrink-0" />
                <span>{companyInfo.address}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 md:px-[7.6923%] py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/40 text-sm">
              &copy; {currentYear} {companyInfo.name}. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-white/40 hover:text-[#FFE500] text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-white/40 hover:text-[#FFE500] text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
