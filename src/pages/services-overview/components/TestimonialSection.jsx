import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TestimonialSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Bride",
      event: "Wedding Reception - 120 guests",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786",
      content: `Zoe Zest transformed our wedding into a culinary masterpiece! From the initial consultation to the last bite of dessert, every detail was perfect. The truffle arancini appetizers were a huge hit, and the herb-crusted salmon was cooked to perfection. Our guests are still talking about the food three months later!`,
      beforeImage: "https://images.pexels.com/photos/1395967/pexels-photo-1395967.jpeg",
      afterImage: "https://images.unsplash.com/photo-1519225421980-715cb0215aed",
      highlights: ["Custom menu design", "Flawless execution", "Outstanding presentation", "Professional service"]
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "Corporate Event Manager",
      event: "Annual Company Gala - 200 guests",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e",
      content: `Working with Zoe Zest for our annual gala was exceptional. They handled dietary restrictions for 200+ guests seamlessly, and the presentation was restaurant-quality. The live cooking stations were a fantastic touch that impressed our clients and employees alike.`,
      beforeImage: "https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg",
      afterImage: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622",
      highlights: ["Dietary accommodation expertise", "Live cooking stations", "Professional presentation", "Reliable service"]
    },
    {
      id: 3,
      name: "Jennifer Chen",
      role: "Birthday Celebration Host",
      event: "50th Birthday Party - 45 guests",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
      content: `Zoe Zest made my husband's 50th birthday unforgettable! The small chops collection was perfect for our intimate gathering, and the beverage curation paired beautifully with each course. The attention to detail and personal touch made all the difference.`,
      beforeImage: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg",
      afterImage: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d",
      highlights: ["Perfect portion sizing", "Excellent beverage pairing", "Personal attention", "Memorable experience"]
    }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <section className="py-16 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-foreground mb-4">
            Client Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover how Zoe Zest has transformed celebrations into unforgettable culinary experiences 
            through the words of our satisfied clients.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Before/After Images */}
          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-muted-foreground uppercase tracking-wide">
                  Before Our Service
                </h4>
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <Image
                    src={currentTestimonial.beforeImage}
                    alt="Before catering service"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/20"></div>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-primary uppercase tracking-wide">
                  After Zoe Zest
                </h4>
                <div className="relative h-48 rounded-xl overflow-hidden">
                  <Image
                    src={currentTestimonial.afterImage}
                    alt="After catering service transformation"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Highlights */}
            <div className="bg-warm-gradient rounded-xl p-6">
              <h4 className="font-playfair font-bold text-foreground mb-4">
                What Made This Event Special:
              </h4>
              <div className="grid grid-cols-2 gap-3">
                {currentTestimonial.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="Star" size={16} className="text-accent fill-current" />
                    <span className="text-sm text-foreground">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Testimonial Content */}
          <div className="space-y-6">
            {/* Navigation */}
            <div className="flex items-center justify-between">
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all ${
                      index === activeTestimonial 
                        ? 'bg-primary' :'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>
              
              <div className="flex space-x-2">
                <button
                  onClick={prevTestimonial}
                  className="w-10 h-10 bg-muted hover:bg-muted-foreground/10 rounded-full flex items-center justify-center transition-colors"
                >
                  <Icon name="ChevronLeft" size={20} />
                </button>
                <button
                  onClick={nextTestimonial}
                  className="w-10 h-10 bg-muted hover:bg-muted-foreground/10 rounded-full flex items-center justify-center transition-colors"
                >
                  <Icon name="ChevronRight" size={20} />
                </button>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center space-x-2">
              {[...Array(currentTestimonial.rating)].map((_, index) => (
                <Icon key={index} name="Star" size={20} className="text-accent fill-current" />
              ))}
              <span className="text-muted-foreground text-sm ml-2">
                {currentTestimonial.rating}/5 stars
              </span>
            </div>

            {/* Quote */}
            <blockquote className="text-lg text-foreground leading-relaxed">
              <Icon name="Quote" size={24} className="text-primary/30 mb-4" />
              "{currentTestimonial.content}"
            </blockquote>

            {/* Client Info */}
            <div className="flex items-center space-x-4 pt-6 border-t border-border">
              <div className="w-16 h-16 rounded-full overflow-hidden">
                <Image
                  src={currentTestimonial.image}
                  alt={currentTestimonial.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-semibold text-foreground">
                  {currentTestimonial.name}
                </h4>
                <p className="text-muted-foreground text-sm">
                  {currentTestimonial.role}
                </p>
                <p className="text-primary text-sm font-medium">
                  {currentTestimonial.event}
                </p>
              </div>
            </div>

            {/* Event Details */}
            <div className="bg-muted rounded-lg p-4">
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Icon name="Calendar" size={16} className="text-muted-foreground" />
                  <span className="text-foreground">Event completed in 2024</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="MapPin" size={16} className="text-muted-foreground" />
                  <span className="text-foreground">Local venue</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Testimonials Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.filter((_, index) => index !== activeTestimonial).map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-background rounded-xl p-6 shadow-warm hover:shadow-warm-lg transition-all cursor-pointer"
              onClick={() => setActiveTestimonial(testimonials.findIndex(t => t.id === testimonial.id))}
            >
              <div className="flex items-center space-x-2 mb-3">
                {[...Array(testimonial.rating)].map((_, index) => (
                  <Icon key={index} name="Star" size={14} className="text-accent fill-current" />
                ))}
              </div>
              
              <p className="text-foreground text-sm mb-4 line-clamp-3">
                "{testimonial.content.substring(0, 120)}..."
              </p>
              
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h5 className="font-medium text-foreground text-sm">
                    {testimonial.name}
                  </h5>
                  <p className="text-muted-foreground text-xs">
                    {testimonial.event}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;