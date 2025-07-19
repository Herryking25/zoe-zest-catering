import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, isExpanded, onToggle }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === service.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? service.images.length - 1 : prev - 1
    );
  };

  return (
    <div className="bg-card rounded-2xl shadow-warm overflow-hidden transition-all duration-300 hover:shadow-warm-lg">
      {/* Image Gallery */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={service.images[currentImageIndex]}
          alt={`${service.title} - Image ${currentImageIndex + 1}`}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        
        {service.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all"
            >
              <Icon name="ChevronLeft" size={16} />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all"
            >
              <Icon name="ChevronRight" size={16} />
            </button>
            
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-1">
              {service.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </>
        )}
        
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
            {service.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-playfair font-bold text-foreground mb-2">
              {service.title}
            </h3>
            <p className="text-muted-foreground text-sm mb-3">
              {service.subtitle}
            </p>
          </div>
          <div className="text-right">
            <p className="text-primary font-bold text-lg">
              {service.priceRange}
            </p>
            <p className="text-muted-foreground text-sm">
              {service.priceUnit}
            </p>
          </div>
        </div>

        <p className="text-foreground mb-4 leading-relaxed">
          {service.description}
        </p>

        {/* Key Features */}
        <div className="flex flex-wrap gap-2 mb-4">
          {service.features.slice(0, 3).map((feature, index) => (
            <span
              key={index}
              className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm"
            >
              {feature}
            </span>
          ))}
          {service.features.length > 3 && (
            <span className="text-muted-foreground text-sm px-3 py-1">
              +{service.features.length - 3} more
            </span>
          )}
        </div>

        {/* Expandable Content */}
        {isExpanded && (
          <div className="border-t border-border pt-4 mt-4 space-y-4">
            {/* All Features */}
            <div>
              <h4 className="font-semibold text-foreground mb-2">What's Included:</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-success" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sample Menu Items */}
            {service.sampleItems && (
              <div>
                <h4 className="font-semibold text-foreground mb-2">Sample Menu Items:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {service.sampleItems.map((item, index) => (
                    <div key={index} className="text-sm text-muted-foreground">
                      • {item}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Guest Count */}
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-2">
                <Icon name="Users" size={16} className="text-muted-foreground" />
                <span className="text-foreground">
                  Ideal for: <strong>{service.guestRange}</strong>
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-muted-foreground" />
                <span className="text-foreground">
                  Lead time: <strong>{service.leadTime}</strong>
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-3 mt-6">
          <Button
            variant="default"
            size="default"
            className="flex-1"
            iconName="Calendar"
            iconPosition="left"
          >
            Book Consultation
          </Button>
          <Button
            variant="outline"
            size="default"
            onClick={onToggle}
            iconName={isExpanded ? "ChevronUp" : "ChevronDown"}
            iconPosition="right"
          >
            {isExpanded ? "Show Less" : "Learn More"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;