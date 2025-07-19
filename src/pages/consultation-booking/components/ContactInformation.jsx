import React from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Checkbox } from '../../../components/ui/Checkbox';
import Icon from '../../../components/AppIcon';

const ContactInformation = ({ formData, onFormChange, errors }) => {
  const preferredContactMethods = [
    { value: 'email', label: 'Email' },
    { value: 'phone', label: 'Phone Call' },
    { value: 'text', label: 'Text Message' },
    { value: 'any', label: 'Any Method' }
  ];

  const timePreferences = [
    { value: 'morning', label: 'Morning (9 AM - 12 PM)' },
    { value: 'afternoon', label: 'Afternoon (12 PM - 5 PM)' },
    { value: 'evening', label: 'Evening (5 PM - 8 PM)' },
    { value: 'anytime', label: 'Anytime' }
  ];

  const handleInputChange = (field, value) => {
    onFormChange({ ...formData, [field]: value });
  };

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-foreground mb-4">
            Contact Information
          </h2>
          <p className="text-lg text-text-secondary">
            How can we reach you to confirm your consultation?
          </p>
        </div>

        <div className="bg-card rounded-xl p-8 shadow-warm">
          {/* Basic Contact Info */}
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              label="First Name"
              type="text"
              placeholder="Enter your first name"
              value={formData.firstName || ''}
              onChange={(e) => handleInputChange('firstName', e.target.value)}
              error={errors.firstName}
              required
              className="mb-4"
            />

            <Input
              label="Last Name"
              type="text"
              placeholder="Enter your last name"
              value={formData.lastName || ''}
              onChange={(e) => handleInputChange('lastName', e.target.value)}
              error={errors.lastName}
              required
              className="mb-4"
            />

            <Input
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              value={formData.email || ''}
              onChange={(e) => handleInputChange('email', e.target.value)}
              error={errors.email}
              required
              className="mb-4"
            />

            <Input
              label="Phone Number"
              type="tel"
              placeholder="(555) 123-4567"
              value={formData.phone || ''}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              error={errors.phone}
              required
              className="mb-4"
            />
          </div>

          {/* Company/Organization (Optional) */}
          <div className="mt-6">
            <Input
              label="Company/Organization (Optional)"
              type="text"
              placeholder="Enter company name if applicable"
              value={formData.company || ''}
              onChange={(e) => handleInputChange('company', e.target.value)}
              description="For corporate events or if booking on behalf of an organization"
              className="mb-4"
            />
          </div>

          {/* Communication Preferences */}
          <div className="mt-8 grid md:grid-cols-2 gap-6">
            <Select
              label="Preferred Contact Method"
              placeholder="How should we contact you?"
              options={preferredContactMethods}
              value={formData.preferredContact || ''}
              onChange={(value) => handleInputChange('preferredContact', value)}
              error={errors.preferredContact}
              required
              className="mb-4"
            />

            <Select
              label="Best Time to Contact"
              placeholder="When are you available?"
              options={timePreferences}
              value={formData.timePreference || ''}
              onChange={(value) => handleInputChange('timePreference', value)}
              className="mb-4"
            />
          </div>

          {/* How did you hear about us */}
          <div className="mt-6">
            <Input
              label="How did you hear about Zoe Zest? (Optional)"
              type="text"
              placeholder="e.g., Google search, referral, social media"
              value={formData.referralSource || ''}
              onChange={(e) => handleInputChange('referralSource', e.target.value)}
              description="This helps us understand how to better serve our clients"
              className="mb-4"
            />
          </div>

          {/* Consent and Preferences */}
          <div className="mt-8 space-y-4">
            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-playfair font-semibold text-foreground mb-4">
                Communication Preferences
              </h3>
              
              <div className="space-y-4">
                <Checkbox
                  label="Send me consultation reminders via email"
                  description="We'll send you a reminder 24 hours before your consultation"
                  checked={formData.emailReminders || false}
                  onChange={(e) => handleInputChange('emailReminders', e.target.checked)}
                />

                <Checkbox
                  label="Send me consultation reminders via text"
                  description="We'll send you a text reminder 2 hours before your consultation"
                  checked={formData.textReminders || false}
                  onChange={(e) => handleInputChange('textReminders', e.target.checked)}
                />

                <Checkbox
                  label="Subscribe to our newsletter"
                  description="Receive seasonal menu updates, event planning tips, and special offers"
                  checked={formData.newsletter || false}
                  onChange={(e) => handleInputChange('newsletter', e.target.checked)}
                />
              </div>
            </div>

            {/* Required Consent */}
            <div className="border-t border-border pt-6">
              <Checkbox
                label="I agree to the consultation terms and privacy policy"
                description="By booking a consultation, you agree to our terms of service and privacy policy"
                checked={formData.agreeToTerms || false}
                onChange={(e) => handleInputChange('agreeToTerms', e.target.checked)}
                error={errors.agreeToTerms}
                required
              />
            </div>
          </div>

          {/* Contact Information Note */}
          <div className="mt-8 p-4 bg-warm-cream rounded-lg">
            <div className="flex items-start space-x-3">
              <Icon name="Shield" size={20} className="text-accent mt-0.5" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Your Privacy Matters</h4>
                <p className="text-sm text-text-secondary">
                  We respect your privacy and will only use your information to coordinate your consultation 
                  and provide you with the best possible service. We never share your personal information 
                  with third parties.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactInformation;