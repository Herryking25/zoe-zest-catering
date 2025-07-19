import React, { useState } from 'react';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    inquiryType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventDate: '',
    guestCount: '',
    eventType: '',
    message: '',
    preferredContact: '',
    newsletter: false
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const inquiryTypes = [
    { value: 'new-event', label: 'New Event Inquiry' },
    { value: 'existing-booking', label: 'Existing Booking' },
    { value: 'general-question', label: 'General Question' },
    { value: 'media-inquiry', label: 'Media Inquiry' }
  ];

  const eventTypes = [
    { value: 'wedding', label: 'Wedding' },
    { value: 'corporate', label: 'Corporate Event' },
    { value: 'private-party', label: 'Private Party' },
    { value: 'birthday', label: 'Birthday Celebration' },
    { value: 'anniversary', label: 'Anniversary' },
    { value: 'other', label: 'Other' }
  ];

  const contactMethods = [
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Phone Call' },
    { value: 'text', label: 'Text Message' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
    
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors(prev => ({
        ...prev,
        [field]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.inquiryType) newErrors.inquiryType = 'Please select an inquiry type';
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (!formData.preferredContact) newErrors.preferredContact = 'Please select preferred contact method';

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    // Phone validation
    const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
    if (formData.phone && !phoneRegex.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid phone number';
    }

    // Event-specific validation
    if (formData.inquiryType === 'new-event') {
      if (!formData.eventDate) newErrors.eventDate = 'Event date is required for new events';
      if (!formData.guestCount) newErrors.guestCount = 'Guest count is required for new events';
      if (!formData.eventType) newErrors.eventType = 'Event type is required for new events';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Reset form
      setFormData({
        inquiryType: '',
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        eventDate: '',
        guestCount: '',
        eventType: '',
        message: '',
        preferredContact: '',
        newsletter: false
      });
      
      alert('Thank you for your inquiry! We will respond within 24 hours.');
    } catch (error) {
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getResponseTime = () => {
    switch (formData.inquiryType) {
      case 'new-event':
        return 'within 4 hours';
      case 'existing-booking':
        return 'within 2 hours';
      case 'media-inquiry':
        return 'within 24 hours';
      default:
        return 'within 24 hours';
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-warm p-6 lg:p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
          <Icon name="MessageSquare" size={24} className="text-primary" />
        </div>
        <div>
          <h3 className="text-2xl font-playfair font-bold text-foreground">
            Get In Touch
          </h3>
          <p className="text-text-secondary">
            We'd love to hear about your upcoming event
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Inquiry Type */}
        <Select
          label="Type of Inquiry"
          description="Help us route your message to the right team"
          options={inquiryTypes}
          value={formData.inquiryType}
          onChange={(value) => handleInputChange('inquiryType', value)}
          error={errors.inquiryType}
          required
          placeholder="Select inquiry type"
        />

        {formData.inquiryType && (
          <div className="bg-warm-cream/50 border border-accent/20 rounded-lg p-4">
            <div className="flex items-center space-x-2 text-sm text-accent">
              <Icon name="Clock" size={16} />
              <span>Expected response time: {getResponseTime()}</span>
            </div>
          </div>
        )}

        {/* Name Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="First Name"
            type="text"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            error={errors.firstName}
            required
            placeholder="Enter your first name"
          />
          <Input
            label="Last Name"
            type="text"
            value={formData.lastName}
            onChange={(e) => handleInputChange('lastName', e.target.value)}
            error={errors.lastName}
            required
            placeholder="Enter your last name"
          />
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            error={errors.email}
            required
            placeholder="your.email@example.com"
          />
          <Input
            label="Phone Number"
            type="tel"
            value={formData.phone}
            onChange={(e) => handleInputChange('phone', e.target.value)}
            error={errors.phone}
            required
            placeholder="(555) 123-4567"
          />
        </div>

        {/* Event-Specific Fields */}
        {formData.inquiryType === 'new-event' && (
          <div className="space-y-4 p-4 bg-muted/50 rounded-lg border border-border">
            <h4 className="font-semibold text-foreground flex items-center space-x-2">
              <Icon name="Calendar" size={18} />
              <span>Event Details</span>
            </h4>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Input
                label="Event Date"
                type="date"
                value={formData.eventDate}
                onChange={(e) => handleInputChange('eventDate', e.target.value)}
                error={errors.eventDate}
                required
                min={new Date().toISOString().split('T')[0]}
              />
              <Input
                label="Guest Count"
                type="number"
                value={formData.guestCount}
                onChange={(e) => handleInputChange('guestCount', e.target.value)}
                error={errors.guestCount}
                required
                placeholder="50"
                min="1"
              />
              <Select
                label="Event Type"
                options={eventTypes}
                value={formData.eventType}
                onChange={(value) => handleInputChange('eventType', value)}
                error={errors.eventType}
                required
                placeholder="Select event type"
              />
            </div>
          </div>
        )}

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Message <span className="text-error">*</span>
          </label>
          <textarea
            value={formData.message}
            onChange={(e) => handleInputChange('message', e.target.value)}
            rows={4}
            className="w-full px-3 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
            placeholder="Tell us about your event, dietary requirements, or any specific questions..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-error">{errors.message}</p>
          )}
        </div>

        {/* Preferred Contact Method */}
        <Select
          label="Preferred Contact Method"
          description="How would you like us to respond?"
          options={contactMethods}
          value={formData.preferredContact}
          onChange={(value) => handleInputChange('preferredContact', value)}
          error={errors.preferredContact}
          required
          placeholder="Select contact method"
        />

        {/* Newsletter Signup */}
        <Checkbox
          label="Subscribe to our newsletter"
          description="Get seasonal menu previews, entertaining tips, and exclusive client benefits"
          checked={formData.newsletter}
          onChange={(e) => handleInputChange('newsletter', e.target.checked)}
        />

        {/* Submit Button */}
        <Button
          type="submit"
          variant="default"
          size="lg"
          loading={isSubmitting}
          disabled={isSubmitting}
          fullWidth
          iconName="Send"
          iconPosition="right"
          className="mt-8"
        >
          {isSubmitting ? 'Sending Message...' : 'Send Message'}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;