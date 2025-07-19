import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const NewsletterFooter = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const socialLinks = [
    { name: 'Instagram', icon: 'Instagram', url: '#', color: 'hover:text-pink-500' },
    { name: 'Facebook', icon: 'Facebook', url: '#', color: 'hover:text-blue-500' },
    { name: 'Twitter', icon: 'Twitter', url: '#', color: 'hover:text-blue-400' },
    { name: 'LinkedIn', icon: 'Linkedin', url: '#', color: 'hover:text-blue-600' }
  ];

  const quickLinks = [
    { name: 'Services', path: '/services-overview' },
    { name: 'Portfolio', path: '/portfolio-gallery' },
    { name: 'About Zoe', path: '/about-zoe-zest' },
    { name: 'Contact', path: '/contact-locations' }
  ];

  const serviceLinks = [
    { name: 'Event Catering', path: '/services-overview' },
    { name: 'Small Chops', path: '/services-overview' },
    { name: 'Beverage Curation', path: '/services-overview' },
    { name: 'Private Chef', path: '/services-overview' }
  ];

  const recentPosts = [
    {
      title: "Summer Menu Highlights",
      date: "July 15, 2025",
      excerpt: "Discover our fresh seasonal offerings featuring locally sourced ingredients..."
    },
    {
      title: "Wedding Season Tips",
      date: "July 12, 2025",
      excerpt: "Planning your dream wedding? Here are our top catering recommendations..."
    },
    {
      title: "Corporate Event Trends",
      date: "July 10, 2025",
      excerpt: "The latest trends in corporate catering that will impress your guests..."
    }
  ];

  return (
    <footer className="bg-foreground text-white">
      {/* Newsletter Section */}
      <div className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Newsletter Content */}
            <div>
              <div className="flex items-center mb-4">
                <Icon name="Mail" size={24} className="text-white mr-2" />
                <span className="text-white/90 font-medium">Stay Connected</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-playfair font-bold text-white mb-4">
                Get Seasonal Recipe Previews
              </h3>
              <p className="text-lg text-white/90 mb-6">
                Subscribe to our newsletter for exclusive recipes, event planning tips, 
                and seasonal menu previews delivered straight to your inbox.
              </p>
              
              {/* Newsletter Form */}
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-white/10 border-white/20 text-white placeholder-white/60"
                    required
                  />
                </div>
                <Button 
                  type="submit"
                  variant="secondary"
                  size="lg"
                  className="bg-white text-primary hover:bg-gray-100"
                  disabled={isSubscribed}
                >
                  {isSubscribed ? (
                    <>
                      <Icon name="Check" size={18} className="mr-2" />
                      Subscribed!
                    </>
                  ) : (
                    <>
                      <Icon name="Send" size={18} className="mr-2" />
                      Subscribe
                    </>
                  )}
                </Button>
              </form>
              
              <p className="text-sm text-white/70 mt-3">
                No spam, unsubscribe at any time. We respect your privacy.
              </p>
            </div>

            {/* Recent Blog Posts */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h4 className="text-xl font-playfair font-bold text-white mb-6">
                Latest from Our Kitchen
              </h4>
              <div className="space-y-4">
                {recentPosts.map((post, index) => (
                  <div key={index} className="border-b border-white/20 pb-4 last:border-b-0">
                    <h5 className="font-semibold text-white mb-1">{post.title}</h5>
                    <p className="text-sm text-white/70 mb-2">{post.date}</p>
                    <p className="text-sm text-white/80">{post.excerpt}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <Link to="/homepage" className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <svg width="40" height="40" viewBox="0 0 40 40">
                    <circle cx="20" cy="20" r="18" fill="var(--color-primary)" />
                    <path d="M12 20 L20 12 L28 20 L20 28 Z" fill="var(--color-warm-peach)" />
                    <circle cx="20" cy="20" r="4" fill="var(--color-accent)" />
                  </svg>
                </div>
                <div>
                  <span className="text-xl font-playfair font-bold text-white">Zoe Zest</span>
                  <span className="block text-sm font-dancing text-accent -mt-1">Catering</span>
                </div>
              </Link>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Creating unforgettable culinary experiences where every bite tells a story. 
                Crafted with care, served with heart.
              </p>
              
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    className={`w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-gray-300 transition-colors duration-300 ${social.color}`}
                    aria-label={social.name}
                  >
                    <Icon name={social.icon} size={20} />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Quick Links</h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-accent transition-colors duration-300 flex items-center"
                    >
                      <Icon name="ChevronRight" size={16} className="mr-2" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Our Services</h4>
              <ul className="space-y-3">
                {serviceLinks.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.path}
                      className="text-gray-300 hover:text-accent transition-colors duration-300 flex items-center"
                    >
                      <Icon name="ChevronRight" size={16} className="mr-2" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-6">Get in Touch</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="MapPin" size={20} className="text-accent mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">
                      123 Culinary Street<br />
                      Downtown District<br />
                      New York, NY 10001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-accent flex-shrink-0" />
                  <a href="tel:+1234567890" className="text-gray-300 hover:text-accent transition-colors duration-300">
                    (123) 456-7890
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-accent flex-shrink-0" />
                  <a href="mailto:hello@zoezest.com" className="text-gray-300 hover:text-accent transition-colors duration-300">
                    hello@zoezest.com
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={20} className="text-accent flex-shrink-0" />
                  <div className="text-gray-300">
                    <p>Mon-Fri: 9AM-6PM</p>
                    <p>Sat-Sun: 10AM-4PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Zoe Zest Catering. All rights reserved.
            </div>
            
            <div className="flex items-center space-x-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">
                Terms of Service
              </a>
              <a href="#" className="text-gray-400 hover:text-accent transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default NewsletterFooter;