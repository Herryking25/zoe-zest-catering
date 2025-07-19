import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import FilterBar from './components/FilterBar';
import FeaturedSection from './components/FeaturedSection';
import GalleryGrid from './components/GalleryGrid';
import KitchenChronicles from './components/KitchenChronicles';
import InspirationBoard from './components/InspirationBoard';
import Button from '../../components/ui/Button';
import Icon from '../../components/AppIcon';

const PortfolioGallery = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('masonry');
  const [savedItems, setSavedItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Mock gallery data
  const galleryItems = [
    {
      id: 1,
      title: "Corporate Annual Gala",
      description: "An elegant evening celebrating company achievements with a sophisticated 5-course tasting menu featuring seasonal ingredients and wine pairings.",
      image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800&h=600&fit=crop",
      category: "corporate",
      guestCount: 250,
      eventDate: "March 15, 2024",
      location: "Downtown Convention Center",
      featured: true,
      tags: ["formal", "wine-pairing", "seasonal", "networking"],
      testimonial: "Zoe Zest transformed our annual gala into an unforgettable culinary experience. Every detail was perfect!",
      clientName: "Sarah Johnson, Event Director"
    },
    {
      id: 2,
      title: "Garden Wedding Reception",
      description: "A romantic outdoor celebration with farm-to-table cuisine, featuring locally sourced ingredients and artisanal presentations in a beautiful garden setting.",
      image: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?w=800&h=600&fit=crop",
      category: "weddings",
      guestCount: 120,
      eventDate: "June 8, 2024",
      location: "Botanical Gardens",
      featured: true,
      tags: ["outdoor", "farm-to-table", "romantic", "garden"],
      testimonial: "Our wedding day was made magical by the incredible food and flawless service. Thank you for making our dreams come true!",
      clientName: "Emma & Michael Thompson"
    },
    {
      id: 3,
      title: "Intimate Birthday Celebration",
      description: "A personalized dining experience for a milestone birthday, featuring the guest of honor's favorite dishes with modern twists and elegant presentation.",
      image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=800&h=600&fit=crop",
      category: "private",
      guestCount: 25,
      eventDate: "April 22, 2024",
      location: "Private Residence",
      featured: false,
      tags: ["intimate", "personalized", "milestone", "family"],
      testimonial: "The attention to detail and personal touches made this birthday celebration truly special.",
      clientName: "Robert Martinez"
    },
    {
      id: 4,
      title: "Autumn Harvest Feast",
      description: "A seasonal celebration showcasing the best of autumn flavors with pumpkin, apple, and root vegetable dishes crafted with artisanal techniques.",
      image: "https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=800&h=600&fit=crop",
      category: "seasonal",
      guestCount: 80,
      eventDate: "October 12, 2024",
      location: "Rustic Barn Venue",
      featured: true,
      tags: ["autumn", "harvest", "seasonal", "rustic"],
      testimonial: "The seasonal menu perfectly captured the essence of autumn. Every bite was a celebration of the season!",
      clientName: "Lisa Chen"
    },
    {
      id: 5,
      title: "Signature Truffle Risotto",
      description: "Our most requested dish featuring Arborio rice slowly cooked to perfection with white truffle oil, parmesan, and fresh herbs.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop",
      category: "signature",
      guestCount: null,
      eventDate: null,
      location: null,
      featured: false,
      tags: ["truffle", "risotto", "signature", "italian"],
      testimonial: "This risotto is absolutely divine! It\'s become our go-to request for every event.",
      clientName: "Various Clients"
    },
    {
      id: 6,
      title: "Tech Startup Launch Party",
      description: "A modern and vibrant celebration for a tech company launch with innovative small plates, molecular gastronomy elements, and interactive food stations.",
      image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
      category: "corporate",
      guestCount: 150,
      eventDate: "May 18, 2024",
      location: "Modern Loft Space",
      featured: false,
      tags: ["modern", "innovative", "tech", "interactive"],
      testimonial: "The creative presentation and innovative dishes perfectly matched our brand\'s forward-thinking approach.",
      clientName: "Alex Rodriguez, CEO"
    },
    {
      id: 7,
      title: "Beachside Wedding Brunch",
      description: "A relaxed yet elegant brunch celebration by the ocean with fresh seafood, tropical fruits, and light Mediterranean-inspired dishes.",
      image: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=800&h=600&fit=crop",
      category: "weddings",
      guestCount: 75,
      eventDate: "July 14, 2024",
      location: "Oceanfront Resort",
      featured: false,
      tags: ["beachside", "brunch", "seafood", "mediterranean"],
      testimonial: "The beachside brunch was absolutely perfect! The fresh seafood and ocean views created the ideal atmosphere.",
      clientName: "Jessica & David Park"
    },
    {
      id: 8,
      title: "Holiday Office Party",
      description: "A festive corporate celebration with traditional holiday flavors reimagined in contemporary presentations, featuring seasonal cocktails and desserts.",
      image: "https://images.unsplash.com/photo-1482275548304-a58859dc31b7?w=800&h=600&fit=crop",
      category: "corporate",
      guestCount: 200,
      eventDate: "December 15, 2023",
      location: "Corporate Headquarters",
      featured: false,
      tags: ["holiday", "festive", "traditional", "corporate"],
      testimonial: "Our team loved the creative take on holiday classics. It brought everyone together beautifully!",
      clientName: "Maria Gonzalez, HR Director"
    },
    {
      id: 9,
      title: "Anniversary Dinner for Two",
      description: "An intimate anniversary celebration with a custom 7-course tasting menu designed around the couple\'s love story and favorite flavors.",
      image: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=800&h=600&fit=crop",
      category: "private",
      guestCount: 2,
      eventDate: "February 14, 2024",
      location: "Private Dining Room",
      featured: false,
      tags: ["anniversary", "intimate", "tasting-menu", "romantic"],
      testimonial: "The personalized menu told our love story through food. It was the most romantic evening we\'ve ever had!",
      clientName: "Amanda & James Wilson"
    },
    {
      id: 10,
      title: "Spring Garden Party",
      description: "A fresh and vibrant spring celebration with edible flowers, light salads, and seasonal vegetables presented in colorful, artistic arrangements.",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&h=600&fit=crop",
      category: "seasonal",
      guestCount: 60,
      eventDate: "April 28, 2024",
      location: "Private Garden",
      featured: false,
      tags: ["spring", "garden", "edible-flowers", "colorful"],
      testimonial: "The spring menu was like eating art! Every dish was beautiful and delicious.",
      clientName: "Catherine Lee"
    },
    {
      id: 11,
      title: "Chocolate Lava Cake Masterpiece",
      description: "Our signature dessert featuring rich Belgian chocolate with a molten center, served with vanilla bean ice cream and berry compote.",
      image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&h=600&fit=crop",
      category: "signature",
      guestCount: null,
      eventDate: null,
      location: null,
      featured: false,
      tags: ["chocolate", "dessert", "signature", "belgian"],
      testimonial: "This dessert is pure perfection! It\'s the highlight of every event we cater.",
      clientName: "Multiple Events"
    },
    {
      id: 12,
      title: "Graduation Celebration Buffet",
      description: "A joyful family celebration with comfort food elevated to gourmet status, featuring crowd-pleasing favorites with sophisticated presentations.",
      image: "https://images.unsplash.com/photo-1555244162-803834f70033?w=800&h=600&fit=crop",
      category: "private",
      guestCount: 45,
      eventDate: "May 25, 2024",
      location: "Family Home",
      featured: false,
      tags: ["graduation", "family", "comfort-food", "celebration"],
      testimonial: "You made our daughter\'s graduation so special! The food was incredible and the service was flawless.",
      clientName: "The Rodriguez Family"
    }
  ];

  // Filter and search functionality
  const filteredItems = galleryItems.filter(item => {
    const matchesFilter = activeFilter === 'all' || item.category === activeFilter;
    const matchesSearch = searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    return matchesFilter && matchesSearch;
  });

  // Featured items
  const featuredItems = galleryItems.filter(item => item.featured);

  // Load saved items from localStorage
  useEffect(() => {
    const saved = localStorage.getItem('zoeZestSavedItems');
    if (saved) {
      setSavedItems(JSON.parse(saved));
    }
    
    // Simulate loading
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  // Save items to localStorage
  useEffect(() => {
    localStorage.setItem('zoeZestSavedItems', JSON.stringify(savedItems));
  }, [savedItems]);

  const handleSaveToBoard = (itemId) => {
    const item = galleryItems.find(item => item.id === itemId);
    if (item) {
      setSavedItems(prev => {
        const isAlreadySaved = prev.some(saved => saved.id === itemId);
        if (isAlreadySaved) {
          return prev.filter(saved => saved.id !== itemId);
        } else {
          return [...prev, item];
        }
      });
    }
  };

  const handleRemoveFromBoard = (itemId) => {
    setSavedItems(prev => prev.filter(item => item.id !== itemId));
  };

  const handleShare = (item) => {
    if (navigator.share) {
      navigator.share({
        title: item.title,
        text: item.description,
        url: window.location.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  const handleViewDetails = (item) => {
    // Mock detail view - in a real app, this would navigate to a detail page
    alert(`Viewing details for: ${item.title}\n\nThis would open a detailed view with more photos, full description, and booking options.`);
  };

  const handleShareBoard = () => {
    alert('Inspiration board shared! Your curated collection has been prepared for sharing with our team.');
  };

  const handleClearBoard = () => {
    if (window.confirm('Are you sure you want to clear your entire inspiration board?')) {
      setSavedItems([]);
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <div className="pt-16 flex items-center justify-center min-h-screen">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading our beautiful gallery...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Portfolio Gallery - Zoe Zest Catering | Culinary Artistry Showcase</title>
        <meta name="description" content="Explore Zoe Zest's portfolio of exceptional catering events. Browse our gallery of corporate events, weddings, private parties, and signature dishes." />
        <meta name="keywords" content="catering portfolio, event gallery, wedding catering, corporate events, signature dishes, food photography" />
      </Helmet>

      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="bg-warm-gradient py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-6xl font-playfair font-bold text-foreground mb-6">
              Our Culinary
              <span className="text-primary block">Portfolio</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
              Discover the artistry and passion behind every Zoe Zest creation. From intimate gatherings to grand celebrations, explore our gallery of unforgettable culinary experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="default"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                onClick={() => window.location.href = '/consultation-booking'}
              >
                Book Your Event
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Download"
                iconPosition="left"
                onClick={() => alert('Portfolio brochure downloaded!')}
              >
                Download Portfolio
              </Button>
            </div>
          </div>
        </section>

        {/* Filter Bar */}
        <FilterBar
          activeFilter={activeFilter}
          onFilterChange={setActiveFilter}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Featured Section */}
          <FeaturedSection
            featuredItems={featuredItems}
            onViewDetails={handleViewDetails}
          />

          {/* Results Count */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-2">
              <Icon name="Image" size={20} className="text-muted-foreground" />
              <span className="text-muted-foreground">
                {filteredItems.length} {filteredItems.length === 1 ? 'item' : 'items'} found
                {searchTerm && ` for "${searchTerm}"`}
              </span>
            </div>
            
            {savedItems.length > 0 && (
              <div className="hidden lg:flex items-center gap-2 text-sm text-muted-foreground">
                <Icon name="Heart" size={16} className="text-primary" />
                <span>{savedItems.length} saved to inspiration board</span>
              </div>
            )}
          </div>

          {/* Gallery Grid */}
          <GalleryGrid
            items={filteredItems}
            viewMode={viewMode}
            onSaveToBoard={handleSaveToBoard}
            onShare={handleShare}
            onViewDetails={handleViewDetails}
          />

          {/* Kitchen Chronicles */}
          {/* <KitchenChronicles /> */}

          {/* Call to Action */}
          <section className="bg-primary text-primary-foreground rounded-2xl p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-playfair font-bold mb-4">
              Ready to Create Your Own Masterpiece?
            </h2>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Let's bring your vision to life with our signature blend of culinary artistry and heartfelt hospitality. Every celebration deserves the Zoe Zest touch.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                size="lg"
                iconName="Calendar"
                iconPosition="left"
                onClick={() => window.location.href = '/consultation-booking'}
              >
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                iconName="Phone"
                iconPosition="left"
                className="border-white text-white hover:bg-white hover:text-primary"
                onClick={() => window.location.href = '/contact-locations'}
              >
                Contact Us Today
              </Button>
            </div>
          </section>
        </div>
      </main>

      {/* Inspiration Board */}
      <InspirationBoard
        savedItems={savedItems}
        onRemoveItem={handleRemoveFromBoard}
        onShareBoard={handleShareBoard}
        onClearBoard={handleClearBoard}
      />
    </div>
  );
};

export default PortfolioGallery;