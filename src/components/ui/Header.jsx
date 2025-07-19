import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { name: 'Home', path: '/homepage', icon: 'Home' },
    { name: 'Services', path: '/services-overview', icon: 'ChefHat' },
    { name: 'Portfolio', path: '/portfolio-gallery', icon: 'Image' },
    { name: 'About Zoe', path: '/about-zoe-zest', icon: 'Heart' },
    { name: 'Book Consultation', path: '/consultation-booking', icon: 'Calendar' },
    { name: 'Contact', path: '/contact-locations', icon: 'MapPin' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-soft border-b border-border' 
          : 'bg-transparent'
      }`}
    >
      <div className="w-full bg-black">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link 
            to="/homepage" 
            className="flex items-center space-x-3 group transition-warm hover:scale-105"
            onClick={closeMenu}
          >
            <div className="relative">
              <svg 
                width="40" 
                height="40" 
                viewBox="0 0 40 40" 
                className="transition-warm group-hover:rotate-12"
              >
                <circle 
                  cx="20" 
                  cy="20" 
                  r="18" 
                  fill="var(--color-primary)" 
                  className="drop-shadow-sm"
                />
                <path 
                  d="M12 20 L20 12 L28 20 L20 28 Z" 
                  fill="var(--color-warm-peach)" 
                  className="opacity-90"
                />
                <circle 
                  cx="20" 
                  cy="20" 
                  r="4" 
                  fill="var(--color-accent)" 
                />
              </svg>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-playfair font-bold text-primary group-hover:text-accent transition-warm">
                Zoe Zest
              </span>
              <span className="text-xs font-dancing text-secondary -mt-1">
                Catering
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-white px-4 py-2 rounded-lg text-sm font-medium transition-warm flex items-center space-x-2 ${
                  isActivePath(item.path)
                    ? 'bg-primary text-primary-foreground shadow-warm'
                    : 'text-foreground hover:bg-muted hover:text-primary'
                }`}
              >
                <Icon name={item.icon} size={16} />
                <span>{item.name}</span>
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:block text-white">
            <Button 
              variant="default" 
              size="default"
              className="shadow-warm hover:shadow-warm-lg"
              asChild
            >
              <Link to="/consultation-booking">
                Book Consultation
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg text-foreground hover:bg-muted transition-warm"
            aria-label="Toggle menu"
          >
            <Icon name={isMenuOpen ? 'X' : 'Menu'} size={24} />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden transition-all duration-300 ease-warm ${
            isMenuOpen 
              ? 'max-h-screen opacity-100 visible' :'max-h-0 opacity-0 invisible'
          } overflow-hidden bg-white/95 backdrop-blur-md border-t border-border`}
        >
          <nav className="px-4 py-4 space-y-2">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={closeMenu}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg text-base font-medium transition-warm ${
                  isActivePath(item.path)
                    ? 'bg-primary text-primary-foreground shadow-warm'
                    : 'text-foreground hover:bg-muted hover:text-primary'
                }`}
              >
                <Icon name={item.icon} size={20} />
                <span>{item.name}</span>
              </Link>
            ))}
            
            {/* Mobile CTA */}
            <div className="pt-4 border-t border-border mt-4">
              <Button 
                variant="default" 
                size="default"
                fullWidth
                className="shadow-warm"
                asChild
              >
                <Link to="/consultation-booking" onClick={closeMenu}>
                  Book Your Consultation
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;