import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const LiveEventFeed = () => {
  const recentEvents = [
    {
      id: 1,
      eventType: "Corporate Gala",
      clientName: "Sarah M.",
      image: "https://i.pinimg.com/736x/74/98/1d/74981d8220d3ec503bd2f297820a9778.jpg",
      testimonial: "Zoe Zest transformed our annual gala into an unforgettable culinary experience. Every guest was raving about the small chops!",
      date: "2025-07-14",
      rating: 5,
      eventSize: "150 guests"
    },
    {
      id: 2,
      eventType: "Wedding Reception",
      clientName: "Michael & Emma",
      image: "https://i.pinimg.com/736x/8d/96/73/8d9673212f7b390c5488c7fce0d74fc3.jpg",
      testimonial: "Our wedding day was perfect, and the food was absolutely divine. Zoe's attention to detail made all the difference.",
      date: "2025-07-12",
      rating: 5,
      eventSize: "80 guests"
    },
    {
      id: 3,
      eventType: "Private Dinner",
      clientName: "Jennifer L.",
      image: "https://i.pinimg.com/1200x/94/83/89/948389db1cebb73530da9bd20614ad05.jpg",
      testimonial: "The intimate dinner party exceeded all expectations. Each course was a masterpiece of flavor and presentation.",
      date: "2025-07-10",
      rating: 5,
      eventSize: "12 guests"
    },
    {
      id: 4,
      eventType: "Product Launch",
      clientName: "Tech Innovations Inc.",
      image: "https://images.pexels.com/photos/1267697/pexels-photo-1267697.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      testimonial: "Professional service and exceptional cuisine made our product launch memorable for all the right reasons.",
      date: "2025-07-08",
      rating: 5,
      eventSize: "200 guests"
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric',
      year: 'numeric'
    });
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Icon
        key={index}
        name="Star"
        size={16}
        className={`${
          index < rating 
            ? 'text-yellow-400 fill-current' :'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Icon name="Sparkles" size={24} className="text-accent mr-2" />
            <span className="text-accent font-medium">Live from our kitchen</span>
          </div>
          <h2 className="text-4xl font-playfair font-bold text-foreground mb-4">
            Recent Celebrations
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how we've been creating unforgettable moments for our clients across different occasions
          </p>
        </div>

        {/* Event Feed Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {recentEvents.map((event) => (
            <div
              key={event.id}
              className="bg-card rounded-xl shadow-soft hover:shadow-warm transition-all duration-300 overflow-hidden group"
            >
              {/* Event Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={event.image}
                  alt={`${event.eventType} by ${event.clientName}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                    {event.eventType}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <div className="bg-white/90 backdrop-blur-sm rounded-full px-2 py-1 flex items-center space-x-1">
                    <Icon name="Users" size={12} className="text-gray-600" />
                    <span className="text-xs text-gray-600 font-medium">
                      {event.eventSize}
                    </span>
                  </div>
                </div>
              </div>

              {/* Event Content */}
              <div className="p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-semibold text-foreground">
                    {event.clientName}
                  </h3>
                  <span className="text-sm text-muted-foreground">
                    {formatDate(event.date)}
                  </span>
                </div>

                <p className="text-sm text-muted-foreground mb-3 line-clamp-3">
                  "{event.testimonial}"
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-1">
                    {renderStars(event.rating)}
                  </div>
                  <div className="flex items-center text-accent">
                    <Icon name="Heart" size={14} className="mr-1" />
                    <span className="text-xs font-medium">Loved it</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="inline-flex items-center px-6 py-3 bg-muted hover:bg-primary hover:text-primary-foreground rounded-lg transition-all duration-300 group">
            <span className="mr-2">View All Recent Events</span>
            <Icon 
              name="ArrowRight" 
              size={16} 
              className="group-hover:translate-x-1 transition-transform duration-300" 
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default LiveEventFeed;