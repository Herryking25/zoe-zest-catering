import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const KitchenTourSection = () => {
  const [activeArea, setActiveArea] = useState(0);

  const kitchenAreas = [
    {
      id: 0,
      name: "Prep Station",
      title: "Ingredient Preparation Area",
      description: "State-of-the-art preparation stations where our chefs transform fresh ingredients into culinary masterpieces. Each station is equipped with professional-grade tools and maintains strict temperature controls.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      features: ["Temperature Controlled", "Stainless Steel Surfaces", "Professional Knife Sets", "Ingredient Organization System"]
    },
    {
      id: 1,
      name: "Cooking Line",
      title: "Professional Cooking Stations",
      description: "Commercial-grade cooking equipment including convection ovens, induction cooktops, and specialized grills. Our cooking line can handle events of any size while maintaining consistent quality.",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=400&fit=crop",
      features: ["Commercial Grade Equipment", "Multiple Cooking Methods", "Precise Temperature Control", "High-Volume Capacity"]
    },
    {
      id: 2,
      name: "Pastry Corner",
      title: "Artisanal Pastry Kitchen",
      description: "Dedicated pastry area with specialized equipment for creating beautiful desserts, artisanal breads, and custom confections. Climate-controlled for optimal baking conditions.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      features: ["Climate Controlled", "Specialized Baking Equipment", "Decoration Station", "Custom Mold Collection"]
    },
    {
      id: 3,
      name: "Plating Area",
      title: "Final Presentation Station",
      description: "Where culinary artistry meets visual perfection. Our plating area is designed for efficient, beautiful presentation of dishes, ensuring every plate meets our high standards.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
      features: ["Presentation Lighting", "Warming Equipment", "Garnish Station", "Quality Control Area"]
    }
  ];

  const certifications = [
    {
      icon: "Shield",
      title: "Food Safety Certified",
      description: "HACCP and ServSafe certified kitchen with regular health department inspections",
      rating: "A+ Rating"
    },
    {
      icon: "Leaf",
      title: "Eco-Friendly Practices",
      description: "Sustainable kitchen operations with waste reduction and energy-efficient equipment",
      rating: "Green Certified"
    },
    {
      icon: "Award",
      title: "Industry Standards",
      description: "Exceeds all local and state health department requirements for commercial kitchens",
      rating: "5-Star Facility"
    },
    {
      icon: "Users",
      title: "Staff Training",
      description: "Continuous education program ensuring all team members maintain highest standards",
      rating: "Certified Team"
    }
  ];

  const equipmentHighlights = [
    { name: "Convection Ovens", count: "6", icon: "Zap" },
    { name: "Induction Cooktops", count: "12", icon: "Flame" },
    { name: "Refrigeration Units", count: "8", icon: "Snowflake" },
    { name: "Prep Stations", count: "15", icon: "Utensils" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
            Behind the Scenes: Our Kitchen
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Take a virtual tour of our state-of-the-art culinary facility where passion meets precision, and every dish is crafted with care.
          </p>
        </div>

        {/* Kitchen Tour Interactive */}
        <div className="bg-white rounded-3xl p-8 shadow-warm-lg mb-16">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Kitchen Area Image */}
            <div className="relative">
              <div className="rounded-2xl overflow-hidden">
                <Image
                  src={kitchenAreas[activeArea].image}
                  alt={`${kitchenAreas[activeArea].name} in our kitchen`}
                  className="w-full h-96 object-cover"
                />
              </div>
              
              {/* Area Navigation */}
              <div className="flex justify-center mt-6 space-x-2">
                {kitchenAreas.map((area, index) => (
                  <button
                    key={area.id}
                    onClick={() => setActiveArea(index)}
                    className={`w-3 h-3 rounded-full transition-warm ${
                      activeArea === index ? 'bg-primary' : 'bg-border hover:bg-primary/50'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Kitchen Area Details */}
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-playfair font-bold text-foreground mb-2">
                  {kitchenAreas[activeArea].title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {kitchenAreas[activeArea].description}
                </p>
              </div>

              {/* Features */}
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-4">Key Features:</h4>
                <div className="grid grid-cols-2 gap-3">
                  {kitchenAreas[activeArea].features.map((feature, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Icon name="Check" size={16} className="text-success" />
                      <span className="text-sm text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Area Tabs */}
              <div className="flex flex-wrap gap-2">
                {kitchenAreas.map((area, index) => (
                  <button
                    key={area.id}
                    onClick={() => setActiveArea(index)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-warm ${
                      activeArea === index
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-muted text-text-secondary hover:bg-primary/10 hover:text-primary'
                    }`}
                  >
                    {area.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Equipment Highlights */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {equipmentHighlights.map((equipment, index) => (
            <div key={index} className="bg-white rounded-xl p-6 text-center shadow-warm">
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Icon name={equipment.icon} size={24} className="text-accent" />
              </div>
              <p className="text-2xl font-bold text-foreground mb-1">{equipment.count}</p>
              <p className="text-sm text-text-secondary">{equipment.name}</p>
            </div>
          ))}
        </div>

        {/* Certifications & Standards */}
        <div className="bg-muted rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-foreground mb-4">
              Safety & Quality Standards
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Our commitment to excellence extends beyond taste to encompass the highest standards of food safety, cleanliness, and operational efficiency.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4 shadow-warm">
                  <Icon name={cert.icon} size={32} className="text-primary" />
                </div>
                <h4 className="text-lg font-playfair font-semibold text-foreground mb-2">
                  {cert.title}
                </h4>
                <p className="text-sm text-text-secondary mb-3 leading-relaxed">
                  {cert.description}
                </p>
                <div className="inline-block bg-success/10 text-success px-3 py-1 rounded-full text-xs font-medium">
                  {cert.rating}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-primary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">
              Experience Our Kitchen Excellence
            </h3>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Schedule a consultation to discuss your event and see how our world-class kitchen can bring your culinary vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-warm">
                Schedule Kitchen Tour
              </button>
              <button className="border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/10 transition-warm">
                View Our Certifications
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KitchenTourSection;