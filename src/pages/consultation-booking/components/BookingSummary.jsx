import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const BookingSummary = ({ 
  consultationType, 
  selectedDate, 
  selectedTime, 
  formData, 
  onSubmit, 
  isSubmitting 
}) => {
  const getConsultationTypeDetails = (type) => {
    const types = {
      'in-person': {
        name: 'In-Person Meeting',
        icon: 'MapPin',
        duration: '60-90 minutes',
        location: 'Zoe Zest Kitchen Studio or Your Venue'
      },
      'virtual': {
        name: 'Virtual Consultation',
        icon: 'Video',
        duration: '45-60 minutes',
        location: 'Video Call (Zoom link will be provided)'
      },
      'phone': {
        name: 'Phone Discussion',
        icon: 'Phone',
        duration: '30-45 minutes',
        location: 'Phone Call'
      }
    };
    return types[type] || types['virtual'];
  };

  const typeDetails = getConsultationTypeDetails(consultationType);

  const formatDate = (date) => {
    return date?.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getEventTypeLabel = (value) => {
    const types = {
      'wedding': 'Wedding Celebration',
      'corporate': 'Corporate Event',
      'private-party': 'Private Party',
      'birthday': 'Birthday Celebration',
      'anniversary': 'Anniversary',
      'holiday': 'Holiday Gathering',
      'other': 'Other Event'
    };
    return types[value] || value;
  };

  return (
    <section className="py-16 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-foreground mb-4">
            Consultation Summary
          </h2>
          <p className="text-lg text-text-secondary">
            Please review your consultation details before confirming
          </p>
        </div>

        <div className="bg-card rounded-xl p-8 shadow-warm">
          {/* Consultation Details */}
          <div className="mb-8">
            <h3 className="text-xl font-playfair font-semibold text-foreground mb-6 flex items-center">
              <Icon name="Calendar" size={24} className="mr-3 text-primary" />
              Consultation Details
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name={typeDetails.icon} size={20} className="text-accent" />
                  <div>
                    <p className="font-medium text-foreground">{typeDetails.name}</p>
                    <p className="text-sm text-text-secondary">{typeDetails.duration}</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="MapPin" size={20} className="text-accent" />
                  <div>
                    <p className="font-medium text-foreground">Location</p>
                    <p className="text-sm text-text-secondary">{typeDetails.location}</p>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="Calendar" size={20} className="text-accent" />
                  <div>
                    <p className="font-medium text-foreground">Date</p>
                    <p className="text-sm text-text-secondary">
                      {selectedDate ? formatDate(selectedDate) : 'Not selected'}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Icon name="Clock" size={20} className="text-accent" />
                  <div>
                    <p className="font-medium text-foreground">Time</p>
                    <p className="text-sm text-text-secondary">
                      {selectedTime || 'Not selected'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Event Information */}
          <div className="mb-8 border-t border-border pt-8">
            <h3 className="text-xl font-playfair font-semibold text-foreground mb-6 flex items-center">
              <Icon name="PartyPopper" size={24} className="mr-3 text-primary" />
              Event Information
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-foreground">Event Type</p>
                  <p className="text-text-secondary">{getEventTypeLabel(formData.eventType)}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-foreground">Event Date</p>
                  <p className="text-text-secondary">
                    {formData.eventDate ? new Date(formData.eventDate).toLocaleDateString() : 'Not specified'}
                  </p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-foreground">Guest Count</p>
                  <p className="text-text-secondary">{formData.guestCount || 'Not specified'}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-foreground">Venue</p>
                  <p className="text-text-secondary">
                    {formData.venueName || 'Not specified'}
                    {formData.venueAddress && (
                      <span className="block text-sm">{formData.venueAddress}</span>
                    )}
                  </p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-foreground">Budget Range</p>
                  <p className="text-text-secondary">{formData.budgetRange || 'Not specified'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-8 border-t border-border pt-8">
            <h3 className="text-xl font-playfair font-semibold text-foreground mb-6 flex items-center">
              <Icon name="User" size={24} className="mr-3 text-primary" />
              Contact Information
            </h3>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-foreground">Name</p>
                  <p className="text-text-secondary">
                    {formData.firstName} {formData.lastName}
                  </p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-foreground">Email</p>
                  <p className="text-text-secondary">{formData.email}</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm font-medium text-foreground">Phone</p>
                  <p className="text-text-secondary">{formData.phone}</p>
                </div>
                
                <div>
                  <p className="text-sm font-medium text-foreground">Preferred Contact</p>
                  <p className="text-text-secondary">{formData.preferredContact || 'Any method'}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Special Notes */}
          {(formData.dietaryRestrictions || formData.additionalDetails) && (
            <div className="mb-8 border-t border-border pt-8">
              <h3 className="text-xl font-playfair font-semibold text-foreground mb-6 flex items-center">
                <Icon name="FileText" size={24} className="mr-3 text-primary" />
                Special Notes
              </h3>
              
              {formData.dietaryRestrictions && (
                <div className="mb-4">
                  <p className="text-sm font-medium text-foreground mb-1">Dietary Restrictions</p>
                  <p className="text-text-secondary">{formData.dietaryRestrictions}</p>
                </div>
              )}
              
              {formData.additionalDetails && (
                <div>
                  <p className="text-sm font-medium text-foreground mb-1">Additional Details</p>
                  <p className="text-text-secondary">{formData.additionalDetails}</p>
                </div>
              )}
            </div>
          )}

          {/* Confirmation Actions */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="sm:w-auto"
              >
                <Icon name="Edit" size={20} className="mr-2" />
                Edit Details
              </Button>
              
              <Button
                variant="default"
                size="lg"
                onClick={onSubmit}
                loading={isSubmitting}
                className="sm:w-auto"
              >
                <Icon name="Check" size={20} className="mr-2" />
                Confirm Consultation
              </Button>
            </div>
            
            <p className="text-center text-sm text-text-secondary mt-4">
              You'll receive a confirmation email with consultation details and preparation materials
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSummary;