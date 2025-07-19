import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../components/ui/Header';
import ConsultationHero from './components/ConsultationHero';
import ConsultationTypes from './components/ConsultationTypes';
import BookingCalendar from './components/BookingCalendar';
import EventDetailsForm from './components/EventDetailsForm';
import ContactInformation from './components/ContactInformation';
import BookingSummary from './components/BookingSummary';
import TestimonialsSection from './components/TestimonialsSection';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';

const ConsultationBooking = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(1);
  const [consultationType, setConsultationType] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const steps = [
    { id: 1, name: 'Consultation Type', icon: 'Settings' },
    { id: 2, name: 'Date & Time', icon: 'Calendar' },
    { id: 3, name: 'Event Details', icon: 'PartyPopper' },
    { id: 4, name: 'Contact Info', icon: 'User' },
    { id: 5, name: 'Review & Confirm', icon: 'Check' }
  ];

  // Scroll to top when step changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentStep]);

  const validateStep = (step) => {
    const newErrors = {};

    switch (step) {
      case 1:
        if (!consultationType) {
          newErrors.consultationType = 'Please select a consultation type';
        }
        break;
      case 2:
        if (!selectedDate) {
          newErrors.selectedDate = 'Please select a date';
        }
        if (!selectedTime) {
          newErrors.selectedTime = 'Please select a time';
        }
        break;
      case 3:
        if (!formData.eventType) {
          newErrors.eventType = 'Please select an event type';
        }
        if (!formData.eventDate) {
          newErrors.eventDate = 'Please enter your event date';
        }
        if (!formData.guestCount) {
          newErrors.guestCount = 'Please select guest count';
        }
        break;
      case 4:
        if (!formData.firstName) {
          newErrors.firstName = 'First name is required';
        }
        if (!formData.lastName) {
          newErrors.lastName = 'Last name is required';
        }
        if (!formData.email) {
          newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
          newErrors.email = 'Please enter a valid email';
        }
        if (!formData.phone) {
          newErrors.phone = 'Phone number is required';
        }
        if (!formData.preferredContact) {
          newErrors.preferredContact = 'Please select preferred contact method';
        }
        if (!formData.agreeToTerms) {
          newErrors.agreeToTerms = 'You must agree to the terms to proceed';
        }
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handlePrevStep = () => {
    setCurrentStep(currentStep - 1);
    setErrors({});
  };

  const handleSubmit = async () => {
    if (!validateStep(4)) return;

    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Show success message and redirect
      alert(`Consultation booked successfully!\n\nConfirmation details:\n• Type: ${consultationType}\n• Date: ${selectedDate?.toLocaleDateString()}\n• Time: ${selectedTime}\n• Contact: ${formData.email}\n\nYou'll receive a confirmation email shortly with preparation materials and meeting details.`);
      
      navigate('/homepage');
    } catch (error) {
      alert('There was an error booking your consultation. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <ConsultationTypes
            selectedType={consultationType}
            onTypeSelect={setConsultationType}
          />
        );
      case 2:
        return (
          <BookingCalendar
            selectedDate={selectedDate}
            onDateSelect={setSelectedDate}
            selectedTime={selectedTime}
            onTimeSelect={setSelectedTime}
          />
        );
      case 3:
        return (
          <EventDetailsForm
            formData={formData}
            onFormChange={setFormData}
            errors={errors}
          />
        );
      case 4:
        return (
          <ContactInformation
            formData={formData}
            onFormChange={setFormData}
            errors={errors}
          />
        );
      case 5:
        return (
          <BookingSummary
            consultationType={consultationType}
            selectedDate={selectedDate}
            selectedTime={selectedTime}
            formData={formData}
            onSubmit={handleSubmit}
            isSubmitting={isSubmitting}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section - Only show on first step */}
      {currentStep === 1 && <ConsultationHero />}
      
      {/* Progress Indicator */}
      <div className="sticky top-16 z-40 bg-white/95 backdrop-blur-md border-b border-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div className={`
                    flex items-center justify-center w-8 h-8 rounded-full text-sm font-medium transition-warm
                    ${currentStep >= step.id 
                      ? 'bg-primary text-white' :'bg-muted text-muted-foreground'
                    }
                  `}>
                    {currentStep > step.id ? (
                      <Icon name="Check" size={16} />
                    ) : (
                      <Icon name={step.icon} size={16} />
                    )}
                  </div>
                  
                  <span className={`
                    ml-2 text-sm font-medium hidden sm:inline
                    ${currentStep >= step.id ? 'text-primary' : 'text-muted-foreground'}
                  `}>
                    {step.name}
                  </span>
                  
                  {index < steps.length - 1 && (
                    <div className={`
                      w-8 h-0.5 mx-4 transition-warm
                      ${currentStep > step.id ? 'bg-primary' : 'bg-muted'}
                    `} />
                  )}
                </div>
              ))}
            </div>
            
            <div className="text-sm text-text-secondary">
              Step {currentStep} of {steps.length}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="pt-4">
        {getStepContent()}
        
        {/* Navigation Buttons */}
        {currentStep < 5 && (
          <div className="py-8 bg-background">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center">
                <Button
                  variant="outline"
                  onClick={handlePrevStep}
                  disabled={currentStep === 1}
                  className="flex items-center space-x-2"
                >
                  <Icon name="ChevronLeft" size={16} />
                  <span>Previous</span>
                </Button>
                
                <div className="text-center">
                  <p className="text-sm text-text-secondary">
                    Need help? Call us at{' '}
                    <a href="tel:+1-555-123-4567" className="text-primary hover:underline">
                      (555) 123-4567
                    </a>
                  </p>
                </div>
                
                <Button
                  variant="default"
                  onClick={handleNextStep}
                  className="flex items-center space-x-2"
                >
                  <span>Continue</span>
                  <Icon name="ChevronRight" size={16} />
                </Button>
              </div>
            </div>
          </div>
        )}
        
        {/* Testimonials - Show on steps 2-4 */}
        {currentStep >= 2 && currentStep <= 4 && <TestimonialsSection />}
      </main>

      {/* Footer */}
      <footer className="bg-foreground text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <div className="relative">
                <svg width="32" height="32" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="18" fill="var(--color-primary)" />
                  <path d="M12 20 L20 12 L28 20 L20 28 Z" fill="var(--color-warm-peach)" />
                  <circle cx="20" cy="20" r="4" fill="var(--color-accent)" />
                </svg>
              </div>
              <div>
                <span className="text-lg font-playfair font-bold">Zoe Zest</span>
                <span className="text-sm font-dancing ml-2">Catering</span>
              </div>
            </div>
            
            <p className="text-sm text-gray-400 mb-4">
              Creating unforgettable culinary experiences, one event at a time
            </p>
            
            <div className="flex items-center justify-center space-x-6 text-sm">
              <a href="tel:+1-555-123-4567" className="hover:text-primary transition-warm">
                (555) 123-4567
              </a>
              <a href="mailto:hello@zoezest.com" className="hover:text-primary transition-warm">
                hello@zoezest.com
              </a>
            </div>
            
            <div className="mt-6 pt-4 border-t border-gray-700 text-xs text-gray-500">
              <p>&copy; {new Date().getFullYear()} Zoe Zest Catering. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ConsultationBooking;