import React, { useState } from 'react';
import Header from '../../components/ui/Header';
import ServiceHero from './components/ServiceHero';
import ServiceCard from './components/ServiceCard';
import MenuBuilder from './components/MenuBuilder';
import ComparisonTable from './components/ComparisonTable';
import TestimonialSection from './components/TestimonialSection';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';

const ServicesOverview = () => {
  const [expandedService, setExpandedService] = useState(null);

  const services = [
    {
      id: 'event-catering',
      category: 'Event Catering',
      title: 'Corporate & Wedding Catering',
      subtitle: 'Sophisticated dining for your most important occasions',
      description: 'Transform your corporate events and wedding celebrations with our comprehensive catering services. From intimate board meetings to grand wedding receptions, we deliver exceptional cuisine with flawless execution.',
      priceRange: '$45-85',
      priceUnit: 'per person',
      guestRange: '25-200 guests',
      leadTime: '2-4 weeks',
      images: [
        'https://images.unsplash.com/photo-1519225421980-715cb0215aed',
        'https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg',
        'https://images.unsplash.com/photo-1511795409834-ef04bbd61622'
      ],
      features: [
        'Custom menu development',
        'Professional service staff',
        'Complete table setup',
        'Dietary accommodations',
        'Event coordination',
        'Full cleanup service',
        'Premium presentation',
        'Flexible timing'
      ],
      sampleItems: [
        'Herb-crusted salmon with lemon butter',
        'Braised short ribs with red wine reduction',
        'Quinoa-stuffed portobello mushrooms',
        'Seasonal roasted vegetables',
        'Artisan bread selection',
        'Signature dessert station'
      ]
    },
    {
      id: 'small-chops',
      category: 'Small Chops',
      title: 'Signature Small Chops Collection',
      subtitle: 'Artfully crafted bite-sized perfection',
      description: 'Our signature small chops collection features carefully curated appetizers that pack maximum flavor into every bite. Perfect for cocktail parties, networking events, and intimate gatherings.',
      priceRange: '$3.50-8',
      priceUnit: 'per piece',
      guestRange: '10-100 guests',
      leadTime: '1-2 weeks',
      images: [
        'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg',
        'https://images.unsplash.com/photo-1551024506-0bccd828d307',
        'https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg'
      ],
      features: [
        'Artisan ingredient sourcing',
        'Seasonal menu rotation',
        'Dietary-friendly options',
        'Beautiful presentation',
        'Portion flexibility',
        'Fresh preparation',
        'Custom combinations',
        'Elegant serving'
      ],
      sampleItems: [
        'Truffle arancini with parmesan',
        'Smoked salmon canapés',
        'Mini beef wellington bites',
        'Stuffed mushroom caps',
        'Prosciutto-wrapped asparagus',
        'Chocolate-dipped strawberries'
      ]
    },
    {
      id: 'beverage-curation',
      category: 'Beverages',
      title: 'Custom Beverage Curation',
      subtitle: 'Perfectly paired drinks for every palate',
      description: 'Elevate your event with our expertly curated beverage selections. From signature cocktails to wine pairings, we create drink experiences that complement your menu and enhance your celebration.',
      priceRange: '$12-25',
      priceUnit: 'per person',
      guestRange: '15-150 guests',
      leadTime: '1-3 weeks',
      images: [
        'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b',
        'https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg',
        'https://images.unsplash.com/photo-1551024709-8f23befc6f87'
      ],
      features: [
        'Signature cocktail creation',
        'Wine pairing expertise',
        'Non-alcoholic alternatives',
        'Professional bartending',
        'Premium spirits selection',
        'Seasonal specialties',
        'Custom drink menus',
        'Glassware included'
      ],
      sampleItems: [
        'Seasonal signature cocktails',
        'Curated wine selections',
        'Artisan coffee service',
        'Fresh juice blends',
        'Specialty mocktails',
        'Premium spirit tastings'
      ]
    }
  ];

  const toggleExpanded = (serviceId) => {
    setExpandedService(expandedService === serviceId ? null : serviceId);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <ServiceHero />

      {/* Services Grid */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-foreground mb-4">
              Our Service Offerings
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive range of catering services, each designed to create 
              memorable dining experiences tailored to your unique celebration.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
                isExpanded={expandedService === service.id}
                onToggle={() => toggleExpanded(service.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Menu Builder */}
      {/* <MenuBuilder /> */}

      {/* Service Philosophy */}
      <section className="py-16 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-foreground mb-6">
                The Zoe Zest
                <span className="block text-accent font-dancing text-2xl sm:text-3xl mt-2">
                  Philosophy
                </span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                At Zoe Zest, we believe that exceptional catering goes beyond just great food. 
                It's about creating moments that become memories, crafting experiences that 
                bring people together, and delivering service that exceeds expectations.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Heart" size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-bold text-foreground mb-2">
                      Elevated Comfort
                    </h3>
                    <p className="text-muted-foreground">
                      Sophisticated flavors presented with warmth and approachability, 
                      making every guest feel welcomed and valued.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Sparkles" size={20} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-bold text-foreground mb-2">
                      Artful Presentation
                    </h3>
                    <p className="text-muted-foreground">
                      Every dish is a work of art, carefully plated and presented to 
                      create visual impact that matches the exceptional taste.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name="Users" size={20} className="text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-playfair font-bold text-foreground mb-2">
                      Personal Touch
                    </h3>
                    <p className="text-muted-foreground">
                      We take time to understand your vision, preferences, and dietary needs 
                      to create a truly personalized culinary experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="h-32 rounded-xl overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg"
                      alt="Chef preparing food with care"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-48 rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136"
                      alt="Beautifully plated dish"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="h-48 rounded-xl overflow-hidden">
                    <img
                      src="https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg"
                      alt="Elegant table setting"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="h-32 rounded-xl overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1530103862676-de8c9debad1d"
                      alt="Happy guests enjoying food"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Comparison */}
      {/* <ComparisonTable /> */}

      {/* Client Testimonials */}
      <TestimonialSection />

      {/* Call to Action */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold mb-4">
            Ready to Create Your Perfect Event?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your vision and create a customized catering experience 
            that will make your celebration truly unforgettable.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-white/90"
              iconName="Calendar"
              iconPosition="left"
            >
              Book Free Consultation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white/10"
              iconName="Download"
              iconPosition="left"
            >
              Download Service Guide
            </Button>
          </div>
          
          <div className="mt-8 flex items-center justify-center space-x-8 text-sm opacity-80">
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={16} />
              <span>Free 30-min consultation</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={16} />
              <span>No obligation quote</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={16} />
              <span>Satisfaction guaranteed</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesOverview;