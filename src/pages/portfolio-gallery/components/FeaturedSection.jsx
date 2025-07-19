import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const FeaturedSection = ({ featuredItems, onViewDetails }) => {
  if (!featuredItems || featuredItems.length === 0) return null;

  const mainFeatured = featuredItems[0];
  const secondaryFeatured = featuredItems.slice(1, 3);

  return (
    <section className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-playfair font-bold text-foreground mb-2">
          Featured Celebrations
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Discover our most memorable events and signature creations that showcase the artistry and passion behind every Zoe Zest experience.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Featured Item */}
        <div className="lg:col-span-2">
          <div className="group relative bg-white rounded-2xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-all duration-300">
            <div className="relative overflow-hidden">
              <Image
                src={mainFeatured.image}
                alt={mainFeatured.title}
                className="w-full h-80 lg:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center gap-2 mb-3">
                    <Icon name="Star" size={16} className="text-accent fill-current" />
                    <span className="text-sm font-medium">Featured Event</span>
                    <span className="text-sm opacity-75">•</span>
                    <span className="text-sm opacity-75">{mainFeatured.guestCount} guests</span>
                  </div>
                  
                  <h3 className="font-playfair text-2xl font-bold mb-2">
                    {mainFeatured.title}
                  </h3>
                  
                  <p className="text-base opacity-90 mb-4 line-clamp-3">
                    {mainFeatured.description}
                  </p>
                  
                  {mainFeatured.testimonial && (
                    <div className="border-t border-white/20 pt-4">
                      <p className="text-sm italic opacity-90 mb-2">
                        "{mainFeatured.testimonial}"
                      </p>
                      <p className="text-xs opacity-75">- {mainFeatured.clientName}</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Category Badge */}
              <div className="absolute top-6 left-6">
                <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-medium">
                  {mainFeatured.category.charAt(0).toUpperCase() + mainFeatured.category.slice(1)}
                </span>
              </div>
            </div>

            <div className="p-6">
              <Button
                variant="default"
                onClick={() => onViewDetails(mainFeatured)}
                iconName="Eye"
                iconPosition="left"
                className="w-full sm:w-auto"
              >
                View Full Story
              </Button>
            </div>
          </div>
        </div>

        {/* Secondary Featured Items */}
        <div className="space-y-6">
          {secondaryFeatured.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-all duration-300 cursor-pointer"
              onClick={() => onViewDetails(item)}
            >
              <div className="relative overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <div className="flex items-center gap-2 mb-2">
                      <Icon name="Heart" size={14} className="text-accent" />
                      <span className="text-xs font-medium capitalize">{item.category}</span>
                    </div>
                    <h4 className="font-playfair text-lg font-semibold mb-1 line-clamp-1">
                      {item.title}
                    </h4>
                    <p className="text-sm opacity-90 line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>

                {/* Featured Badge */}
                <div className="absolute top-3 right-3">
                  <Icon name="Star" size={16} className="text-accent fill-current" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;