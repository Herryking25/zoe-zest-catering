import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const SustainabilitySection = () => {
  const sustainabilityPractices = [
    {
      icon: "Leaf",
      title: "Local Sourcing",
      description: "We partner with local farms within a 50-mile radius to source the freshest ingredients while supporting our community and reducing transportation emissions.",
      impact: "85% Local Ingredients",
      color: "text-green-600"
    },
    {
      icon: "Recycle",
      title: "Zero Waste Initiative",
      description: "Our comprehensive waste reduction program includes composting, recycling, and donating excess food to local food banks and shelters.",
      impact: "90% Waste Diverted",
      color: "text-blue-600"
    },
    {
      icon: "Droplets",
      title: "Water Conservation",
      description: "Advanced water filtration systems and conservation practices reduce our water usage while maintaining the highest standards of cleanliness.",
      impact: "40% Water Savings",
      color: "text-cyan-600"
    },
    {
      icon: "Zap",
      title: "Energy Efficiency",
      description: "Energy-efficient equipment and LED lighting throughout our facility, powered by renewable energy sources where possible.",
      impact: "60% Energy Reduction",
      color: "text-yellow-600"
    }
  ];

  const supplierPartners = [
    {
      name: "Green Valley Farms",
      specialty: "Organic Vegetables & Herbs",
      distance: "12 miles",
      partnership: "5+ years",
      image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=300&h=200&fit=crop",
      description: "Family-owned organic farm specializing in seasonal vegetables and fresh herbs."
    },
    {
      name: "Sunrise Dairy Co-op",
      specialty: "Artisanal Cheeses & Dairy",
      distance: "25 miles",
      partnership: "8+ years",
      image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=300&h=200&fit=crop",
      description: "Local dairy cooperative producing award-winning artisanal cheeses and organic dairy products."
    },
    {
      name: "Coastal Seafood Market",
      specialty: "Fresh Sustainable Seafood",
      distance: "35 miles",
      partnership: "6+ years",
      image: "https://images.unsplash.com/photo-1544943910-4c1dc44aab44?w=300&h=200&fit=crop",
      description: "Sustainable seafood supplier committed to responsible fishing practices and ocean conservation."
    },
    {
      name: "Heritage Meat Company",
      specialty: "Grass-Fed & Free-Range Meats",
      distance: "40 miles",
      partnership: "7+ years",
      image: "https://images.unsplash.com/photo-1588347818133-0c4de2b4b6e4?w=300&h=200&fit=crop",
      description: "Ethical meat producer focusing on grass-fed beef and free-range poultry with humane practices."
    }
  ];

  const seasonalCalendar = [
    {
      season: "Spring",
      months: "March - May",
      ingredients: ["Asparagus", "Peas", "Strawberries", "Spring Onions", "Artichokes", "Fresh Herbs"],
      color: "bg-green-100 text-green-800"
    },
    {
      season: "Summer",
      months: "June - August", 
      ingredients: ["Tomatoes", "Zucchini", "Berries", "Stone Fruits", "Corn", "Bell Peppers"],
      color: "bg-yellow-100 text-yellow-800"
    },
    {
      season: "Fall",
      months: "September - November",
      ingredients: ["Squash", "Apples", "Root Vegetables", "Brussels Sprouts", "Pears", "Mushrooms"],
      color: "bg-orange-100 text-orange-800"
    },
    {
      season: "Winter",
      months: "December - February",
      ingredients: ["Citrus Fruits", "Cabbage", "Potatoes", "Winter Squash", "Leeks", "Kale"],
      color: "bg-blue-100 text-blue-800"
    }
  ];

  return (
    <section className="py-20 bg-warm-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
            Sustainability & Local Sourcing
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Our commitment to the environment and local community drives every decision we make, from ingredient sourcing to waste management.
          </p>
        </div>

        {/* Sustainability Practices */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {sustainabilityPractices.map((practice, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-warm hover:shadow-warm-lg transition-warm">
              <div className="text-center">
                <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={practice.icon} size={32} className={practice.color} />
                </div>
                <h3 className="text-lg font-playfair font-semibold text-foreground mb-3">
                  {practice.title}
                </h3>
                <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                  {practice.description}
                </p>
                <div className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {practice.impact}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Supplier Partners */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-foreground mb-4">
              Our Trusted Partners
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              We've built lasting relationships with local suppliers who share our commitment to quality, sustainability, and community support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {supplierPartners.map((partner, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-warm">
                <div className="h-32 overflow-hidden">
                  <Image
                    src={partner.image}
                    alt={`${partner.name} farm or facility`}
                    className="w-full h-full object-cover hover:scale-105 transition-warm"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-playfair font-semibold text-foreground mb-1">
                    {partner.name}
                  </h4>
                  <p className="text-sm text-primary mb-2">{partner.specialty}</p>
                  <p className="text-xs text-text-secondary mb-3 leading-relaxed">
                    {partner.description}
                  </p>
                  <div className="flex justify-between text-xs text-text-secondary">
                    <span className="flex items-center space-x-1">
                      <Icon name="MapPin" size={12} />
                      <span>{partner.distance}</span>
                    </span>
                    <span className="flex items-center space-x-1">
                      <Icon name="Clock" size={12} />
                      <span>{partner.partnership}</span>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Seasonal Calendar */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-warm-lg">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-foreground mb-4">
              Seasonal Ingredient Calendar
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Our menus change with the seasons to showcase the finest local ingredients at their peak freshness and flavor.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {seasonalCalendar.map((season, index) => (
              <div key={index} className="border border-border rounded-xl p-6">
                <div className="text-center mb-4">
                  <div className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${season.color} mb-2`}>
                    {season.season}
                  </div>
                  <p className="text-sm text-text-secondary">{season.months}</p>
                </div>
                <div className="space-y-2">
                  {season.ingredients.map((ingredient, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Icon name="Leaf" size={12} className="text-success" />
                      <span className="text-sm text-text-secondary">{ingredient}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Environmental Impact */}
        <div className="mt-16 text-center">
          <div className="bg-primary/5 rounded-2xl p-8">
            <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">
              Our Environmental Impact
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-6">
              <div>
                <p className="text-3xl font-bold text-primary">2,500</p>
                <p className="text-sm text-text-secondary">Pounds of Food Donated</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">15,000</p>
                <p className="text-sm text-text-secondary">Gallons Water Saved</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">85%</p>
                <p className="text-sm text-text-secondary">Local Ingredients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">90%</p>
                <p className="text-sm text-text-secondary">Waste Diverted</p>
              </div>
            </div>
            <p className="text-text-secondary max-w-2xl mx-auto">
              These numbers represent our ongoing commitment to environmental stewardship and community support. Every event we cater contributes to a more sustainable future.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SustainabilitySection;