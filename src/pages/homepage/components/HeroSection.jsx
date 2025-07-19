import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      id: 1,
      image: "https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      title: "Every bite tells a story",
      subtitle: "Crafted with care, served with heart",
      description: "Transform your celebrations into unforgettable culinary experiences with our signature elevated comfort cuisine."
    },
    {
      id: 2,
      image: "https://i.pinimg.com/736x/f3/7b/75/f37b7570ab6da074791f289dd5a0221c.jpg",
      title: "Seasonal Specialties",
      subtitle: "Fresh ingredients, timeless techniques",
      description: "Discover our rotating seasonal menu featuring locally sourced ingredients and innovative flavor combinations."
    },
    {
      id: 3,
      image: "https://i.pinimg.com/1200x/78/b5/6f/78b56f56936ca407b2cf3e67574530c1.jpg",
      title: "Signature Small Chops",
      subtitle: "Elevated appetizers for every occasion",
      description: "Our curated collection of small chops brings sophistication to intimate gatherings and grand celebrations alike."
    },
    {
      id: 4,
      image: "https://i.pinimg.com/1200x/6d/4e/81/6d4e8161e4e1f98c701208b8e4f20063.jpg",
      title: "Making Events Memorable",
      subtitle: "Full-service event catering with a personal touch",
      description: "From weddings to corporate functions, Zoe Zest delivers seamless catering experiences that leave lasting impressions. We handle the food so you can focus on the moments that matter."
    },
  ];


  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [heroSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <section className="relative h-screen overflow-hidden bg-gradient-to-br from-warm-cream to-background">
      {/* Background Slides */}
      <div className="absolute inset-0">
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <Image
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 h-full flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="space-y-6 text-white">
              <div className="space-y-2">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-playfair font-bold leading-tight">
                  {heroSlides[currentSlide].title}
                </h1>
                <p className="text-xl sm:text-2xl font-dancing text-warm-peach">
                  {heroSlides[currentSlide].subtitle}
                </p>
              </div>
              
              <p className="text-lg sm:text-xl text-gray-200 max-w-2xl leading-relaxed">
                {heroSlides[currentSlide].description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  variant="default" 
                  size="lg"
                  className="shadow-warm-lg hover:shadow-warm text-lg px-8 py-4"
                  asChild
                >
                  <Link to="/consultation-booking">
                    <Icon name="Calendar" size={20} className="mr-2 " />
                    Book Consultation
                  </Link>
                </Button>
                
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4"
                  asChild
                >
                  <Link to="/portfolio-gallery">
                    <Icon name="Image" size={20} className="mr-2" />
                    View Portfolio
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex items-center space-x-4">
          <button
            onClick={prevSlide}
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
            aria-label="Previous slide"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>
          
          <div className="flex space-x-2">
            {heroSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-white scale-125' :'bg-white/50 hover:bg-white/70'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
          
          <button
            onClick={nextSlide}
            className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300"
            aria-label="Next slide"
          >
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 z-30">
        <div className="flex flex-col items-center space-y-2 text-white">
          <span className="text-sm font-medium">Scroll</span>
          <div className="w-px h-12 bg-white/50 relative">
            <div className="absolute top-0 w-px h-6 bg-white animate-pulse" />
          </div>
          <Icon name="ChevronDown" size={16} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;