import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialsSection = () => {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Bride",
      event: "Wedding Reception",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      content: `The consultation with Zoe was incredible! She listened to every detail of our vision and created a menu that perfectly captured our love story. The tasting session was like a preview of heaven.`,
      rating: 5,
      date: "2 weeks ago"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Event Coordinator",
      event: "Corporate Gala",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      content: `Zoe's professionalism during our consultation was outstanding. She understood our corporate needs while adding creative touches that impressed our 200+ guests. The planning process was seamless.`,
      rating: 5,
      date: "1 month ago"
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Host",
      event: "Anniversary Party",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      content: `From the moment we sat down for our consultation, Zoe made us feel like family. She took our dietary restrictions seriously and created alternatives that were even better than the originals!`,
      rating: 5,
      date: "3 weeks ago"
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={index < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}
      />
    ));
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Hear from recent clients about their consultation experience with Zoe Zest
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-card rounded-xl p-6 shadow-warm">
              {/* Header */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                    <Icon name="Check" size={12} className="text-white" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground">{testimonial.name}</h3>
                  <p className="text-sm text-text-secondary">{testimonial.role}</p>
                  <p className="text-xs text-accent">{testimonial.event}</p>
                </div>
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex space-x-1">
                  {renderStars(testimonial.rating)}
                </div>
                <span className="text-sm text-text-secondary">• {testimonial.date}</span>
              </div>

              {/* Content */}
              <blockquote className="text-text-secondary leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* Event Badge */}
              <div className="mt-4 inline-flex items-center px-3 py-1 rounded-full bg-warm-cream text-xs font-medium text-accent">
                <Icon name="PartyPopper" size={12} className="mr-1" />
                Verified Event
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-card rounded-xl p-8 shadow-warm max-w-2xl mx-auto">
            <Icon name="Heart" size={48} className="text-primary mx-auto mb-4" />
            <h3 className="text-2xl font-playfair font-semibold text-foreground mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-text-secondary mb-6">
              Join hundreds of satisfied clients who trusted Zoe Zest to make their events unforgettable. 
              Your consultation is the first step toward creating culinary memories that last a lifetime.
            </p>
            
            <div className="flex items-center justify-center space-x-6 text-sm text-text-secondary">
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} className="text-accent" />
                <span>Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} className="text-accent" />
                <span>No Obligation</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Star" size={16} className="text-accent" />
                <span>Personalized Service</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;