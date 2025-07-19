import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const OfficeLocation = () => {
  const [selectedTab, setSelectedTab] = useState('location');

  const businessHours = [
    { day: 'Monday', hours: '8:00 AM - 6:00 PM', isToday: false },
    { day: 'Tuesday', hours: '8:00 AM - 6:00 PM', isToday: true },
    { day: 'Wednesday', hours: '8:00 AM - 6:00 PM', isToday: false },
    { day: 'Thursday', hours: '8:00 AM - 6:00 PM', isToday: false },
    { day: 'Friday', hours: '8:00 AM - 6:00 PM', isToday: false },
    { day: 'Saturday', hours: '9:00 AM - 4:00 PM', isToday: false },
    { day: 'Sunday', hours: 'Closed', isToday: false }
  ];

  const facilities = [
    {
      name: 'Commercial Kitchen',
      description: 'State-of-the-art facility for food preparation',
      icon: 'ChefHat',
      features: ['Health Department Certified', 'Temperature Controlled', 'Allergen-Free Zones']
    },
    {
      name: 'Tasting Room',
      description: 'Private space for menu consultations',
      icon: 'Utensils',
      features: ['Seats up to 8 people', 'Full presentation setup', 'Dietary accommodation testing']
    },
    {
      name: 'Client Meeting Area',
      description: 'Comfortable space for event planning',
      icon: 'Users',
      features: ['Conference table', 'Presentation screen', 'Sample displays']
    },
    {
      name: 'Storage & Prep',
      description: 'Temperature-controlled storage areas',
      icon: 'Package',
      features: ['Refrigerated storage', 'Dry goods pantry', 'Equipment storage']
    }
  ];

  const accessibilityFeatures = [
    'Wheelchair accessible entrance',
    'ADA compliant restrooms',
    'Accessible parking spaces',
    'Elevator access to all floors',
    'Braille signage available',
    'Hearing loop system'
  ];

  const parkingInfo = [
    {
      type: 'Client Parking',
      spaces: '12 dedicated spaces',
      cost: 'Free',
      notes: 'Reserved for appointments'
    },
    {
      type: 'Street Parking',
      spaces: 'Limited availability',
      cost: '$2/hour',
      notes: '2-hour maximum'
    },
    {
      type: 'Public Garage',
      spaces: '200+ spaces',
      cost: '$5/day',
      notes: '2 blocks away'
    }
  ];

  const tabs = [
    { id: 'location', label: 'Location', icon: 'MapPin' },
    { id: 'hours', label: 'Hours', icon: 'Clock' },
    { id: 'facilities', label: 'Facilities', icon: 'Building' },
    { id: 'accessibility', label: 'Accessibility', icon: 'Heart' }
  ];

  const handleDirections = () => {
    window.open('https://maps.google.com?q=123+Culinary+Way,+Downtown+District', '_blank');
  };

  return (
    <div className="bg-white rounded-2xl shadow-warm p-6 lg:p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
          <Icon name="Building2" size={24} className="text-primary" />
        </div>
        <div>
          <h3 className="text-2xl font-playfair font-bold text-foreground">
            Visit Our Kitchen
          </h3>
          <p className="text-text-secondary">
            Schedule a tour or tasting appointment
          </p>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="flex flex-wrap gap-2 mb-6 border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setSelectedTab(tab.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-t-lg text-sm font-medium transition-colors ${
              selectedTab === tab.id
                ? 'bg-primary text-white border-b-2 border-primary' :'text-text-secondary hover:text-primary hover:bg-muted'
            }`}
          >
            <Icon name={tab.icon} size={16} />
            <span>{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Location Tab */}
      {selectedTab === 'location' && (
        <div className="space-y-6">
          {/* Address & Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-4">Address</h4>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Icon name="MapPin" size={20} className="text-primary mt-1" />
                  <div>
                    <p className="font-medium text-foreground">Zoe Zest Catering</p>
                    <p className="text-text-secondary">123 Culinary Way</p>
                    <p className="text-text-secondary">Downtown District, ST 12345</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="Phone" size={20} className="text-primary" />
                  <div>
                    <p className="font-medium text-foreground">(555) 123-4567</p>
                    <p className="text-sm text-text-secondary">Main office line</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="Mail" size={20} className="text-primary" />
                  <div>
                    <p className="font-medium text-foreground">hello@zoezestcatering.com</p>
                    <p className="text-sm text-text-secondary">General inquiries</p>
                  </div>
                </div>
              </div>
              
              <Button
                variant="outline"
                onClick={handleDirections}
                iconName="Navigation"
                iconPosition="left"
                className="mt-4"
              >
                Get Directions
              </Button>
            </div>
            
            <div className="h-64 lg:h-80 rounded-xl overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                loading="lazy"
                title="Zoe Zest Catering Location"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=40.7589,-73.9851&z=16&output=embed"
              />
            </div>
          </div>

          {/* Parking Information */}
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center space-x-2">
              <Icon name="Car" size={20} />
              <span>Parking Information</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {parkingInfo.map((parking, index) => (
                <div key={index} className="p-4 border border-border rounded-lg">
                  <h5 className="font-semibold text-foreground mb-2">{parking.type}</h5>
                  <div className="space-y-1 text-sm">
                    <p className="text-text-secondary">{parking.spaces}</p>
                    <p className="font-medium text-accent">{parking.cost}</p>
                    <p className="text-xs text-text-secondary">{parking.notes}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Hours Tab */}
      {selectedTab === 'hours' && (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Business Hours</h4>
            <div className="space-y-2">
              {businessHours.map((schedule, index) => (
                <div
                  key={index}
                  className={`flex justify-between items-center p-3 rounded-lg ${
                    schedule.isToday
                      ? 'bg-primary/10 border border-primary/20' :'bg-muted/30'
                  }`}
                >
                  <span className={`font-medium ${
                    schedule.isToday ? 'text-primary' : 'text-foreground'
                  }`}>
                    {schedule.day}
                    {schedule.isToday && (
                      <span className="ml-2 text-xs bg-primary text-white px-2 py-1 rounded-full">
                        Today
                      </span>
                    )}
                  </span>
                  <span className={`${
                    schedule.hours === 'Closed' ? 'text-error' : 'text-text-secondary'
                  }`}>
                    {schedule.hours}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-accent/5 border border-accent/20 rounded-lg">
            <div className="flex items-start space-x-3">
              <Icon name="Info" size={20} className="text-accent mt-0.5" />
              <div>
                <h5 className="font-semibold text-foreground mb-2">Important Notes</h5>
                <ul className="text-sm text-text-secondary space-y-1">
                  <li>• Tasting appointments available by appointment only</li>
                  <li>• Kitchen tours available Monday-Friday 10AM-4PM</li>
                  <li>• Holiday hours may vary - please call ahead</li>
                  <li>• Emergency support available 24/7 for active events</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Facilities Tab */}
      {selectedTab === 'facilities' && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {facilities.map((facility, index) => (
              <div key={index} className="p-4 border border-border rounded-lg hover:border-accent hover:shadow-sm transition-all">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
                    <Icon name={facility.icon} size={24} className="text-accent" />
                  </div>
                  <div className="flex-1">
                    <h5 className="font-semibold text-foreground mb-1">{facility.name}</h5>
                    <p className="text-sm text-text-secondary mb-3">{facility.description}</p>
                    <ul className="space-y-1">
                      {facility.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center space-x-2 text-sm text-text-secondary">
                          <Icon name="Check" size={14} className="text-success" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
            <div className="flex items-start space-x-3">
              <Icon name="Calendar" size={20} className="text-primary mt-0.5" />
              <div>
                <h5 className="font-semibold text-foreground mb-2">Schedule a Visit</h5>
                <p className="text-sm text-text-secondary mb-3">
                  We'd love to show you our facilities and discuss your event needs in person.
                </p>
                <Button variant="default" size="sm" iconName="Calendar" iconPosition="left">
                  Book Kitchen Tour
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Accessibility Tab */}
      {selectedTab === 'accessibility' && (
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Accessibility Features</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {accessibilityFeatures.map((feature, index) => (
                <div key={index} className="flex items-center space-x-3 p-3 bg-muted/30 rounded-lg">
                  <Icon name="Check" size={18} className="text-success" />
                  <span className="text-sm text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 bg-success/5 border border-success/20 rounded-lg">
            <div className="flex items-start space-x-3">
              <Icon name="Heart" size={20} className="text-success mt-0.5" />
              <div>
                <h5 className="font-semibold text-foreground mb-2">Our Commitment</h5>
                <p className="text-sm text-text-secondary mb-3">
                  We are committed to providing an inclusive and accessible experience for all our clients and visitors. 
                  If you have specific accessibility needs or require additional accommodations, please let us know in advance.
                </p>
                <div className="flex items-center space-x-4">
                  <Button variant="outline" size="sm" iconName="Phone" iconPosition="left">
                    Call for Assistance
                  </Button>
                  <Button variant="outline" size="sm" iconName="Mail" iconPosition="left">
                    Email Accessibility Team
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OfficeLocation;