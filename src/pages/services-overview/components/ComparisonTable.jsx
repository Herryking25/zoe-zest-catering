import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ComparisonTable = () => {
  const [selectedPackage, setSelectedPackage] = useState('premium');

  const packages = [
    {
      id: 'essential',
      name: 'Essential',
      subtitle: 'Perfect for intimate gatherings',
      price: '$35',
      priceUnit: 'per person',
      guestRange: '10-30 guests',
      popular: false,
      features: [
        'Appetizer selection (3 options)',
        'Main course (2 options)',
        'Side dishes (2 options)',
        'Basic table setup',
        'Standard service staff',
        'Cleanup included',
        'Basic beverage service',
        '4-hour service window'
      ],
      addOns: [
        'Additional appetizers (+$8/person)',
        'Premium linens (+$5/person)',
        'Extended service (+$15/hour)'
      ],
      idealFor: 'Small birthday parties, family gatherings, casual celebrations'
    },
    {
      id: 'premium',
      name: 'Premium',
      subtitle: 'Our most popular choice',
      price: '$55',
      priceUnit: 'per person',
      guestRange: '25-75 guests',
      popular: true,
      features: [
        'Appetizer selection (5 options)',
        'Main course (3 options)',
        'Side dishes (3 options)',
        'Dessert course included',
        'Premium table setup',
        'Professional service staff',
        'Full cleanup service',
        'Wine & cocktail service',
        '6-hour service window',
        'Event coordinator included',
        'Custom menu consultation'
      ],
      addOns: [
        'Live cooking stations (+$12/person)',
        'Premium bar package (+$18/person)',
        'Floral arrangements (+$25/table)'
      ],
      idealFor: 'Weddings, corporate events, milestone celebrations'
    },
    {
      id: 'luxury',
      name: 'Luxury',
      subtitle: 'The ultimate dining experience',
      price: '$85',
      priceUnit: 'per person',
      guestRange: '50-150 guests',
      popular: false,
      features: [
        'Unlimited appetizer selection',
        'Multi-course plated dinner',
        'Premium side selections',
        'Artisan dessert station',
        'Luxury table settings',
        'Dedicated service team',
        'Complete event management',
        'Premium bar service',
        '8-hour service window',
        'Personal event coordinator',
        'Custom menu development',
        'Sommelier wine pairing',
        'Live cooking demonstrations',
        'Specialty dietary menus'
      ],
      addOns: [
        'Celebrity chef appearance (+$500)',
        'Ice sculpture centerpiece (+$300)',
        'Live entertainment coordination (+$200/hour)'
      ],
      idealFor: 'Luxury weddings, corporate galas, exclusive celebrations'
    }
  ];

  const allFeatures = [
    'Appetizer selection',
    'Main course options',
    'Side dishes',
    'Dessert course',
    'Table setup',
    'Service staff',
    'Cleanup service',
    'Beverage service',
    'Service duration',
    'Event coordination',
    'Menu consultation',
    'Wine pairing',
    'Live cooking',
    'Dietary accommodations'
  ];

  const getFeatureStatus = (packageId, feature) => {
    const pkg = packages.find(p => p.id === packageId);
    const hasFeature = pkg.features.some(f => f.toLowerCase().includes(feature.toLowerCase()));
    
    if (hasFeature) {
      const featureDetail = pkg.features.find(f => f.toLowerCase().includes(feature.toLowerCase()));
      return { status: 'included', detail: featureDetail };
    }
    
    const hasAddOn = pkg.addOns.some(a => a.toLowerCase().includes(feature.toLowerCase()));
    if (hasAddOn) {
      return { status: 'addon', detail: 'Available as add-on' };
    }
    
    return { status: 'not-included', detail: 'Not included' };
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-foreground mb-4">
            Choose Your Perfect Package
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Compare our service packages to find the perfect fit for your event. 
            Each package can be customized to meet your specific needs.
          </p>
        </div>

        {/* Mobile Package Cards */}
        <div className="lg:hidden space-y-6 mb-8">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-card rounded-2xl p-6 shadow-warm transition-all ${
                pkg.popular ? 'ring-2 ring-primary shadow-warm-lg' : ''
              }`}
            >
              {pkg.popular && (
                <div className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                  Most Popular
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="text-2xl font-playfair font-bold text-foreground mb-2">
                  {pkg.name}
                </h3>
                <p className="text-muted-foreground mb-4">{pkg.subtitle}</p>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                  <span className="text-muted-foreground ml-2">{pkg.priceUnit}</span>
                </div>
                <p className="text-sm text-muted-foreground">{pkg.guestRange}</p>
              </div>

              <div className="space-y-3 mb-6">
                {pkg.features.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-foreground">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-2">Available Add-ons:</h4>
                <div className="space-y-2">
                  {pkg.addOns.map((addon, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <Icon name="Plus" size={14} className="text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{addon}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-6 p-4 bg-muted rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Ideal For:</h4>
                <p className="text-sm text-muted-foreground">{pkg.idealFor}</p>
              </div>

              <Button
                variant={pkg.popular ? "default" : "outline"}
                size="default"
                className="w-full"
                iconName="Calendar"
                iconPosition="left"
              >
                Select {pkg.name}
              </Button>
            </div>
          ))}
        </div>

        {/* Desktop Comparison Table */}
        <div className="hidden lg:block">
          <div className="bg-card rounded-2xl shadow-warm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-6 w-1/4">
                      <span className="text-lg font-playfair font-bold text-foreground">
                        Features
                      </span>
                    </th>
                    {packages.map((pkg) => (
                      <th key={pkg.id} className="text-center p-6 relative">
                        {pkg.popular && (
                          <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-medium">
                              Most Popular
                            </span>
                          </div>
                        )}
                        <div className="pt-4">
                          <h3 className="text-xl font-playfair font-bold text-foreground mb-2">
                            {pkg.name}
                          </h3>
                          <p className="text-muted-foreground text-sm mb-4">{pkg.subtitle}</p>
                          <div className="mb-2">
                            <span className="text-3xl font-bold text-primary">{pkg.price}</span>
                            <span className="text-muted-foreground text-sm ml-2 block">
                              {pkg.priceUnit}
                            </span>
                          </div>
                          <p className="text-xs text-muted-foreground mb-4">{pkg.guestRange}</p>
                          <Button
                            variant={pkg.popular ? "default" : "outline"}
                            size="sm"
                            className="w-full"
                            onClick={() => setSelectedPackage(pkg.id)}
                          >
                            Select Plan
                          </Button>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {allFeatures.map((feature, index) => (
                    <tr key={index} className="border-b border-border hover:bg-muted/50">
                      <td className="p-4 font-medium text-foreground">
                        {feature}
                      </td>
                      {packages.map((pkg) => {
                        const featureStatus = getFeatureStatus(pkg.id, feature);
                        return (
                          <td key={pkg.id} className="p-4 text-center">
                            {featureStatus.status === 'included' && (
                              <div className="flex items-center justify-center">
                                <Icon name="Check" size={20} className="text-success" />
                              </div>
                            )}
                            {featureStatus.status === 'addon' && (
                              <div className="flex items-center justify-center">
                                <Icon name="Plus" size={16} className="text-accent" />
                              </div>
                            )}
                            {featureStatus.status === 'not-included' && (
                              <div className="flex items-center justify-center">
                                <Icon name="Minus" size={16} className="text-muted-foreground" />
                              </div>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Legend */}
          <div className="mt-6 flex justify-center space-x-8 text-sm">
            <div className="flex items-center space-x-2">
              <Icon name="Check" size={16} className="text-success" />
              <span className="text-muted-foreground">Included</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Plus" size={16} className="text-accent" />
              <span className="text-muted-foreground">Available as add-on</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Minus" size={16} className="text-muted-foreground" />
              <span className="text-muted-foreground">Not included</span>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-warm-gradient rounded-2xl p-8">
            <h3 className="text-2xl font-playfair font-bold text-foreground mb-4">
              Need a Custom Package?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Every event is unique. Let us create a personalized package that perfectly matches 
              your vision, budget, and guest requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Discuss Custom Options
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
              >
                Download Package Guide
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;