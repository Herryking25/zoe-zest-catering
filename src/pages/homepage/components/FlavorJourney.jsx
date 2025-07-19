import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const FlavorJourney = () => {
  const [activeCategory, setActiveCategory] = useState(0);

  const menuCategories = [
    {
      id: 1,
      name: "Small Chops Collection",
      icon: "Utensils",
      description: "Elevated appetizers perfect for any gathering",
      image: "https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      dishes: [
        "Truffle Mac & Cheese Bites",
        "Honey Glazed Chicken Skewers",
        "Artisan Cheese & Charcuterie",
        "Spiced Lamb Meatballs"
      ],
      priceRange: "Starting at $8/person",
      color: "from-orange-400 to-red-500"
    },
    {
      id: 2,
      name: "Seasonal Specialties",
      icon: "Leaf",
      description: "Fresh, locally-sourced seasonal creations",
      image: "https://images.pixabay.com/photo/2017/05/07/08/56/buffet-2293433_960_720.jpg",
      dishes: [
        "Summer Berry Salad Bowl",
        "Roasted Root Vegetable Medley",
        "Seasonal Soup Selection",
        "Farm-to-Table Grain Bowls"
      ],
      priceRange: "Starting at $12/person",
      color: "from-green-400 to-emerald-500"
    },
    {
      id: 3,
      name: "Signature Mains",
      icon: "ChefHat",
      description: "Our chef\'s carefully crafted main courses",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=600&h=400&q=80",
      dishes: [
        "Herb-Crusted Salmon",
        "Braised Short Rib",
        "Stuffed Portobello Mushrooms",
        "Pan-Seared Duck Breast"
      ],
      priceRange: "Starting at $28/person",
      color: "from-purple-400 to-pink-500"
    },
    {
      id: 4,
      name: "Beverage Curation",
      icon: "Wine",
      description: "Thoughtfully paired drinks and cocktails",
      image: "https://images.pexels.com/photos/1283219/pexels-photo-1283219.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
      dishes: [
        "Signature Cocktail Menu",
        "Wine Pairing Selection",
        "Artisan Coffee Bar",
        "Fresh Juice Blends"
      ],
      priceRange: "Starting at $15/person",
      color: "from-blue-400 to-indigo-500"
    }
  ];

  return (
    <section className="py-20 bg-warm-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <Icon name="Sparkles" size={24} className="text-accent mr-2" />
            <span className="text-accent font-medium">Explore Our Menu</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-foreground mb-6">
            Interactive Flavor Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Discover our carefully curated menu categories, each designed to create memorable dining experiences for your special occasions
          </p>
        </div>

        {/* Category Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {menuCategories.map((category, index) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(index)}
              className={`flex items-center space-x-3 px-6 py-3 rounded-full transition-all duration-300 ${
                activeCategory === index
                  ? 'bg-primary text-primary-foreground shadow-warm'
                  : 'bg-white text-foreground hover:bg-muted hover:shadow-soft'
              }`}
            >
              <Icon name={category.icon} size={20} />
              <span className="font-medium">{category.name}</span>
            </button>
          ))}
        </div>

        {/* Active Category Display */}
        <div className="bg-white rounded-2xl shadow-warm-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image Section */}
            <div className="relative h-64 lg:h-auto">
              <div className={`absolute inset-0 bg-gradient-to-br ${menuCategories[activeCategory].color} opacity-20`} />
              <Image
                src={menuCategories[activeCategory].image}
                alt={menuCategories[activeCategory].name}
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-4 left-4 right-4">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-600">
                      {menuCategories[activeCategory].priceRange}
                    </span>
                    <div className="flex items-center space-x-1 text-yellow-400">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Icon key={i} name="Star" size={14} className="fill-current" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="p-8 lg:p-12">
              <div className="flex items-center space-x-3 mb-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${menuCategories[activeCategory].color} flex items-center justify-center`}>
                  <Icon 
                    name={menuCategories[activeCategory].icon} 
                    size={24} 
                    className="text-white" 
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-playfair font-bold text-foreground">
                    {menuCategories[activeCategory].name}
                  </h3>
                  <p className="text-muted-foreground">
                    {menuCategories[activeCategory].description}
                  </p>
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <h4 className="text-lg font-semibold text-foreground">Featured Dishes:</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {menuCategories[activeCategory].dishes.map((dish, index) => (
                    <div key={index} className="flex items-center space-x-3 p-3 bg-muted rounded-lg">
                      <div className="w-2 h-2 bg-accent rounded-full" />
                      <span className="text-foreground font-medium">{dish}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/services-overview"
                  className="flex-1 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium text-center hover:bg-primary/90 transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <Icon name="Eye" size={18} />
                  <span>View Full Menu</span>
                </Link>
                <Link
                  to="/consultation-booking"
                  className="flex-1 border border-primary text-primary px-6 py-3 rounded-lg font-medium text-center hover:bg-primary hover:text-primary-foreground transition-colors duration-300 flex items-center justify-center space-x-2"
                >
                  <Icon name="Calendar" size={18} />
                  <span>Book Tasting</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
          {[
            { number: "500+", label: "Events Catered", icon: "Calendar" },
            { number: "50+", label: "Signature Dishes", icon: "ChefHat" },
            { number: "98%", label: "Client Satisfaction", icon: "Heart" },
            { number: "5★", label: "Average Rating", icon: "Star" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-white rounded-xl shadow-soft">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name={stat.icon} size={24} className="text-accent" />
              </div>
              <div className="text-2xl font-playfair font-bold text-foreground mb-1">
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

export default FlavorJourney;