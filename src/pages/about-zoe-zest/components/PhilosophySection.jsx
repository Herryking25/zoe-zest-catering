import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const PhilosophySection = () => {
  const philosophyPoints = [
    {
      icon: "Heart",
      title: "Every Bite Tells a Story",
      description: "We believe food is the universal language of love and celebration. Each dish is crafted to create lasting memories and emotional connections."
    },
    {
      icon: "Sparkles",
      title: "Elevated Comfort",
      description: "Sophisticated enough for discerning palates, yet warm and approachable for intimate celebrations. We perfect the balance between elegance and comfort."
    },
    {
      icon: "Users",
      title: "Intuitive Hospitality",
      description: "Our service anticipates needs before they're expressed, creating seamless experiences that allow you to focus on what matters most - your guests."
    },
    {
      icon: "Leaf",
      title: "Seasonal Artistry",
      description: "We celebrate nature's bounty by crafting menus that highlight the finest seasonal ingredients, ensuring peak flavor and freshness in every dish."
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Source",
      description: "Hand-selected ingredients from local farms and trusted suppliers",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=300&h=200&fit=crop"
    },
    {
      step: "02", 
      title: "Craft",
      description: "Artisanal preparation techniques that honor each ingredient",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=200&fit=crop"
    },
    {
      step: "03",
      title: "Present",
      description: "Stunning plating that delights the eyes before the first bite",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=300&h=200&fit=crop"
    },
    {
      step: "04",
      title: "Serve",
      description: "Warm hospitality that makes every guest feel truly special",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=300&h=200&fit=crop"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Philosophy Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
            Our Philosophy
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            At Zoe Zest, we don't just cater events - we curate experiences that transform ordinary gatherings into extraordinary memories through the artistry of food.
          </p>
        </div>

        {/* Philosophy Points */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {philosophyPoints.map((point, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-warm">
                <Icon name={point.icon} size={32} className="text-primary" />
              </div>
              <h3 className="text-xl font-playfair font-semibold text-foreground mb-3">
                {point.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-muted rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-foreground mb-4">
              Our Creative Process
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              From farm to table, every step is carefully orchestrated to deliver exceptional culinary experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="relative rounded-xl overflow-hidden mb-4">
                  <Image
                    src={step.image}
                    alt={`${step.title} process step`}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-warm"
                  />
                  <div className="absolute top-4 left-4 w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{step.step}</span>
                  </div>
                </div>
                <h4 className="text-lg font-playfair font-semibold text-foreground mb-2">
                  {step.title}
                </h4>
                <p className="text-sm text-text-secondary">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Quote Section */}
        <div className="text-center mt-16">
          <blockquote className="text-2xl sm:text-3xl font-playfair font-medium text-foreground italic mb-6">
            "Food is not just sustenance - it's the thread that weaves together our most precious moments, creating a tapestry of memories that last a lifetime."
          </blockquote>
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <Image
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop"
                alt="Zoe portrait"
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
    </section>
  );
};

export default PhilosophySection;