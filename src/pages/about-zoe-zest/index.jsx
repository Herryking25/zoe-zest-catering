import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import PhilosophySection from './components/PhilosophySection';
import TeamSection from './components/TeamSection';
import KitchenTourSection from './components/KitchenTourSection';
import SustainabilitySection from './components/SustainabilitySection';
import TestimonialsSection from './components/TestimonialsSection';
import TimelineSection from './components/TimelineSection';
import ValuesSection from './components/ValuesSection';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';

const AboutZoeZest = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Philosophy Section */}
      <PhilosophySection />
      
      {/* Team Section */}
      <TeamSection />
      
      {/* Kitchen Tour Section */}
      {/* <KitchenTourSection /> */}
      
      {/* Sustainability Section */}
      {/* <SustainabilitySection /> */}
      
      {/* Testimonials Section */}
      <TestimonialsSection />
      
      {/* Timeline Section */}
      <TimelineSection />
      
      {/* Values Section */}
      <ValuesSection />
      
      {/* Call to Action Section */}
      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-primary-foreground mb-6">
            Ready to Create Your Culinary Story?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
            Let's discuss how we can bring your vision to life with exceptional food, impeccable service, and unforgettable experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="secondary" size="lg" asChild>
              <Link to="/consultation-booking">
                <Icon name="Calendar" size={20} className="mr-2" />
                Book Your Consultation
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" asChild>
              <Link to="/portfolio-gallery">
                <Icon name="Image" size={20} className="mr-2" />
                View Our Portfolio
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="relative">
                  <svg width="32" height="32" viewBox="0 0 40 40">
                    <circle cx="20" cy="20" r="18" fill="var(--color-primary)" />
                    <path d="M12 20 L20 12 L28 20 L20 28 Z" fill="var(--color-warm-peach)" className="opacity-90" />
                    <circle cx="20" cy="20" r="4" fill="var(--color-accent)" />
                  </svg>
                </div>
                <div>
                  <span className="text-lg font-playfair font-bold">Zoe Zest</span>
                  <span className="text-sm font-dancing block -mt-1">Catering</span>
                </div>
              </div>
              <p className="text-background/80 mb-4 leading-relaxed">
                Creating unforgettable culinary experiences where every bite tells a story of love, celebration, and exceptional hospitality.
              </p>
              <div className="flex space-x-4">
                <Icon name="Facebook" size={20} className="text-background/60 hover:text-primary cursor-pointer transition-warm" />
                <Icon name="Instagram" size={20} className="text-background/60 hover:text-primary cursor-pointer transition-warm" />
                <Icon name="Twitter" size={20} className="text-background/60 hover:text-primary cursor-pointer transition-warm" />
                <Icon name="Linkedin" size={20} className="text-background/60 hover:text-primary cursor-pointer transition-warm" />
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-playfair font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                <Link to="/services-overview" className="block text-background/80 hover:text-primary transition-warm">Our Services</Link>
                <Link to="/portfolio-gallery" className="block text-background/80 hover:text-primary transition-warm">Portfolio</Link>
                <Link to="/consultation-booking" className="block text-background/80 hover:text-primary transition-warm">Book Consultation</Link>
                <Link to="/contact-locations" className="block text-background/80 hover:text-primary transition-warm">Contact Us</Link>
              </div>
            </div>
            
            {/* Contact Info */}
            <div>
              <h4 className="font-playfair font-semibold mb-4">Contact</h4>
              <div className="space-y-2 text-background/80">
                <div className="flex items-center space-x-2">
                  <Icon name="Phone" size={16} />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Mail" size={16} />
                  <span>hello@zoezestcatering.com</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} />
                  <span>123 Culinary Way, Food City, FC 12345</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-background/20 mt-8 pt-8 text-center">
            <p className="text-background/60">
              © {new Date().getFullYear()} Zoe Zest Catering. All rights reserved. | Crafted with love for exceptional experiences.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AboutZoeZest;