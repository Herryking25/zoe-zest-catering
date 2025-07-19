import React from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServicesOverview = () => {
  const services = [
    {
      id: 1,
      title: "Event Catering",
      description: "Full-service catering for corporate events, weddings, and private celebrations with customized menus and professional service.",
      image: "https://images.pexels.com/photos/1267320/pexels-photo-1267320.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      icon: "Calendar",
      priceStart: "Starting at $25/person",
      features: [
        "Custom menu design",
        "Professional service staff",
        "Setup & cleanup included",
        "Dietary accommodations"
      ],
      color: "from-blue-500 to-purple-600",
      popular: true
    },
    {
      id: 2,
      title: "Small Chops Collection",
      description: "Elevated appetizers and finger foods perfect for cocktail parties, networking events, and intimate gatherings.",
      image: "https://images.pixabay.com/photo/2017/05/07/08/56/buffet-2293433_960_720.jpg",
      icon: "Utensils",
      priceStart: "Starting at $8/person",
      features: [
        "Signature small chops",
        "Seasonal specialties",
        "Elegant presentation",
        "Minimum 20 pieces"
      ],
      color: "from-orange-500 to-red-600"
    },
    {
      id: 3,
      title: "Beverage Curation",
      description: "Thoughtfully crafted drink menus including signature cocktails, wine pairings, and non-alcoholic options.",
      image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=600&h=400&q=80",
      icon: "Wine",
      priceStart: "Starting at $15/person",
      features: [
        "Signature cocktails",
        "Wine & beer selection",
        "Professional bartenders",
        "Custom drink menus"
      ],
      color: "from-green-500 to-teal-600"
    }
  ];

  const additionalServices = [
    { icon: "Truck", title: "Delivery & Setup", description: "Professional delivery and event setup" },
    { icon: "Users", title: "Service Staff", description: "Experienced waitstaff and bartenders" },
    { icon: "Utensils", title: "Equipment Rental", description: "Tables, chairs, linens, and serving equipment" },
    { icon: "Camera", title: "Event Photography", description: "Capture your special moments" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Icon name="ChefHat" size={24} className="text-accent mr-2" />
            <span className="text-accent font-medium">Our Services</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-foreground mb-6">
            Comprehensive Catering Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From intimate gatherings to grand celebrations, we offer a complete range of catering services 
            designed to make your event unforgettable
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl shadow-soft hover:shadow-warm-lg transition-all duration-300 overflow-hidden group relative"
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute top-4 right-4 z-10">
                  <span className="bg-accent text-white px-3 py-1 rounded-full text-xs font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-20 z-10`} />
                <Image
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute bottom-4 left-4 z-20">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center">
                    <Icon name={service.icon} size={24} className="text-primary" />
                  </div>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <div className="mb-4">
                  <h3 className="text-xl font-playfair font-bold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-primary font-semibold">{service.priceStart}</span>
                    <div className="flex items-center space-x-1 text-yellow-400">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Icon key={i} name="Star" size={14} className="fill-current" />
                      ))}
                    </div>
                  </div>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-muted-foreground">
                        <Icon name="Check" size={16} className="text-green-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <Button 
                    variant="default" 
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <Link to="/consultation-booking">
                      <Icon name="Calendar" size={16} className="mr-2" />
                      Book Now
                    </Link>
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1"
                    asChild
                  >
                    <Link to="/services-overview">
                      <Icon name="Info" size={16} className="mr-2" />
                      Learn More
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services */}
        <div className="bg-warm-cream rounded-2xl p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">
              Additional Services
            </h3>
            <p className="text-muted-foreground">
              Complete your event with our comprehensive support services
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="text-center p-6 bg-white rounded-xl shadow-soft hover:shadow-warm transition-all duration-300"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={service.icon} size={24} className="text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">{service.title}</h4>
                <p className="text-sm text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-primary rounded-2xl p-8 text-white">
            <h3 className="text-3xl font-playfair font-bold mb-4">
              Ready to Plan Your Event?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss your vision and create a customized catering experience that exceeds your expectations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary" 
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
                asChild
              >
                <Link to="/consultation-booking">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Schedule Consultation
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-primary"
                asChild
              >
                <Link to="/contact-locations">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Call Us Today
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;