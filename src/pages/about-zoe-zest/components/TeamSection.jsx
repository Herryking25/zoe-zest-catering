import React from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Zoe Martinez",
      role: "Founder & Executive Chef",
      specialty: "Mediterranean & Fusion Cuisine",
      experience: "15+ years",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop",
      bio: "Culinary Institute graduate with a passion for creating memorable dining experiences. Specializes in Mediterranean flavors with modern presentation techniques.",
      philosophy: "Every dish should tell a story and create an emotional connection.",
      certifications: ["Certified Executive Chef", "Food Safety Manager", "Wine Sommelier Level 2"]
    },
    {
      id: 2,
      name: "Marcus Chen",
      role: "Sous Chef",
      specialty: "Asian Fusion & Pastry",
      experience: "8+ years",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bio: "Expert in Asian fusion techniques and artisanal pastry creation. Brings innovative flavor combinations to traditional dishes.",
      philosophy: "Balance is key - in flavors, textures, and presentation.",
      certifications: ["Certified Pastry Chef", "Asian Culinary Arts", "Allergen Management"]
    },
    {
      id: 3,
      name: "Isabella Rodriguez",
      role: "Event Coordinator",
      specialty: "Wedding & Corporate Events",
      experience: "10+ years",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      bio: "Meticulous event planning professional who ensures every detail is perfect. Specializes in large-scale wedding and corporate catering coordination.",
      philosophy: "Flawless execution comes from careful planning and attention to detail.",
      certifications: ["Certified Event Planner", "Wedding Planning Specialist", "Corporate Catering Manager"]
    },
    {
      id: 4,
      name: "David Thompson",
      role: "Head of Service",
      specialty: "Fine Dining Service & Wine",
      experience: "12+ years",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
      bio: "Fine dining service expert with extensive wine knowledge. Trains our service team to deliver exceptional hospitality experiences.",
      philosophy: "Great service is invisible - guests should feel cared for without noticing the effort.",
      certifications: ["Certified Sommelier", "Fine Dining Service", "Hospitality Management"]
    },
    {
      id: 5,
      name: "Sarah Kim",
      role: "Dietary Specialist",
      specialty: "Allergen-Free & Special Diets",
      experience: "6+ years",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop",
      bio: "Nutritionist and chef specializing in allergen-free and special dietary requirements. Ensures everyone can enjoy our culinary creations safely.",
      philosophy: "Dietary restrictions should never mean compromising on flavor or presentation.",
      certifications: ["Registered Dietitian", "Allergen Specialist", "Gluten-Free Culinary Arts"]
    },
    {
      id: 6,
      name: "Antonio Silva",
      role: "Kitchen Manager",
      specialty: "Operations & Food Safety",
      experience: "14+ years",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      bio: "Operations expert who maintains our high standards of food safety and kitchen efficiency. Ensures smooth execution of all events.",
      philosophy: "Excellence in the kitchen starts with organization and unwavering standards.",
      certifications: ["Food Safety Manager", "Kitchen Operations", "HACCP Certified"]
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
            Meet Our Culinary Team
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Behind every exceptional event is a team of passionate professionals dedicated to creating unforgettable culinary experiences.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="bg-white rounded-2xl p-6 shadow-warm hover:shadow-warm-lg transition-warm group">
              {/* Profile Image */}
              <div className="relative mb-6">
                <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4">
                  <Image
                    src={member.image}
                    alt={`${member.name} profile photo`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-warm"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-playfair font-bold text-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-primary font-medium mb-2">{member.role}</p>
                  <div className="flex items-center justify-center space-x-4 text-sm text-text-secondary">
                    <div className="flex items-center space-x-1">
                      <Icon name="Clock" size={14} />
                      <span>{member.experience}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="ChefHat" size={14} />
                      <span>Specialist</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Specialty */}
              <div className="mb-4">
                <div className="bg-accent/10 rounded-lg p-3 text-center">
                  <p className="text-sm font-medium text-accent">{member.specialty}</p>
                </div>
              </div>

              {/* Bio */}
              <div className="mb-4">
                <p className="text-sm text-text-secondary leading-relaxed">
                  {member.bio}
                </p>
              </div>

              {/* Philosophy */}
              <div className="mb-4">
                <blockquote className="text-sm italic text-foreground border-l-2 border-primary pl-3">
                  "{member.philosophy}"
                </blockquote>
              </div>

              {/* Certifications */}
              <div>
                <h4 className="text-sm font-semibold text-foreground mb-2">Certifications:</h4>
                <div className="flex flex-wrap gap-1">
                  {member.certifications.map((cert, index) => (
                    <span
                      key={index}
                      className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Team Stats */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-warm">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="Users" size={24} className="text-primary" />
              </div>
              <p className="text-2xl font-bold text-foreground">12+</p>
              <p className="text-sm text-text-secondary">Team Members</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="Award" size={24} className="text-accent" />
              </div>
              <p className="text-2xl font-bold text-foreground">50+</p>
              <p className="text-sm text-text-secondary">Certifications</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="Clock" size={24} className="text-secondary" />
              </div>
              <p className="text-2xl font-bold text-foreground">120+</p>
              <p className="text-sm text-text-secondary">Years Combined Experience</p>
            </div>
            <div>
              <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                <Icon name="Heart" size={24} className="text-success" />
              </div>
              <p className="text-2xl font-bold text-foreground">1000+</p>
              <p className="text-sm text-text-secondary">Happy Events</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;