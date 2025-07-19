import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ServiceAreaMap = () => {
  const [selectedZone, setSelectedZone] = useState(null);

  const serviceZones = [
    {
      id: 'primary',
      name: 'Primary Service Area',
      description: 'Free delivery within 15 miles',
      color: 'bg-primary',
      locations: [
        'Downtown District',
        'Midtown Area',
        'Riverside Quarter',
        'Heritage Hills',
        'Garden District'
      ],
      deliveryFee: 'Free',
      setupFee: 'Included'
    },
    {
      id: 'extended',
      name: 'Extended Service Area',
      description: '16-30 miles from our kitchen',
      color: 'bg-accent',
      locations: [
        'Oakwood Estates',
        'Pine Valley',
        'Sunset Hills',
        'Lakeside Commons',
        'Mountain View'
      ],
      deliveryFee: '$25-50',
      setupFee: '$75'
    },
    {
      id: 'premium',
      name: 'Premium Service Area',
      description: '31-50 miles - Special arrangements',
      color: 'bg-secondary',
      locations: [
        'Coastal Resorts',
        'Mountain Lodges',
        'Wine Country',
        'Historic Estates',
        'Destination Venues'
      ],
      deliveryFee: '$75-150',
      setupFee: '$150'
    }
  ];

  const preferredVenues = [
    {
      name: 'Grand Ballroom Hotel',
      type: 'Hotel',
      partnership: 'Preferred Partner',
      icon: 'Building'
    },
    {
      name: 'Riverside Event Center',
      type: 'Event Center',
      partnership: 'Exclusive Caterer',
      icon: 'MapPin'
    },
    {
      name: 'Heritage Gardens',
      type: 'Outdoor Venue',
      partnership: 'Preferred Partner',
      icon: 'Trees'
    },
    {
      name: 'Corporate Plaza',
      type: 'Business Center',
      partnership: 'Corporate Partner',
      icon: 'Building2'
    }
  ];

  return (
    <div className="bg-white rounded-2xl shadow-warm p-6 lg:p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
          <Icon name="Map" size={24} className="text-accent" />
        </div>
        <div>
          <h3 className="text-2xl font-playfair font-bold text-foreground">
            Service Areas
          </h3>
          <p className="text-text-secondary">
            We deliver exceptional catering throughout the region
          </p>
        </div>
      </div>

      {/* Interactive Map */}
      <div className="mb-8">
        <div className="relative bg-muted/30 rounded-xl overflow-hidden" style={{ height: '400px' }}>
          <iframe
            width="100%"
            height="100%"
            loading="lazy"
            title="Zoe Zest Catering Service Areas"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps?q=40.7128,-74.0060&z=10&output=embed"
            className="rounded-xl"
          />
          
          {/* Overlay Controls */}
          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg p-3 shadow-lg">
            <p className="text-sm font-medium text-foreground mb-2">Service Zones</p>
            <div className="space-y-2">
              {serviceZones.map((zone) => (
                <button
                  key={zone.id}
                  onClick={() => setSelectedZone(selectedZone === zone.id ? null : zone.id)}
                  className={`flex items-center space-x-2 text-xs px-2 py-1 rounded transition-colors ${
                    selectedZone === zone.id
                      ? 'bg-primary text-white' :'hover:bg-muted text-foreground'
                  }`}
                >
                  <div className={`w-3 h-3 rounded-full ${zone.color}`} />
                  <span>{zone.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Service Zone Details */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {serviceZones.map((zone) => (
          <div
            key={zone.id}
            className={`border rounded-xl p-4 transition-all cursor-pointer ${
              selectedZone === zone.id
                ? 'border-primary bg-primary/5 shadow-warm'
                : 'border-border hover:border-accent hover:shadow-sm'
            }`}
            onClick={() => setSelectedZone(selectedZone === zone.id ? null : zone.id)}
          >
            <div className="flex items-center space-x-3 mb-3">
              <div className={`w-4 h-4 rounded-full ${zone.color}`} />
              <h4 className="font-semibold text-foreground">{zone.name}</h4>
            </div>
            
            <p className="text-sm text-text-secondary mb-3">{zone.description}</p>
            
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-text-secondary">Delivery:</span>
                <span className="font-medium text-foreground">{zone.deliveryFee}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-text-secondary">Setup:</span>
                <span className="font-medium text-foreground">{zone.setupFee}</span>
              </div>
            </div>

            {selectedZone === zone.id && (
              <div className="mt-4 pt-4 border-t border-border">
                <p className="text-sm font-medium text-foreground mb-2">Coverage Areas:</p>
                <div className="grid grid-cols-1 gap-1">
                  {zone.locations.map((location, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-text-secondary">
                      <Icon name="MapPin" size={12} />
                      <span>{location}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Preferred Venues */}
      <div>
        <h4 className="text-lg font-playfair font-semibold text-foreground mb-4 flex items-center space-x-2">
          <Icon name="Star" size={20} className="text-accent" />
          <span>Preferred Venue Partners</span>
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {preferredVenues.map((venue, index) => (
            <div key={index} className="flex items-center space-x-4 p-4 border border-border rounded-lg hover:border-accent hover:shadow-sm transition-all">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <Icon name={venue.icon} size={20} className="text-accent" />
              </div>
              <div className="flex-1">
                <h5 className="font-semibold text-foreground">{venue.name}</h5>
                <p className="text-sm text-text-secondary">{venue.type}</p>
              </div>
              <div className="text-right">
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary">
                  {venue.partnership}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Travel Policy */}
      <div className="mt-8 p-4 bg-warm-cream/30 border border-accent/20 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Info" size={20} className="text-accent mt-0.5" />
          <div>
            <h5 className="font-semibold text-foreground mb-2">Travel Policy</h5>
            <ul className="text-sm text-text-secondary space-y-1">
              <li>• Delivery fees are calculated from our commercial kitchen location</li>
              <li>• Setup and breakdown services available for all service areas</li>
              <li>• Special arrangements can be made for destinations beyond 50 miles</li>
              <li>• Weekend and holiday deliveries may incur additional fees</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAreaMap;