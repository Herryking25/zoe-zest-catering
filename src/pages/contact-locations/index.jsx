import React from 'react';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import ContactForm from './components/ContactForm';
import ServiceAreaMap from './components/ServiceAreaMap';
import TeamDirectory from './components/TeamDirectory';
import OfficeLocation from './components/OfficeLocation';
import SocialMediaHub from './components/SocialMediaHub';
import FAQSection from './components/FAQSection';
import NewsletterSignup from './components/NewsletterSignup';

const ContactLocationsPage = () => {
  const communicationChannels = [
    {
      title: 'Phone Support',
      description: 'Speak directly with our team',
      contact: '(555) 123-4567',
      hours: 'Mon-Fri 8AM-6PM, Sat 9AM-4PM',
      icon: 'Phone',
      color: 'bg-primary',
      action: 'tel:(555)123-4567'
    },
    {
      title: 'Email Inquiries',
      description: 'Detailed questions and requests',
      contact: 'hello@zoezestcatering.com',
      hours: 'Response within 4 hours',
      icon: 'Mail',
      color: 'bg-accent',
      action: 'mailto:hello@zoezestcatering.com'
    },
    {
      title: 'Text Messages',
      description: 'Quick questions and updates',
      contact: '(555) 123-TEXT',
      hours: 'Mon-Sun 8AM-8PM',
      icon: 'MessageSquare',
      color: 'bg-secondary',
      action: 'sms:(555)123-8398'
    },
    {
      title: 'Emergency Support',
      description: 'Day-of-event assistance',
      contact: '(555) 911-CATER',
      hours: '24/7 during active events',
      icon: 'AlertCircle',
      color: 'bg-error',
      action: 'tel:(555)911-2283'
    }
  ];

  const handleContactClick = (action) => {
    window.location.href = action;
  };

  return (
    <div className="min-h-screen bg-warm-gradient">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-foreground mb-6">
              Let's Create Something
              <span className="block text-primary">Extraordinary Together</span>
            </h1>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              Whether you're planning an intimate gathering or a grand celebration, our team is here to bring your culinary vision to life. 
              Reach out through any of our convenient communication channels.
            </p>
          </div>

          {/* Quick Contact Channels */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {communicationChannels.map((channel, index) => (
              <div
                key={index}
                onClick={() => handleContactClick(channel.action)}
                className="bg-white rounded-xl p-6 shadow-warm hover:shadow-warm-lg transition-all cursor-pointer group"
              >
                <div className={`w-12 h-12 ${channel.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon name={channel.icon} size={24} className="text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{channel.title}</h3>
                <p className="text-sm text-text-secondary mb-3">{channel.description}</p>
                <div className="space-y-1">
                  <p className="font-medium text-primary">{channel.contact}</p>
                  <p className="text-xs text-text-secondary">{channel.hours}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content Grid */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Contact Form */}
            <ContactForm />
            
            {/* Service Area Map */}
            <ServiceAreaMap />
          </div>

          {/* Team Directory */}
          <div className="mb-16">
            <TeamDirectory />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {/* Office Location */}
            <OfficeLocation />
            
            {/* Social Media Hub */}
            <SocialMediaHub />
          </div>

          {/* FAQ Section */}
          <div className="mb-16">
            <FAQSection />
          </div>

          {/* Newsletter Signup */}
          <div className="mb-16">
            <NewsletterSignup />
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="bg-primary text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
            Ready to Start Planning?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8">
            Every extraordinary event begins with a simple conversation. Let's discuss how we can make your celebration unforgettable.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(555)123-4567"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-white text-primary rounded-lg font-semibold hover:bg-gray-50 transition-colors"
            >
              <Icon name="Phone" size={20} />
              <span>Call Now</span>
            </a>
            <a
              href="/consultation-booking"
              className="inline-flex items-center justify-center space-x-2 px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors"
            >
              <Icon name="Calendar" size={20} />
              <span>Book Consultation</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <svg width="32" height="32" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="18" fill="var(--color-primary)" />
                  <path d="M12 20 L20 12 L28 20 L20 28 Z" fill="var(--color-warm-peach)" />
                  <circle cx="20" cy="20" r="4" fill="var(--color-accent)" />
                </svg>
                <span className="text-xl font-playfair font-bold">Zoe Zest Catering</span>
              </div>
              <p className="text-gray-300 mb-4 max-w-md">
                Creating extraordinary culinary experiences that transform ordinary moments into cherished memories. 
                Every bite tells a story of passion, artistry, and heartfelt hospitality.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Icon name="Instagram" size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Icon name="Facebook" size={20} />
                </a>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  <Icon name="Linkedin" size={20} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-300">
                <li><a href="/services-overview" className="hover:text-white transition-colors">Our Services</a></li>
                <li><a href="/portfolio-gallery" className="hover:text-white transition-colors">Portfolio</a></li>
                <li><a href="/about-zoe-zest" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="/consultation-booking" className="hover:text-white transition-colors">Book Consultation</a></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-gray-300">
                <p>(555) 123-4567</p>
                <p>hello@zoezestcatering.com</p>
                <p>123 Culinary Way<br />Downtown District, ST 12345</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-300">
            <p>&copy; {new Date().getFullYear()} Zoe Zest Catering. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactLocationsPage;