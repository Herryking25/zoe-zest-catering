import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TestimonialsSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Sarah & Michael Johnson",
      event: "Wedding Reception",
      date: "June 2024",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop",
      content: `Zoe and her team made our wedding day absolutely perfect! The food was not only delicious but beautifully presented. Our guests are still talking about the Mediterranean-inspired menu and the exceptional service. Zoe truly understood our vision and brought it to life beyond our expectations.`,
      highlight: "Exceeded all expectations",
      eventSize: "150 guests",
      location: "Riverside Gardens"
    },
    {
      id: 2,
      name: "David Chen",
      event: "Corporate Annual Gala",
      date: "September 2024",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      content: `As an event coordinator, I've worked with many caterers, but Zoe Zest stands out for their professionalism and attention to detail. They handled our 300-person corporate gala flawlessly, accommodating various dietary restrictions while maintaining exceptional quality throughout the evening.`,
      highlight: "Flawless execution",
      eventSize: "300 guests",
      location: "Downtown Convention Center"
    },
    {
      id: 3,
      name: "Maria Rodriguez",
      event: "Birthday Celebration",
      date: "October 2024",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      content: `Zoe created the most amazing small chops selection for my husband's 50th birthday party. Every bite was a flavor explosion! The presentation was stunning, and the service was seamless. Our intimate gathering of 40 felt like a five-star restaurant experience.`,
      highlight: "Flavor explosion",
      eventSize: "40 guests",
      location: "Private Residence"
    },
    {
      id: 4,
      name: "Jennifer & Robert Taylor",
      event: "Anniversary Dinner",
      date: "November 2024",
      rating: 5,
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
      content: `For our 25th anniversary, we wanted something special and intimate. Zoe created a personalized tasting menu that told the story of our relationship through food. It was emotional, delicious, and perfectly executed. An unforgettable evening!`,
      highlight: "Personalized perfection",
      eventSize: "12 guests",
      location: "Private Dining Room"
    },
    {
      id: 5,
      name: "Thomas Anderson",
      event: "Product Launch Event",
      date: "December 2024",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      content: `Zoe Zest catered our tech company's product launch, and they perfectly captured our innovative spirit through their creative menu. The fusion of traditional and modern flavors impressed our international clients. Professional, creative, and delicious!`,
      highlight: "Creative innovation",
      eventSize: "80 guests",
      location: "Tech Campus"
    }
  ];

  const clientLogos = [
    { name: "Riverside Gardens", logo: "Building" },
    { name: "Downtown Convention", logo: "Building2" },
    { name: "Tech Innovations", logo: "Laptop" },
    { name: "Luxury Hotels", logo: "Hotel" },
    { name: "Wedding Venues", logo: "Heart" },
    { name: "Corporate Events", logo: "Briefcase" }
  ];

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
            What Our Clients Say
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it. Here's what our clients have to say about their experiences with Zoe Zest Catering.
          </p>
        </div>

        {/* Featured Testimonial */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-warm-lg mb-16">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Client Info */}
            <div className="text-center lg:text-left">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto lg:mx-0 mb-4">
                <Image
                  src={testimonials[activeTestimonial].image}
                  alt={`${testimonials[activeTestimonial].name} profile photo`}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-playfair font-bold text-foreground mb-1">
                {testimonials[activeTestimonial].name}
              </h3>
              <p className="text-primary font-medium mb-2">
                {testimonials[activeTestimonial].event}
              </p>
              <div className="flex justify-center lg:justify-start items-center space-x-1 mb-4">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="space-y-2 text-sm text-text-secondary">
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <Icon name="Calendar" size={14} />
                  <span>{testimonials[activeTestimonial].date}</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <Icon name="Users" size={14} />
                  <span>{testimonials[activeTestimonial].eventSize}</span>
                </div>
                <div className="flex items-center justify-center lg:justify-start space-x-2">
                  <Icon name="MapPin" size={14} />
                  <span>{testimonials[activeTestimonial].location}</span>
                </div>
              </div>
            </div>

            {/* Testimonial Content */}
            <div className="lg:col-span-2">
              <div className="relative">
                <Icon name="Quote" size={48} className="text-primary/20 absolute -top-4 -left-4" />
                <blockquote className="text-lg text-foreground leading-relaxed mb-6 relative z-10">
                  {testimonials[activeTestimonial].content}
                </blockquote>
                <div className="bg-accent/10 text-accent px-4 py-2 rounded-lg inline-block">
                  <span className="text-sm font-medium">
                    "{testimonials[activeTestimonial].highlight}"
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-warm"
            >
              <Icon name="ChevronLeft" size={20} />
            </button>
            
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-warm ${
                    activeTestimonial === index ? 'bg-primary' : 'bg-border hover:bg-primary/50'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 bg-muted rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-warm"
            >
              <Icon name="ChevronRight" size={20} />
            </button>
          </div>
        </div>

        {/* Client Logos */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">
              Trusted by Leading Venues & Organizations
            </h3>
            <p className="text-text-secondary">
              We're proud to partner with the finest venues and organizations in our community
            </p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-muted rounded-lg flex items-center justify-center mx-auto mb-2 group-hover:bg-primary/10 transition-warm">
                  <Icon name={client.logo} size={32} className="text-text-secondary group-hover:text-primary transition-warm" />
                </div>
                <p className="text-xs text-text-secondary">{client.name}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-primary/5 rounded-2xl p-8 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-6">
            <div>
              <p className="text-3xl font-bold text-primary">1000+</p>
              <p className="text-sm text-text-secondary">Happy Clients</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">4.9/5</p>
              <p className="text-sm text-text-secondary">Average Rating</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">95%</p>
              <p className="text-sm text-text-secondary">Repeat Clients</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-primary">100%</p>
              <p className="text-sm text-text-secondary">Satisfaction Rate</p>
            </div>
          </div>
          <p className="text-text-secondary max-w-2xl mx-auto">
            These numbers reflect our unwavering commitment to excellence and our clients' trust in our ability to make their special occasions truly memorable.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;