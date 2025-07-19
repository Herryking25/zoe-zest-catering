import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';


const TeamDirectory = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  const teamMembers = [
    {
      id: 'zoe',
      name: 'Zoe Martinez',
      role: 'Founder & Executive Chef',
      email: 'zoe@zoezestcatering.com',
      phone: '(555) 123-4567',
      extension: '101',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b9e0b434?w=400&h=400&fit=crop&crop=face',
      specialties: ['Menu Development', 'Wedding Catering', 'Corporate Events'],
      availability: 'Mon-Fri 8AM-6PM',
      bio: `Zoe brings over 15 years of culinary expertise to every event. Her passion for creating memorable dining experiences has made Zoe Zest the premier catering choice for discerning clients throughout the region.`,
      languages: ['English', 'Spanish'],
      certifications: ['ServSafe Certified', 'Culinary Arts Degree']
    },
    {
      id: 'sarah',
      name: 'Sarah Chen',
      role: 'Event Coordinator',
      email: 'sarah@zoezestcatering.com',
      phone: '(555) 123-4567',
      extension: '102',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
      specialties: ['Event Planning', 'Client Relations', 'Timeline Management'],
      availability: 'Mon-Sat 9AM-7PM',
      bio: `Sarah ensures every event runs seamlessly from initial consultation to final cleanup. Her attention to detail and proactive communication style keeps clients informed and stress-free.`,
      languages: ['English', 'Mandarin'],
      certifications: ['Certified Meeting Professional', 'Event Planning Certificate']
    },
    {
      id: 'marcus',
      name: 'Marcus Thompson',
      role: 'Operations Manager',
      email: 'marcus@zoezestcatering.com',
      phone: '(555) 123-4567',
      extension: '103',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
      specialties: ['Logistics', 'Staff Management', 'Quality Control'],
      availability: 'Mon-Sun 6AM-10PM',
      bio: `Marcus oversees all operational aspects of our catering services. His background in hospitality management ensures every event is executed with precision and professionalism.`,
      languages: ['English'],
      certifications: ['Food Safety Manager', 'Hospitality Management Degree']
    },
    {
      id: 'elena',
      name: 'Elena Rodriguez',
      role: 'Customer Success Manager',
      email: 'elena@zoezestcatering.com',
      phone: '(555) 123-4567',
      extension: '104',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face',
      specialties: ['Client Support', 'Billing Inquiries', 'Follow-up Services'],
      availability: 'Mon-Fri 8AM-5PM',
      bio: `Elena is your go-to person for all post-event needs and ongoing support. She ensures every client relationship continues to flourish long after the last bite is served.`,
      languages: ['English', 'Spanish'],
      certifications: ['Customer Success Certification', 'Business Administration']
    }
  ];

  const emergencyContacts = [
    {
      title: 'Day-of-Event Emergency',
      phone: '(555) 911-CATER',
      description: 'Available during event hours for urgent matters',
      hours: 'Event days only'
    },
    {
      title: 'After-Hours Support',
      phone: '(555) 123-4567',
      description: 'Press 9 for emergency support',
      hours: '24/7 for existing bookings'
    }
  ];

  const handleContactMember = (member, method) => {
    if (method === 'email') {
      window.location.href = `mailto:${member.email}`;
    } else if (method === 'phone') {
      window.location.href = `tel:${member.phone}`;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-warm p-6 lg:p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center">
          <Icon name="Users" size={24} className="text-secondary" />
        </div>
        <div>
          <h3 className="text-2xl font-playfair font-bold text-foreground">
            Meet Our Team
          </h3>
          <p className="text-text-secondary">
            Direct access to the people who make your events exceptional
          </p>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className={`border rounded-xl p-6 transition-all cursor-pointer ${
              selectedMember === member.id
                ? 'border-primary bg-primary/5 shadow-warm'
                : 'border-border hover:border-accent hover:shadow-sm'
            }`}
            onClick={() => setSelectedMember(selectedMember === member.id ? null : member.id)}
          >
            <div className="flex items-start space-x-4">
              <div className="relative">
                <Image
                  src={member.avatar}
                  alt={member.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-success rounded-full border-2 border-white" />
              </div>
              
              <div className="flex-1">
                <h4 className="font-semibold text-foreground">{member.name}</h4>
                <p className="text-sm text-accent font-medium">{member.role}</p>
                <p className="text-xs text-text-secondary mt-1">{member.availability}</p>
                
                <div className="flex items-center space-x-4 mt-3">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleContactMember(member, 'email');
                    }}
                    className="flex items-center space-x-1 text-sm text-primary hover:text-accent transition-colors"
                  >
                    <Icon name="Mail" size={14} />
                    <span>Email</span>
                  </button>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      handleContactMember(member, 'phone');
                    }}
                    className="flex items-center space-x-1 text-sm text-primary hover:text-accent transition-colors"
                  >
                    <Icon name="Phone" size={14} />
                    <span>Call</span>
                  </button>
                </div>
              </div>
              
              <Icon 
                name={selectedMember === member.id ? 'ChevronUp' : 'ChevronDown'} 
                size={20} 
                className="text-text-secondary" 
              />
            </div>

            {/* Expanded Details */}
            {selectedMember === member.id && (
              <div className="mt-6 pt-6 border-t border-border space-y-4">
                <div>
                  <p className="text-sm text-text-secondary leading-relaxed">{member.bio}</p>
                </div>
                
                <div>
                  <h5 className="text-sm font-semibold text-foreground mb-2">Specialties</h5>
                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((specialty, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-2">Contact Details</h5>
                    <div className="space-y-1 text-sm text-text-secondary">
                      <div className="flex items-center space-x-2">
                        <Icon name="Mail" size={14} />
                        <span>{member.email}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Icon name="Phone" size={14} />
                        <span>{member.phone} ext. {member.extension}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h5 className="text-sm font-semibold text-foreground mb-2">Languages</h5>
                    <div className="flex flex-wrap gap-1">
                      {member.languages.map((language, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2 py-1 rounded text-xs bg-muted text-foreground"
                        >
                          {language}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Emergency Contacts */}
      <div className="border-t border-border pt-6">
        <h4 className="text-lg font-playfair font-semibold text-foreground mb-4 flex items-center space-x-2">
          <Icon name="AlertCircle" size={20} className="text-error" />
          <span>Emergency Support</span>
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {emergencyContacts.map((contact, index) => (
            <div key={index} className="p-4 bg-error/5 border border-error/20 rounded-lg">
              <div className="flex items-start space-x-3">
                <div className="w-8 h-8 bg-error/10 rounded-lg flex items-center justify-center">
                  <Icon name="Phone" size={16} className="text-error" />
                </div>
                <div className="flex-1">
                  <h5 className="font-semibold text-foreground">{contact.title}</h5>
                  <p className="text-sm text-text-secondary mb-2">{contact.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-mono text-error">{contact.phone}</span>
                    <span className="text-xs text-text-secondary">{contact.hours}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Response Time Commitment */}
      <div className="mt-6 p-4 bg-success/5 border border-success/20 rounded-lg">
        <div className="flex items-start space-x-3">
          <Icon name="Clock" size={20} className="text-success mt-0.5" />
          <div>
            <h5 className="font-semibold text-foreground mb-2">Our Response Commitment</h5>
            <ul className="text-sm text-text-secondary space-y-1">
              <li>• New event inquiries: Response within 4 hours</li>
              <li>• Existing booking questions: Response within 2 hours</li>
              <li>• General inquiries: Response within 24 hours</li>
              <li>• Emergency support: Immediate response during event hours</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamDirectory;