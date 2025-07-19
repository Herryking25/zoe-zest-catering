import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import { Checkbox } from '../../../components/ui/Checkbox';

const NewsletterSignup = () => {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    interests: {
      seasonalMenus: false,
      entertainingTips: false,
      exclusiveOffers: false,
      eventInspiration: false,
      behindScenes: false
    },
    frequency: 'weekly'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const benefits = [
    {
      icon: 'Calendar',
      title: 'Seasonal Menu Previews',
      description: 'Be the first to see our new seasonal offerings and limited-time specialties'
    },
    {
      icon: 'Lightbulb',
      title: 'Entertaining Tips',
      description: 'Expert advice on hosting, menu planning, and creating memorable gatherings'
    },
    {
      icon: 'Gift',
      title: 'Exclusive Client Benefits',
      description: 'Special discounts, early booking access, and subscriber-only promotions'
    },
    {
      icon: 'Heart',
      title: 'Event Inspiration',
      description: 'Real client celebrations, trending themes, and creative catering ideas'
    }
  ];

  const frequencyOptions = [
    { value: 'weekly', label: 'Weekly Updates', description: 'Stay current with all our latest news' },
    { value: 'monthly', label: 'Monthly Digest', description: 'Perfect balance of updates and inspiration' },
    { value: 'seasonal', label: 'Seasonal Highlights', description: 'Quarterly updates with major announcements' }
  ];

  const handleInputChange = (field, value) => {
    if (field.includes('.')) {
      const [parent, child] = field.split('.');
      setFormData(prev => ({
        ...prev,
        [parent]: {
          ...prev[parent],
          [child]: value
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [field]: value
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.email || !formData.firstName) {
      alert('Please fill in all required fields');
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubscribed(true);
    } catch (error) {
      alert('There was an error subscribing. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubscribed) {
    return (
      <div className="bg-white rounded-2xl shadow-warm p-6 lg:p-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="CheckCircle" size={32} className="text-success" />
          </div>
          <h3 className="text-2xl font-playfair font-bold text-foreground mb-2">
            Welcome to the Zoe Zest Family!
          </h3>
          <p className="text-text-secondary mb-6">
            Thank you for subscribing! You'll receive your first newsletter within the next few days, 
            packed with seasonal inspiration and exclusive offers.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="p-4 bg-success/5 border border-success/20 rounded-lg">
              <Icon name="Mail" size={24} className="text-success mx-auto mb-2" />
              <h4 className="font-semibold text-foreground mb-1">Check Your Email</h4>
              <p className="text-sm text-text-secondary">
                Confirmation email sent to {formData.email}
              </p>
            </div>
            <div className="p-4 bg-primary/5 border border-primary/20 rounded-lg">
              <Icon name="Gift" size={24} className="text-primary mx-auto mb-2" />
              <h4 className="font-semibold text-foreground mb-1">Welcome Offer</h4>
              <p className="text-sm text-text-secondary">
                10% off your first catering order
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button variant="default" iconName="Calendar" iconPosition="left">
              Book Consultation
            </Button>
            <Button variant="outline" iconName="Share2" iconPosition="left">
              Share with Friends
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-warm p-6 lg:p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
          <Icon name="Mail" size={24} className="text-accent" />
        </div>
        <div>
          <h3 className="text-2xl font-playfair font-bold text-foreground">
            Stay Inspired
          </h3>
          <p className="text-text-secondary">
            Join our newsletter for seasonal menus, entertaining tips, and exclusive offers
          </p>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        {benefits.map((benefit, index) => (
          <div key={index} className="flex items-start space-x-3 p-4 bg-muted/30 rounded-lg">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
              <Icon name={benefit.icon} size={20} className="text-accent" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">{benefit.title}</h4>
              <p className="text-sm text-text-secondary">{benefit.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Subscription Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="First Name"
            type="text"
            value={formData.firstName}
            onChange={(e) => handleInputChange('firstName', e.target.value)}
            required
            placeholder="Enter your first name"
          />
          <Input
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            required
            placeholder="your.email@example.com"
          />
        </div>

        {/* Interest Selection */}
        <div>
          <h4 className="font-semibold text-foreground mb-3">What interests you most?</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Checkbox
              label="Seasonal Menu Previews"
              description="New dishes and limited-time offerings"
              checked={formData.interests.seasonalMenus}
              onChange={(e) => handleInputChange('interests.seasonalMenus', e.target.checked)}
            />
            <Checkbox
              label="Entertaining Tips"
              description="Hosting advice and party planning"
              checked={formData.interests.entertainingTips}
              onChange={(e) => handleInputChange('interests.entertainingTips', e.target.checked)}
            />
            <Checkbox
              label="Exclusive Offers"
              description="Subscriber-only discounts and promotions"
              checked={formData.interests.exclusiveOffers}
              onChange={(e) => handleInputChange('interests.exclusiveOffers', e.target.checked)}
            />
            <Checkbox
              label="Event Inspiration"
              description="Real celebrations and trending themes"
              checked={formData.interests.eventInspiration}
              onChange={(e) => handleInputChange('interests.eventInspiration', e.target.checked)}
            />
          </div>
        </div>

        {/* Frequency Selection */}
        <div>
          <h4 className="font-semibold text-foreground mb-3">How often would you like to hear from us?</h4>
          <div className="space-y-3">
            {frequencyOptions.map((option) => (
              <label key={option.value} className="flex items-start space-x-3 cursor-pointer">
                <input
                  type="radio"
                  name="frequency"
                  value={option.value}
                  checked={formData.frequency === option.value}
                  onChange={(e) => handleInputChange('frequency', e.target.value)}
                  className="mt-1 w-4 h-4 text-primary border-border focus:ring-primary/20"
                />
                <div>
                  <div className="font-medium text-foreground">{option.label}</div>
                  <div className="text-sm text-text-secondary">{option.description}</div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          variant="default"
          size="lg"
          loading={isSubmitting}
          disabled={isSubmitting}
          fullWidth
          iconName="Mail"
          iconPosition="right"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe to Newsletter'}
        </Button>
      </form>

      {/* Privacy Notice */}
      <div className="mt-6 p-4 bg-muted/30 border border-border rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Shield" size={20} className="text-success mt-0.5" />
          <div>
            <h5 className="font-semibold text-foreground mb-1">Privacy Promise</h5>
            <p className="text-sm text-text-secondary">
              We respect your privacy and will never share your information with third parties. 
              You can unsubscribe at any time with one click. Read our full privacy policy for more details.
            </p>
          </div>
        </div>
      </div>

      {/* Social Proof */}
      <div className="mt-6 text-center">
        <div className="flex items-center justify-center space-x-6 text-sm text-text-secondary">
          <div className="flex items-center space-x-2">
            <Icon name="Users" size={16} />
            <span>2,500+ subscribers</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Star" size={16} />
            <span>4.9/5 rating</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Award" size={16} />
            <span>Award-winning content</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;