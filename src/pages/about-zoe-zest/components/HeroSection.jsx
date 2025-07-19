import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-warm-gradient flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-warm-cream/80 to-background/90" />
      
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-foreground leading-tight">
                Meet Zoe,
                <span className="text-primary block">Your Culinary Storyteller</span>
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed">
                Where passion meets plate, and every bite tells a story of love, celebration, and unforgettable moments.
              </p>
            </div>

            <div className="flex items-center space-x-4 text-sm text-text-secondary">
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} className="text-accent" />
                <span>15+ Years Experience</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Heart" size={16} className="text-accent" />
                <span>1000+ Happy Clients</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Star" size={16} className="text-accent" />
                <span>Award Winning</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="default" size="lg" asChild>
                <Link to="/consultation-booking">
                  Book Your Consultation
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link to="/portfolio-gallery">
                  View Our Work
                </Link>
              </Button>
            </div>
          </div>

          {/* Video/Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-warm-lg">
              <Image
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop"
                alt="Zoe in her kitchen preparing gourmet dishes"
                className="w-full h-96 object-cover"
              />
              
              {/* Video Play Overlay */}
              <div className="absolute inset-0 bg-black/20 flex items-center justify-center group cursor-pointer hover:bg-black/30 transition-warm">
                <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-warm group-hover:scale-110 transition-warm">
                  <Icon name="Play" size={32} className="text-primary ml-1" />
                </div>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-warm">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Icon name="ChefHat" size={24} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Certified Chef</p>
                  <p className="text-xs text-text-secondary">Culinary Institute Graduate</p>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-warm">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                  <Icon name="Users" size={24} className="text-accent" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">Team of 12</p>
                  <p className="text-xs text-text-secondary">Expert Culinary Staff</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;