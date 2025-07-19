import React from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const EventDetailsForm = ({ formData, onFormChange, errors }) => {
  const eventTypes = [
    { value: 'wedding', label: 'Wedding Celebration' },
    { value: 'corporate', label: 'Corporate Event' },
    { value: 'private-party', label: 'Private Party' },
    { value: 'birthday', label: 'Birthday Celebration' },
    { value: 'anniversary', label: 'Anniversary' },
    { value: 'holiday', label: 'Holiday Gathering' },
    { value: 'other', label: 'Other Event' }
  ];

  const budgetRanges = [
    { value: 'under-1000', label: 'Under $1,000' },
    { value: '1000-2500', label: '$1,000 - $2,500' },
    { value: '2500-5000', label: '$2,500 - $5,000' },
    { value: '5000-10000', label: '$5,000 - $10,000' },
    { value: 'over-10000', label: 'Over $10,000' },
    { value: 'flexible', label: 'Flexible Budget' }
  ];

  const guestCountOptions = [
    { value: '10-25', label: '10-25 guests' },
    { value: '25-50', label: '25-50 guests' },
    { value: '50-100', label: '50-100 guests' },
    { value: '100-200', label: '100-200 guests' },
    { value: '200+', label: '200+ guests' }
  ];

  const serviceTypes = [
    { id: 'full-service', label: 'Full-Service Catering', description: 'Complete event management with setup and service' },
    { id: 'drop-off', label: 'Drop-Off Catering', description: 'Prepared food delivered to your venue' },
    { id: 'buffet', label: 'Buffet Service', description: 'Self-serve buffet with professional setup' },
    { id: 'plated', label: 'Plated Service', description: 'Formal plated dinner service' },
    { id: 'cocktail', label: 'Cocktail Reception', description: 'Appetizers and small bites service' }
  ];

  const handleInputChange = (field, value) => {
    onFormChange({ ...formData, [field]: value });
  };

  const handleCheckboxChange = (serviceId, checked) => {
    const updatedServices = checked
      ? [...(formData.serviceTypes || []), serviceId]
      : (formData.serviceTypes || []).filter(id => id !== serviceId);
    
    onFormChange({ ...formData, serviceTypes: updatedServices });
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-foreground mb-4">
            Tell Us About Your Event
          </h2>
          <p className="text-lg text-text-secondary">
            Share your vision so we can create the perfect culinary experience
          </p>
        </div>

        <div className="bg-card rounded-xl p-8 shadow-warm">
          <div className="grid md:grid-cols-2 gap-6">
            {/* Event Type */}
            <Select
              label="Event Type"
              placeholder="Select event type"
              options={eventTypes}
              value={formData.eventType || ''}
              onChange={(value) => handleInputChange('eventType', value)}
              error={errors.eventType}
              required
              className="mb-4"
            />

            {/* Event Date */}
            <Input
              label="Event Date"
              type="date"
              value={formData.eventDate || ''}
              onChange={(e) => handleInputChange('eventDate', e.target.value)}
              error={errors.eventDate}
              required
              className="mb-4"
            />

            {/* Guest Count */}
            <Select
              label="Expected Guest Count"
              placeholder="Select guest count"
              options={guestCountOptions}
              value={formData.guestCount || ''}
              onChange={(value) => handleInputChange('guestCount', value)}
              error={errors.guestCount}
              required
              className="mb-4"
            />

            {/* Budget Range */}
            <Select
              label="Budget Range"
              placeholder="Select budget range"
              options={budgetRanges}
              value={formData.budgetRange || ''}
              onChange={(value) => handleInputChange('budgetRange', value)}
              error={errors.budgetRange}
              className="mb-4"
            />
          </div>

          {/* Venue Information */}
          <div className="grid md:grid-cols-2 gap-6 mt-6">
            <Input
              label="Venue Name"
              type="text"
              placeholder="Enter venue name"
              value={formData.venueName || ''}
              onChange={(e) => handleInputChange('venueName', e.target.value)}
              error={errors.venueName}
              className="mb-4"
            />

            <Input
              label="Venue Address"
              type="text"
              placeholder="Enter venue address"
              value={formData.venueAddress || ''}
              onChange={(e) => handleInputChange('venueAddress', e.target.value)}
              error={errors.venueAddress}
              className="mb-4"
            />
          </div>

          {/* Service Types */}
          <div className="mt-8">
            <h3 className="text-lg font-playfair font-semibold text-foreground mb-4">
              Service Style Preferences
            </h3>
            <p className="text-sm text-text-secondary mb-6">
              Select all service styles you're interested in (you can choose multiple)
            </p>
            
            <div className="space-y-4">
              {serviceTypes.map((service) => (
                <div key={service.id} className="border border-border rounded-lg p-4">
                  <Checkbox
                    label={service.label}
                    description={service.description}
                    checked={(formData.serviceTypes || []).includes(service.id)}
                    onChange={(e) => handleCheckboxChange(service.id, e.target.checked)}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Special Requirements */}
          <div className="mt-8">
            <div className="space-y-6">
              <Input
                label="Dietary Restrictions & Allergies"
                type="text"
                placeholder="e.g., Vegetarian, Gluten-free, Nut allergies"
                value={formData.dietaryRestrictions || ''}
                onChange={(e) => handleInputChange('dietaryRestrictions', e.target.value)}
                description="Please list any dietary requirements for your guests"
                className="mb-4"
              />

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Additional Details & Special Requests
                </label>
                <textarea
                  rows={4}
                  placeholder="Tell us about your vision, theme, special requirements, or any other details that will help us create the perfect experience..."
                  value={formData.additionalDetails || ''}
                  onChange={(e) => handleInputChange('additionalDetails', e.target.value)}
                  className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                />
              </div>
            </div>
          </div>

          {/* Urgency Indicator */}
          <div className="mt-8 p-4 bg-warm-cream rounded-lg">
            <div className="flex items-start space-x-3">
              <Icon name="Clock" size={20} className="text-accent mt-0.5" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Need Rush Service?</h4>
                <p className="text-sm text-text-secondary mb-3">
                  For events within 2 weeks, we offer expedited consultation and planning services.
                </p>
                <Checkbox
                  label="This is an urgent request (event within 2 weeks)"
                  checked={formData.isUrgent || false}
                  onChange={(e) => handleInputChange('isUrgent', e.target.checked)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetailsForm;