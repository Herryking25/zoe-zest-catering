import React from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const ValuesSection = () => {
  const coreValues = [
    {
      icon: "Heart",
      title: "Inclusivity & Accessibility",
      description: "We believe exceptional dining experiences should be accessible to everyone, regardless of dietary restrictions, cultural preferences, or budget constraints.",
      principles: [
        "Comprehensive allergen management",
        "Cultural menu customization",
        "Flexible pricing options",
        "Accessibility-focused service"
      ],
      color: "text-red-600"
    },
    {
      icon: "Users",
      title: "Community Connection",
      description: "Food brings people together. We foster connections between our clients, their guests, and the broader community through shared culinary experiences.",
      principles: [
        "Local supplier partnerships",
        "Community event support",
        "Cultural celebration expertise",
        "Neighborhood engagement"
      ],
      color: "text-blue-600"
    },
    {
      icon: "Sparkles",
      title: "Artisanal Excellence",
      description: "Every dish is crafted with meticulous attention to detail, combining traditional techniques with innovative presentation to create memorable experiences.",
      principles: [
        "Handcrafted preparation methods",
        "Premium ingredient selection",
        "Artistic presentation standards",
        "Continuous skill development"
      ],
      color: "text-purple-600"
    },
    {
      icon: "Shield",
      title: "Integrity & Transparency",
      description: "We operate with complete honesty about our ingredients, processes, and pricing, building trust through transparent communication and ethical practices.",
      principles: [
        "Clear ingredient sourcing",
        "Honest pricing structure",
        "Open kitchen philosophy",
        "Ethical business practices"
      ],
      color: "text-green-600"
    }
  ];

  const dietaryAccommodations = [
    {
      type: "Gluten-Free",
      icon: "Wheat",
      description: "Dedicated preparation areas and certified gluten-free ingredients",
      specialties: ["Gluten-free pasta dishes", "Alternative grain options", "Certified baked goods"]
    },
    {
      type: "Vegan & Vegetarian",
      icon: "Leaf",
      description: "Plant-based options that don't compromise on flavor or presentation",
      specialties: ["Creative protein alternatives", "Seasonal vegetable showcases", "Dairy-free desserts"]
    },
    {
      type: "Kosher & Halal",
      icon: "Star",
      description: "Certified preparation methods respecting religious dietary laws",
      specialties: ["Certified meat sourcing", "Separate preparation areas", "Religious supervision available"]
    },
    {
      type: "Allergy Management",
      icon: "Shield",
      description: "Comprehensive allergen protocols for safe dining experiences",
      specialties: ["Nut-free environments", "Dairy alternatives", "Shellfish-free options"]
    },
    {
      type: "Cultural Cuisines",
      icon: "Globe",
      description: "Authentic dishes from diverse cultural traditions",
      specialties: ["Regional specialties", "Traditional preparation methods", "Cultural presentation styles"]
    },
    {
      type: "Health-Conscious",
      icon: "Heart",
      description: "Nutritionally balanced options for health-focused events",
      specialties: ["Low-sodium preparations", "Diabetic-friendly options", "Heart-healthy choices"]
    }
  ];

  const budgetApproach = [
    {
      tier: "Essential",
      description: "Quality catering for intimate gatherings without compromising on taste",
      features: ["Seasonal menu selections", "Efficient service model", "Core dietary accommodations"],
      priceRange: "Budget-friendly",
      icon: "DollarSign"
    },
    {
      tier: "Premium",
      description: "Enhanced experiences with expanded menu options and service features",
      features: ["Extended menu variety", "Enhanced presentation", "Additional service staff"],
      priceRange: "Mid-range",
      icon: "Star"
    },
    {
      tier: "Luxury",
      description: "Bespoke culinary experiences with personalized service and premium ingredients",
      features: ["Custom menu development", "Premium ingredients", "White-glove service"],
      priceRange: "High-end",
      icon: "Crown"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
            Our Values & Commitment
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            At Zoe Zest, our values guide every decision we make, ensuring that exceptional culinary experiences are accessible to all.
          </p>
        </div>

        {/* Core Values */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          {coreValues.map((value, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-warm hover:shadow-warm-lg transition-warm">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name={value.icon} size={24} className={value.color} />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-playfair font-bold text-foreground mb-3">
                    {value.title}
                  </h3>
                  <p className="text-text-secondary mb-4 leading-relaxed">
                    {value.description}
                  </p>
                  <div className="space-y-2">
                    {value.principles.map((principle, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <Icon name="Check" size={14} className="text-success" />
                        <span className="text-sm text-text-secondary">{principle}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dietary Accommodations */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-foreground mb-4">
              Dietary Accommodations
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              We believe everyone deserves to enjoy exceptional food. Our comprehensive approach ensures no guest is left out.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {dietaryAccommodations.map((accommodation, index) => (
              <div key={index} className="bg-muted rounded-xl p-6 hover:bg-white hover:shadow-warm transition-warm">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Icon name={accommodation.icon} size={20} className="text-primary" />
                  </div>
                  <h4 className="font-playfair font-semibold text-foreground">
                    {accommodation.type}
                  </h4>
                </div>
                <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                  {accommodation.description}
                </p>
                <div className="space-y-1">
                  {accommodation.specialties.map((specialty, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <Icon name="Dot" size={12} className="text-accent" />
                      <span className="text-xs text-text-secondary">{specialty}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Budget Approach */}
        <div className="bg-warm-gradient rounded-3xl p-8 lg:p-12 mb-16">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-foreground mb-4">
              Flexible Budget Options
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Quality shouldn't be compromised by budget. We offer three distinct service tiers to meet diverse needs and preferences.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {budgetApproach.map((tier, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-warm text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name={tier.icon} size={32} className="text-primary" />
                </div>
                <h4 className="text-xl font-playfair font-bold text-foreground mb-2">
                  {tier.tier}
                </h4>
                <p className="text-sm text-text-secondary mb-4 leading-relaxed">
                  {tier.description}
                </p>
                <div className="space-y-2 mb-4">
                  {tier.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center justify-center space-x-2">
                      <Icon name="Check" size={14} className="text-success" />
                      <span className="text-xs text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                  {tier.priceRange}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Commitment Statement */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-warm-lg">
            <div className="max-w-4xl mx-auto">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center">
                  <Icon name="Heart" size={40} className="text-primary" />
                </div>
              </div>
              <h3 className="text-2xl font-playfair font-bold text-foreground mb-6">
                Our Promise to You
              </h3>
              <blockquote className="text-lg text-text-secondary leading-relaxed mb-6 italic">
                "We promise to create culinary experiences that honor your vision, respect your budget, accommodate your needs, and exceed your expectations. Every event we cater is an opportunity to build lasting relationships and create memories that will be cherished for years to come."
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop"
                    alt="Zoe Martinez signature"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-left">
                  <p className="font-semibold text-foreground">Zoe Martinez</p>
                  <p className="text-sm text-text-secondary">Founder & Executive Chef</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;