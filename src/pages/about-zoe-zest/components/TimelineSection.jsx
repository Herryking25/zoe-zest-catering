import React from 'react';
import Icon from '../../../components/AppIcon';

const TimelineSection = () => {
  const milestones = [
    {
      year: "2009",
      title: "The Beginning",
      description: "Zoe Martinez starts her culinary journey with a small catering business from her home kitchen, focusing on intimate dinner parties for friends and family.",
      icon: "Home",
      achievement: "First 10 clients"
    },
    {
      year: "2012",
      title: "Professional Kitchen",
      description: "Opened our first commercial kitchen facility and hired our first team members. Began specializing in wedding and corporate events.",
      icon: "Building",
      achievement: "Commercial license obtained"
    },
    {
      year: "2015",
      title: "Award Recognition",
      description: "Received \'Best Catering Service\' award from the Local Business Association and expanded our team to 8 professional staff members.",
      icon: "Award",
      achievement: "First major award"
    },
    {
      year: "2018",
      title: "Sustainability Focus",
      description: "Launched our local sourcing initiative, partnering with area farms and implementing comprehensive waste reduction programs.",
      icon: "Leaf",
      achievement: "85% local sourcing achieved"
    },
    {
      year: "2020",
      title: "Adaptation & Growth",
      description: "Successfully adapted to pandemic challenges by launching contactless service options and outdoor event specialization while maintaining safety standards.",
      icon: "Shield",
      achievement: "Zero safety incidents"
    },
    {
      year: "2022",
      title: "Facility Expansion",
      description: "Moved to our current state-of-the-art facility with expanded kitchen capacity, allowing us to serve larger events while maintaining quality.",
      icon: "Zap",
      achievement: "500+ event capacity"
    },
    {
      year: "2024",
      title: "Industry Leadership",
      description: "Recognized as 'Caterer of the Year' and featured in regional culinary publications. Now serving 1000+ events annually with a team of 12 professionals.",
      icon: "Star",
      achievement: "Industry leader status"
    }
  ];

  const awards = [
    {
      year: "2024",
      title: "Caterer of the Year",
      organization: "Regional Culinary Association",
      icon: "Trophy"
    },
    {
      year: "2023",
      title: "Sustainability Excellence Award",
      organization: "Green Business Council",
      icon: "Leaf"
    },
    {
      year: "2022",
      title: "Customer Service Excellence",
      organization: "Business Excellence Awards",
      icon: "Heart"
    },
    {
      year: "2021",
      title: "Innovation in Catering",
      organization: "Food Service Industry Awards",
      icon: "Lightbulb"
    },
    {
      year: "2020",
      title: "Community Service Award",
      organization: "Chamber of Commerce",
      icon: "Users"
    },
    {
      year: "2019",
      title: "Best Wedding Caterer",
      organization: "Wedding Industry Awards",
      icon: "Heart"
    }
  ];

  const communityInvolvement = [
    {
      initiative: "Food Bank Partnership",
      description: "Monthly donations of excess food to local food banks and shelters",
      impact: "2,500+ meals donated annually"
    },
    {
      initiative: "Culinary Scholarships",
      description: "Annual scholarships for aspiring chefs from underserved communities",
      impact: "15 scholarships awarded"
    },
    {
      initiative: "Farm Support Program",
      description: "Direct partnerships with local farms to support sustainable agriculture",
      impact: "25+ local farms supported"
    },
    {
      initiative: "Community Events",
      description: "Pro bono catering for local charity events and fundraisers",
      impact: "50+ charity events supported"
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-playfair font-bold text-foreground mb-6">
            Our Journey
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            From humble beginnings to industry leadership, discover the milestones that have shaped Zoe Zest into the premier catering service we are today.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mb-20">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary/30"></div>

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className={`relative flex items-center ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 bg-primary rounded-full flex items-center justify-center z-10">
                  <Icon name={milestone.icon} size={16} className="text-white" />
                </div>

                {/* Content */}
                <div className={`ml-16 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                }`}>
                  <div className="bg-white rounded-xl p-6 shadow-warm hover:shadow-warm-lg transition-warm">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-2xl font-bold text-primary">{milestone.year}</span>
                      <div className="bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                        {milestone.achievement}
                      </div>
                    </div>
                    <h3 className="text-xl font-playfair font-bold text-foreground mb-3">
                      {milestone.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-foreground mb-4">
              Awards & Recognition
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Our commitment to excellence has been recognized by industry leaders and community organizations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {awards.map((award, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-warm text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Icon name={award.icon} size={24} className="text-primary" />
                </div>
                <div className="text-lg font-bold text-primary mb-1">{award.year}</div>
                <h4 className="font-playfair font-semibold text-foreground mb-2">
                  {award.title}
                </h4>
                <p className="text-sm text-text-secondary">{award.organization}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Community Involvement */}
        <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-warm-lg">
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-foreground mb-4">
              Community Impact
            </h3>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Giving back to our community is at the heart of everything we do. Here's how we're making a difference.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {communityInvolvement.map((initiative, index) => (
              <div key={index} className="flex space-x-4">
                <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Heart" size={24} className="text-success" />
                </div>
                <div>
                  <h4 className="font-playfair font-semibold text-foreground mb-2">
                    {initiative.initiative}
                  </h4>
                  <p className="text-text-secondary mb-2 leading-relaxed">
                    {initiative.description}
                  </p>
                  <div className="bg-success/10 text-success px-3 py-1 rounded-full text-sm font-medium inline-block">
                    {initiative.impact}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 pt-8 border-t border-border">
            <h4 className="text-xl font-playfair font-bold text-foreground mb-4">
              Join Our Journey
            </h4>
            <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
              Be part of our continuing story. Let us create unforgettable culinary experiences for your next special occasion.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-warm">
                Book Your Event
              </button>
              <button className="border border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/10 transition-warm">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;