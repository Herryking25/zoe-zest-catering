import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const GalleryCard = ({ item, onSaveToBoard, onShare, onViewDetails }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const handleSave = () => {
    setIsSaved(!isSaved);
    onSaveToBoard(item.id);
  };

  const getCategoryIcon = (category) => {
    const icons = {
      corporate: 'Building2',
      weddings: 'Heart',
      private: 'Users',
      seasonal: 'Calendar',
      signature: 'ChefHat'
    };
    return icons[category] || 'Image';
  };

  return (
    <div 
      className="group relative bg-white rounded-xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-all duration-300 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          {/* Action Buttons */}
          <div className="absolute top-4 right-4 flex gap-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={handleSave}
              className={`bg-white/90 hover:bg-white text-foreground ${
                isSaved ? 'text-primary' : ''
              }`}
              iconName={isSaved ? 'Heart' : 'Heart'}
              iconSize={16}
            />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => onShare(item)}
              className="bg-white/90 hover:bg-white text-foreground"
              iconName="Share2"
              iconSize={16}
            />
          </div>

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
            <div className="flex items-center gap-2 mb-2">
              <Icon name={getCategoryIcon(item.category)} size={16} />
              <span className="text-sm font-medium capitalize">{item.category}</span>
              {item.guestCount && (
                <>
                  <span className="text-sm opacity-75">•</span>
                  <span className="text-sm opacity-75">{item.guestCount} guests</span>
                </>
              )}
            </div>
            <h3 className="font-playfair text-lg font-semibold mb-1">{item.title}</h3>
            <p className="text-sm opacity-90 line-clamp-2">{item.description}</p>
            
            {item.testimonial && (
              <div className="mt-3 pt-3 border-t border-white/20">
                <p className="text-sm italic opacity-90 line-clamp-2">"{item.testimonial}"</p>
                <p className="text-xs opacity-75 mt-1">- {item.clientName}</p>
              </div>
            )}
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="font-playfair text-lg font-semibold text-foreground line-clamp-1">
            {item.title}
          </h3>
          {item.featured && (
            <Icon name="Star" size={16} className="text-accent fill-current" />
          )}
        </div>
        
        <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
          {item.description}
        </p>

        {/* Event Details */}
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
          {item.eventDate && (
            <div className="flex items-center gap-1">
              <Icon name="Calendar" size={12} />
              <span>{item.eventDate}</span>
            </div>
          )}
          {item.location && (
            <div className="flex items-center gap-1">
              <Icon name="MapPin" size={12} />
              <span>{item.location}</span>
            </div>
          )}
        </div>

        {/* Tags */}
        {item.tags && item.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-3">
            {item.tags.slice(0, 3).map((tag, index) => (
              <span
                key={index}
                className="bg-muted text-muted-foreground px-2 py-1 rounded text-xs"
              >
                {tag}
              </span>
            ))}
            {item.tags.length > 3 && (
              <span className="text-xs text-muted-foreground">+{item.tags.length - 3} more</span>
            )}
          </div>
        )}

        {/* Action Button */}
        <Button
          variant="outline"
          size="sm"
          fullWidth
          onClick={() => onViewDetails(item)}
          iconName="Eye"
          iconPosition="left"
          iconSize={14}
        >
          View Details
        </Button>
      </div>
    </div>
  );
};

export default GalleryCard;