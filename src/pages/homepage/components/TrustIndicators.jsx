import React from 'react';

import Icon from '../../../components/AppIcon';

const TrustIndicators = () => {
  const certifications = [
    {
      id: 1,
      name: "Food Safety Certified",
      icon: "Shield",
      description: "ServSafe certified kitchen and staff",
      badge: "https://images.pexels.com/photos/4226796/pexels-photo-4226796.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop"
    },
    {
      id: 2,
      name: "Licensed & Insured",
      icon: "Award",
      description: "Fully licensed catering business",
      badge: "https://images.pixabay.com/photo/2017/06/10/07/18/list-2389219_960_720.png"
    },
    {
      id: 3,
      name: "Health Department A+",
      icon: "Star",
      description: "Highest health inspection rating",
      badge: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=200&h=200&q=80"
    }
  ];

  const clientLogos = [
    {
      name: "TechCorp Solutions",
      logo: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop"
    },
    {
      name: "Elegant Events Co.",
      logo: "https://images.pixabay.com/photo/2016/12/27/21/03/lone-tree-1934897_960_720.jpg"
    },
    {
      name: "Metropolitan Hotel",
      logo: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=200&h=100&q=80"
    },
    {
      name: "City Wedding Planners",
      logo: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=200&h=100&fit=crop"
    },
    {
      name: "Corporate Events Inc.",
      logo: "https://images.pixabay.com/photo/2017/08/06/12/06/people-2591874_960_720.jpg"
    },
    {
      name: "Luxury Venues Group",
      logo: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=200&h=100&q=80"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Event Coordinator",
      company: "TechCorp Solutions",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      rating: 5,
      text: "Zoe Zest transformed our annual company gala into an unforgettable experience. The attention to detail and quality of food exceeded all expectations."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Wedding Planner",
      company: "Elegant Events Co.",
      image: "https://images.pixabay.com/photo/2507/portrait-3353699_960_720.jpg",
      rating: 5,
      text: "Working with Zoe has been a game-changer for our wedding planning business. Clients consistently rave about the exceptional service and delicious cuisine."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "Private Client",
      company: "Anniversary Celebration",
      image: "https://images.unsplash.com/photo-1494790108755-2616c0763c5c?auto=format&fit=crop&w=100&h=100&q=80",
      rating: 5,
      text: "Our 25th anniversary dinner was absolutely perfect. Zoe\'s team created a magical evening that our family will treasure forever."
    }
  ];

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
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Icon name="Shield" size={24} className="text-accent mr-2" />
            <span className="text-accent font-medium">Trust & Quality</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-foreground mb-6">
            Trusted by Hundreds of Clients
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Our commitment to excellence is reflected in our certifications, client partnerships, 
            and the glowing testimonials from those we've had the privilege to serve
          </p>
        </div>

        {/* Certifications */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {certifications.map((cert) => (
            <div
              key={cert.id}
              className="bg-white rounded-xl p-6 shadow-soft hover:shadow-warm transition-all duration-300 text-center"
            >
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-primary/10 flex items-center justify-center">
                <Icon name={cert.icon} size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                {cert.name}
              </h3>
              <p className="text-muted-foreground text-sm">
                {cert.description}
              </p>
            </div>
          ))}
        </div>

        {/* Client Logos */}
        <div className="mb-16">
          <h3 className="text-2xl font-playfair font-bold text-center text-foreground mb-8">
            Trusted by Leading Organizations
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {clientLogos.map((client, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-soft hover:shadow-warm transition-all duration-300 flex items-center justify-center h-20"
              >
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-sm font-medium text-gray-600 text-center">
                    {client.name}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Carousel */}
        <div className="bg-white rounded-2xl p-8 shadow-warm">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-playfair font-bold text-foreground mb-4">
              What Our Clients Say
            </h3>
            <p className="text-muted-foreground">
              Real experiences from real clients who trusted us with their special moments
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div
                key={testimonial.id}
                className="bg-warm-cream rounded-xl p-6 relative"
              >
                {/* Quote Icon */}
                <div className="absolute -top-3 left-6">
                  <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                    <Icon name="Quote" size={16} className="text-white" />
                  </div>
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1 mb-4 pt-2">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Testimonial Text */}
                <p className="text-foreground mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>

                {/* Client Info */}
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                    <div className="w-full h-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <span className="text-white font-semibold text-sm">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                    <p className="text-xs text-accent font-medium">
                      {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "500+", label: "Events Catered", icon: "Calendar" },
            { number: "98%", label: "Client Satisfaction", icon: "Heart" },
            { number: "15+", label: "Years Experience", icon: "Award" },
            { number: "50+", label: "5-Star Reviews", icon: "Star" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-soft">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name={stat.icon} size={24} className="text-accent" />
              </div>
              <div className="text-3xl font-playfair font-bold text-foreground mb-1">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustIndicators;