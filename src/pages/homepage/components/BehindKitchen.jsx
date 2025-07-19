import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const BehindKitchen = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const kitchenHighlights = [
    {
      icon: "Heart",
      title: "Passion-Driven",
      description: "Every dish is crafted with love and attention to detail"
    },
    {
      icon: "Leaf",
      title: "Fresh Ingredients",
      description: "Locally sourced, seasonal ingredients for optimal flavor"
    },
    {
      icon: "Award",
      title: "Award-Winning",
      description: "Recognized for culinary excellence and innovation"
    },
    {
      icon: "Users",
      title: "Expert Team",
      description: "Skilled chefs and service staff dedicated to perfection"
    }
  ];

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div className="space-y-8">
            <div>
              <div className="flex items-center mb-4">
                <Icon name="ChefHat" size={24} className="text-accent mr-2" />
                <span className="text-accent font-medium">Meet Zoe</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-foreground mb-6">
                Behind the Kitchen
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Welcome to the heart of Zoe Zest Catering, where culinary artistry meets heartfelt hospitality. 
                I'm Zoe, and my journey began in my grandmother's kitchen, where I learned that food is the 
                universal language of love and celebration.
              </p>
            </div>

            <div className="space-y-6">
              <p className="text-foreground leading-relaxed">
                With over 15 years of culinary experience and a passion for creating memorable dining experiences, 
                I founded Zoe Zest to bring elevated comfort food to your most cherished celebrations. Our philosophy 
                is simple: every bite should tell a story, and every event should be an unforgettable journey.
              </p>

              <div className="bg-warm-cream p-6 rounded-xl border-l-4 border-accent">
                <p className="text-foreground font-medium italic">
                  "Cooking is not just about feeding people; it's about creating moments of joy, 
                  connection, and celebration that last a lifetime."
                </p>
                <div className="flex items-center mt-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center mr-3">
                    <span className="text-white font-dancing text-xl">Z</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">Zoe Martinez</p>
                    <p className="text-sm text-muted-foreground">Founder & Head Chef</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Kitchen Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {kitchenHighlights.map((highlight, index) => (
                <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-lg shadow-soft">
                  <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Icon name={highlight.icon} size={20} className="text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">{highlight.title}</h4>
                    <p className="text-sm text-muted-foreground">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                variant="default" 
                size="lg"
                className="shadow-warm"
                asChild
              >
                <Link to="/about-zoe-zest">
                  <Icon name="User" size={18} className="mr-2" />
                  Learn More About Zoe
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg"
                asChild
              >
                <Link to="/portfolio-gallery">
                  <Icon name="Image" size={18} className="mr-2" />
                  View Our Work
                </Link>
              </Button>
            </div>
          </div>

          {/* Video/Image Side */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-warm-lg">
              {!isVideoPlaying ? (
                <>
                  <Image
                    src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                    alt="Zoe in the kitchen preparing dishes"
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <button
                      onClick={handleVideoPlay}
                      className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 group"
                      aria-label="Play video"
                    >
                      <Icon 
                        name="Play" 
                        size={32} 
                        className="text-primary ml-1 group-hover:scale-110 transition-transform duration-300" 
                      />
                    </button>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                      <p className="text-sm font-medium text-gray-800">
                        Watch: A Day in Zoe's Kitchen
                      </p>
                      <p className="text-xs text-gray-600 mt-1">
                        See how we prepare for your special events
                      </p>
                    </div>
                  </div>
                </>
              ) : (
                <div className="w-full h-96 bg-gray-900 flex items-center justify-center">
                  <div className="text-center text-white">
                    <Icon name="Play" size={48} className="mx-auto mb-4 opacity-50" />
                    <p className="text-lg font-medium">Video Player</p>
                    <p className="text-sm opacity-75">Kitchen tour and chef story</p>
                  </div>
                </div>
              )}
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-warm p-6 hidden sm:block">
              <div className="text-center">
                <div className="text-2xl font-playfair font-bold text-primary mb-1">15+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>

            <div className="absolute -top-6 -left-6 bg-accent text-white rounded-xl shadow-warm p-4 hidden sm:block">
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={20} />
                <span className="text-sm font-medium">Award Winner</span>
              </div>
            </div>
          </div>
        </div>

        {/* Kitchen Philosophy */}
        <div className="mt-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-3xl font-playfair font-bold text-foreground mb-6">
              Our Kitchen Philosophy
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Sparkles" size={24} className="text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground">Quality First</h4>
                <p className="text-muted-foreground">
                  We source only the finest ingredients and never compromise on quality, 
                  ensuring every dish meets our exacting standards.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Heart" size={24} className="text-accent" />
                </div>
                <h4 className="text-xl font-semibold text-foreground">Made with Love</h4>
                <p className="text-muted-foreground">
                  Every dish is prepared with genuine care and attention, 
                  infusing each bite with the warmth of home-cooked goodness.
                </p>
              </div>
              
              <div className="space-y-4">
                <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto">
                  <Icon name="Users" size={24} className="text-secondary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground">Community Focused</h4>
                <p className="text-muted-foreground">
                  We believe in supporting local farmers and suppliers, 
                  creating a positive impact in our community through our choices.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BehindKitchen;