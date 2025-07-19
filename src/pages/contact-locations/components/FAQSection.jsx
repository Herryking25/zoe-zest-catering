import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const FAQSection = () => {
  const [openFAQ, setOpenFAQ] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const faqCategories = [
    { id: 'all', label: 'All Questions', icon: 'HelpCircle' },
    { id: 'booking', label: 'Booking & Timeline', icon: 'Calendar' },
    { id: 'payment', label: 'Payment & Pricing', icon: 'CreditCard' },
    { id: 'service', label: 'Service & Delivery', icon: 'Truck' },
    { id: 'dietary', label: 'Dietary & Allergies', icon: 'Utensils' },
    { id: 'policies', label: 'Policies', icon: 'FileText' }
  ];

  const faqs = [
    {
      id: 1,
      category: 'booking',
      question: 'How far in advance should I book my event?',
      answer: `We recommend booking at least 2-3 weeks in advance for smaller events (under 50 guests) and 4-6 weeks for larger celebrations. However, we understand that special occasions sometimes require shorter notice, and we'll do our best to accommodate rush bookings when possible.\n\nFor peak seasons (wedding season, holidays, graduation periods), we suggest booking 2-3 months ahead to ensure availability.`
    },
    {
      id: 2,
      category: 'payment',question: 'What are your payment terms and accepted methods?',
      answer: `We require a 50% deposit to secure your booking, with the remaining balance due 48 hours before your event. We accept:\n\n• Credit cards (Visa, MasterCard, American Express)\n• Bank transfers\n• Business checks (with prior approval)\n• Payment plans available for events over $2,000\n\nAll payments are processed securely through our encrypted payment system.`
    },
    {
      id: 3,
      category: 'policies',question: 'What is your cancellation policy?',
      answer: `Our cancellation policy is designed to be fair while protecting our business:\n\n• 14+ days before event: Full refund minus 10% processing fee\n• 7-13 days before: 50% refund\n• 3-6 days before: 25% refund\n• Less than 72 hours: No refund (deposit retained)\n\nWe understand that emergencies happen, and we'll work with you on a case-by-case basis for extenuating circumstances.`
    },
    {
      id: 4,
      category: 'service',
      question: 'Do you provide serving staff and equipment?',
      answer: `Yes! We offer comprehensive service packages including:\n\n• Professional serving staff (servers, bartenders, event coordinators)\n• Complete table settings (plates, glasses, silverware, linens)\n• Serving equipment (chafing dishes, beverage stations, display pieces)\n• Setup and breakdown services\n\nStaffing ratios are typically 1 server per 15-20 guests for plated service, or 1 per 25-30 for buffet style.`
    },
    {
      id: 5,
      category: 'dietary',
      question: 'Can you accommodate dietary restrictions and allergies?',
      answer: `Absolutely! We specialize in accommodating various dietary needs:\n\n• Vegetarian and vegan options\n• Gluten-free preparations\n• Kosher and Halal requirements\n• Nut-free environments\n• Keto, paleo, and other specialized diets\n\nWe maintain separate preparation areas for allergen-free items and can provide detailed ingredient lists. Please inform us of any restrictions during booking.`
    },
    {
      id: 6,
      category: 'service',
      question: 'What areas do you deliver to?',
      answer: `We provide catering services throughout the metropolitan area:\n\n• Primary zone (0-15 miles): Free delivery\n• Extended zone (16-30 miles): $25-50 delivery fee\n• Premium zone (31-50 miles): $75-150 delivery fee\n\nFor destinations beyond 50 miles, we can arrange special delivery with advance notice. All delivery fees are calculated from our commercial kitchen location.`
    },
    {
      id: 7,
      category: 'booking',
      question: 'Can I schedule a tasting before my event?',
      answer: `Yes! We highly recommend tastings, especially for larger events. Tasting appointments are available:\n\n• Monday-Friday: 10AM-4PM\n• By appointment only\n• $50 tasting fee (credited toward your final bill for bookings over $500)\n• Up to 4 people can attend\n• 2-3 menu items can be sampled\n\nTastings help ensure your menu perfectly matches your vision and dietary preferences.`
    },
    {
      id: 8,
      category: 'payment',
      question: 'Are gratuities included in the pricing?',
      answer: `Service charges and gratuities are handled as follows:\n\n• 18% service charge automatically added to all invoices\n• This covers basic service coordination and administration\n• Additional gratuities for exceptional service are appreciated but not required\n• For events with extensive service staff, gratuity guidelines will be provided\n\nWe believe in transparent pricing, so all fees are clearly outlined in your proposal.`
    },
    {
      id: 9,
      category: 'policies',
      question: 'What happens if there\'s bad weather for outdoor events?',
      answer: `We're experienced with outdoor events and weather contingencies:\n\n• We monitor weather forecasts 48-72 hours before your event\n• Backup plans are discussed during initial planning\n• We can provide tent recommendations and setup coordination\n• Indoor venue alternatives may be suggested\n• No additional charges for reasonable weather-related menu adjustments\n\nOur team is skilled at adapting to changing conditions while maintaining service quality.`
    },
    {
      id: 10,
      category: 'service',question: 'Do you handle setup and cleanup?',
      answer: `Complete setup and cleanup services are included in all our packages:\n\n• Arrival 2-3 hours before service time\n• Full table and buffet setup\n• Food presentation and arrangement\n• Service throughout the event\n• Complete cleanup and removal of all catering items\n• Venue left in original condition\n\nOur team handles everything so you can focus on enjoying your event with your guests.`
    }
  ];

  const filteredFAQs = selectedCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === selectedCategory);

  const toggleFAQ = (faqId) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  return (
    <div className="bg-white rounded-2xl shadow-warm p-6 lg:p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-success/10 rounded-xl flex items-center justify-center">
          <Icon name="HelpCircle" size={24} className="text-success" />
        </div>
        <div>
          <h3 className="text-2xl font-playfair font-bold text-foreground">
            Frequently Asked Questions
          </h3>
          <p className="text-text-secondary">
            Quick answers to common questions about our services
          </p>
        </div>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2 mb-6 pb-4 border-b border-border">
        {faqCategories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`flex items-center space-x-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
              selectedCategory === category.id
                ? 'bg-success text-white shadow-warm'
                : 'text-text-secondary hover:text-success hover:bg-success/10'
            }`}
          >
            <Icon name={category.icon} size={16} />
            <span>{category.label}</span>
          </button>
        ))}
      </div>

      {/* FAQ List */}
      <div className="space-y-4">
        {filteredFAQs.map((faq) => (
          <div
            key={faq.id}
            className={`border rounded-lg transition-all ${
              openFAQ === faq.id
                ? 'border-success bg-success/5 shadow-sm'
                : 'border-border hover:border-success/50'
            }`}
          >
            <button
              onClick={() => toggleFAQ(faq.id)}
              className="w-full flex items-center justify-between p-4 text-left"
            >
              <h4 className="font-semibold text-foreground pr-4">{faq.question}</h4>
              <Icon 
                name={openFAQ === faq.id ? 'ChevronUp' : 'ChevronDown'} 
                size={20} 
                className={`transition-colors ${
                  openFAQ === faq.id ? 'text-success' : 'text-text-secondary'
                }`}
              />
            </button>
            
            {openFAQ === faq.id && (
              <div className="px-4 pb-4">
                <div className="pt-4 border-t border-border">
                  <div className="prose prose-sm max-w-none">
                    {faq.answer.split('\n').map((paragraph, index) => (
                      <p key={index} className="text-text-secondary mb-3 last:mb-0">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Contact for More Questions */}
      <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-xl">
        <div className="text-center">
          <Icon name="MessageSquare" size={32} className="text-primary mx-auto mb-3" />
          <h4 className="text-lg font-playfair font-semibold text-foreground mb-2">
            Still Have Questions?
          </h4>
          <p className="text-text-secondary mb-4">
            Our team is here to help! Contact us directly for personalized answers to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="tel:(555)123-4567"
              className="inline-flex items-center justify-center space-x-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Icon name="Phone" size={16} />
              <span>Call (555) 123-4567</span>
            </a>
            <a
              href="mailto:hello@zoezestcatering.com"
              className="inline-flex items-center justify-center space-x-2 px-4 py-2 border border-primary text-primary rounded-lg hover:bg-primary/10 transition-colors"
            >
              <Icon name="Mail" size={16} />
              <span>Email Us</span>
            </a>
          </div>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center p-4 bg-muted/30 rounded-lg">
          <div className="text-2xl font-bold text-primary">2-4</div>
          <div className="text-sm text-text-secondary">Hours Response Time</div>
        </div>
        <div className="text-center p-4 bg-muted/30 rounded-lg">
          <div className="text-2xl font-bold text-primary">500+</div>
          <div className="text-sm text-text-secondary">Events Catered</div>
        </div>
        <div className="text-center p-4 bg-muted/30 rounded-lg">
          <div className="text-2xl font-bold text-primary">98%</div>
          <div className="text-sm text-text-secondary">Client Satisfaction</div>
        </div>
        <div className="text-center p-4 bg-muted/30 rounded-lg">
          <div className="text-2xl font-bold text-primary">24/7</div>
          <div className="text-sm text-text-secondary">Event Day Support</div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;