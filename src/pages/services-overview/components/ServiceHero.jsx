import React from 'react';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ServiceHero = () => {
  return (
    <section className="relative h-[60vh] min-h-[500px] overflow-hidden bg-gradient-to-br from-primary/10 to-accent/5">
      <div className="absolute inset-0">
        <Image
          src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg"
          alt="Elegant catering setup with beautifully arranged dishes"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
      </div>
      
      <div className="relative z-10 h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-playfair font-bold text-white mb-6 leading-tight">
              Culinary Excellence
              <span className="block text-accent font-dancing text-3xl sm:text-4xl lg:text-5xl mt-2">
                for Every Occasion
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
              From intimate gatherings to grand celebrations, we craft unforgettable dining experiences that transform your special moments into cherished memories.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="lg"
                className="shadow-warm-lg hover:shadow-warm"
              >
                Explore Our Services
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              >
                Book Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;