import React from 'react';
import Icon from '../../../components/AppIcon';

const ConsultationTypes = ({ selectedType, onTypeSelect }) => {
  const consultationTypes = [
    {
      id: 'in-person',
      name: 'In-Person Meeting',
      icon: 'MapPin',
      duration: '60-90 minutes',
      description: 'Visit our kitchen studio or meet at your venue for a comprehensive planning session',
      benefits: ['Venue assessment', 'Menu tasting', 'Setup visualization', 'Equipment review']
    },
    {
      id: 'virtual',
      name: 'Virtual Consultation',
      icon: 'Video',
      duration: '45-60 minutes',
      description: 'Connect via video call for detailed planning from the comfort of your home',
      benefits: ['Screen sharing', 'Digital portfolio', 'Real-time notes', 'Recording available']
    },
    {
      id: 'phone',
      name: 'Phone Discussion',
      icon: 'Phone',
      duration: '30-45 minutes',
      description: 'Quick and efficient planning call to discuss your event requirements',
      benefits: ['Flexible scheduling', 'Quick decisions', 'Follow-up email', 'Immediate quotes']
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-foreground mb-4">
            Choose Your Consultation Style
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Select the consultation format that works best for your schedule and planning needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {consultationTypes.map((type) => (
            <div
              key={type.id}
              onClick={() => onTypeSelect(type.id)}
              className={`cursor-pointer rounded-xl p-6 transition-warm border-2 ${
                selectedType === type.id
                  ? 'border-primary bg-primary/5 shadow-warm-lg'
                  : 'border-border bg-card hover:border-primary/50 hover:shadow-warm'
              }`}
            >
              <div className="text-center mb-6">
                <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full mb-4 ${
                  selectedType === type.id ? 'bg-primary text-white' : 'bg-muted text-primary'
                }`}>
                  <Icon name={type.icon} size={28} />
                </div>
                <h3 className="text-xl font-playfair font-semibold text-foreground mb-2">
                  {type.name}
                </h3>
                <p className="text-sm text-accent font-medium mb-3">{type.duration}</p>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {type.description}
                </p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-foreground text-sm mb-3">What's Included:</h4>
                {type.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="Check" size={16} className="text-success flex-shrink-0" />
                    <span className="text-sm text-text-secondary">{benefit}</span>
                  </div>
                ))}
              </div>

              {selectedType === type.id && (
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <div className="flex items-center space-x-2">
                    <Icon name="CheckCircle" size={16} className="text-primary" />
                    <span className="text-sm font-medium text-primary">Selected</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConsultationTypes;