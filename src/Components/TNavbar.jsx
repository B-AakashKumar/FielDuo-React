import React, { useState, useEffect } from 'react';
import logo from './logo.png';

const navItems = [
  { name: 'Pricing', href: '#Pricing' },
  { name: 'About', href: '#About' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Scroll detection for transparency/color change
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Auto-close mobile menu on desktop/tablet size change
    const handleResize = () => {
      // Use 768px (Tailwind's 'md' breakpoint)
      if (window.innerWidth >= 768 && isOpen) setIsOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-lg shadow-lg py-2' : 'bg-transparent py-3'}`}>
      {/* Container: Max width ensures content doesn't stretch too wide on desktops */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14 md:h-16">
          <a href="/" className="flex items-center group" aria-label="Home">
            
            {/* Logo Wrapper: Responsive sizing on p, w, h using sm: prefix */}
            <div className="relative mr-2 sm:mr-3 bg-white p-1.5 sm:p-2 rounded-xl shadow-lg transition-all duration-300 group-hover:shadow-blue-500/50">
              <img 
                src={logo}
                alt="Fielduo Logo"
                // Logo Image: Uses sm: for slightly larger size on tablets/desktops
                className="w-6 h-6 sm:w-8 sm:h-8 transition-transform duration-300 group-hover:rotate-12" 
              />
            </div>
            
            {/* Brand Name: Responsive text sizing */}
            <span className="text-lg sm:text-xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
              Fielduo
            </span>
          </a>

          {/* Desktop/Tablet Menu: Hidden below 'md' breakpoint */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                // Increased padding for better click area on larger screens
                className="relative text-gray-300 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-500 transition-all duration-200 group-hover:w-full"></span>
              </a>
            ))}
            <a 
              href="#Contact" 
              // Consistent sizing and margin
              className="ml-3 relative bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 overflow-hidden group shadow-lg hover:shadow-blue-500/50"
            >
              <span className="relative z-10">Contact</span>
            </a>
          </div>

          {/* Mobile Menu Button: Shown below 'md' breakpoint */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-gray-300 hover:text-white hover:bg-gray-800/50 focus:outline-none transition-all duration-200"
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinelinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu Content: Conditional rendering */}
        {isOpen && (
          <div 
            id="mobile-menu" 
            className="md:hidden transition-all duration-300 ease-in-out bg-gray-900/95 backdrop-blur-lg rounded-b-xl border-t border-gray-800 px-3 pt-3 pb-4 space-y-1"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-white block px-3 py-3 rounded-lg text-base font-medium transition-all duration-200 hover:bg-gray-800/50"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a 
              href="/Contact" 
              className="block w-full mt-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-4 py-3 rounded-lg text-base font-semibold transition-all duration-200 text-center shadow-md hover:shadow-lg"
              onClick={() => setIsOpen(false)} // Close menu on contact click
            >
              Contact Us
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};


export default Navbar;
