import React from 'react';
import Icon from '../../../components/AppIcon';

const ConsultationHero = () => {
  return (
    <section className="bg-warm-gradient py-16 lg:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <Icon name="Calendar" size={48} className="text-primary mx-auto mb-4" />
          <h1 className="text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-4">
            Book Your Consultation
          </h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Let's create something extraordinary together. Our personalized consultation is the first step 
            in crafting your perfect culinary experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-warm">
            <Icon name="Users" size={32} className="text-accent mx-auto mb-3" />
            <h3 className="font-playfair font-semibold text-foreground mb-2">Personalized Planning</h3>
            <p className="text-sm text-text-secondary">
              Tailored recommendations based on your event vision and preferences
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-warm">
            <Icon name="ChefHat" size={32} className="text-accent mx-auto mb-3" />
            <h3 className="font-playfair font-semibold text-foreground mb-2">Menu Curation</h3>
            <p className="text-sm text-text-secondary">
              Custom menu development with seasonal ingredients and dietary accommodations
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-warm">
            <Icon name="Heart" size={32} className="text-accent mx-auto mb-3" />
            <h3 className="font-playfair font-semibold text-foreground mb-2">Collaborative Approach</h3>
            <p className="text-sm text-text-secondary">
              Partnership-focused planning that brings your culinary vision to life
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConsultationHero;