import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const KitchenChronicles = () => {
  const [activeVideo, setActiveVideo] = useState(null);

  const chronicleItems = [
    {
      id: 1,
      title: "Behind the Scenes: Wedding Feast Preparation",
      description: "Watch our team prepare a 5-course wedding menu for 150 guests, from ingredient selection to final plating.",
      thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      duration: "8:45",
      category: "preparation",
      views: "2.3K",
      date: "2024-07-10"
    },
    {
      id: 2,
      title: "Signature Dish: Truffle Risotto Creation",
      description: "Chef Zoe demonstrates the art of creating our signature truffle risotto, sharing techniques and ingredient secrets.",
      thumbnail: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=600&h=400&fit=crop",
      duration: "12:30",
      category: "technique",
      views: "4.1K",
      date: "2024-07-08"
    },
    {
      id: 3,
      title: "Corporate Event Setup Time-lapse",
      description: "See how we transform a corporate space into an elegant dining experience in just 3 hours.",
      thumbnail: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=600&h=400&fit=crop",
      duration: "5:20",
      category: "setup",
      views: "1.8K",
      date: "2024-07-05"
    },
    {
      id: 4,
      title: "Seasonal Menu Development Process",
      description: "Join us in the kitchen as we develop our autumn menu, testing flavors and perfecting presentations.",
      thumbnail: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=600&h=400&fit=crop",
      duration: "15:12",
      category: "development",
      views: "3.7K",
      date: "2024-07-03"
    },
    {
      id: 5,
      title: "Team Coordination During Rush Service",
      description: "Experience the energy and precision of our kitchen team during peak service for a 200-guest event.",
      thumbnail: "https://images.unsplash.com/photo-1577219491135-ce391730fb2c?w=600&h=400&fit=crop",
      duration: "6:55",
      category: "service",
      views: "2.9K",
      date: "2024-07-01"
    },
    {
      id: 6,
      title: "Dessert Artistry: Wedding Cake Assembly",
      description: "Watch the meticulous process of assembling and decorating a three-tier wedding cake with edible flowers.",
      thumbnail: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&h=400&fit=crop",
      duration: "10:18",
      category: "dessert",
      views: "5.2K",
      date: "2024-06-28"
    }
  ];

  const categories = [
    { id: 'all', label: 'All Videos', icon: 'Play' },
    { id: 'preparation', label: 'Preparation', icon: 'ChefHat' },
    { id: 'technique', label: 'Techniques', icon: 'Utensils' },
    { id: 'setup', label: 'Event Setup', icon: 'Settings' },
    { id: 'development', label: 'Menu Development', icon: 'BookOpen' },
    { id: 'service', label: 'Service', icon: 'Users' },
    { id: 'dessert', label: 'Desserts', icon: 'Cake' }
  ];

  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all' 
    ? chronicleItems 
    : chronicleItems.filter(item => item.category === activeCategory);

  const getCategoryIcon = (category) => {
    const categoryData = categories.find(cat => cat.id === category);
    return categoryData ? categoryData.icon : 'Play';
  };

  return (
    <section className="mb-16">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-playfair font-bold text-foreground mb-2">
          Kitchen Chronicles
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Go behind the scenes and discover the artistry, precision, and passion that goes into every Zoe Zest creation.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <Button
            key={category.id}
            variant={activeCategory === category.id ? 'default' : 'outline'}
            size="sm"
            onClick={() => setActiveCategory(category.id)}
            iconName={category.icon}
            iconPosition="left"
            iconSize={16}
            className="transition-warm"
          >
            {category.label}
          </Button>
        ))}
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-xl overflow-hidden shadow-warm hover:shadow-warm-lg transition-all duration-300 cursor-pointer"
            onClick={() => setActiveVideo(item)}
          >
            <div className="relative overflow-hidden">
              <Image
                src={item.thumbnail}
                alt={item.title}
                className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
              />
              
              {/* Play Overlay */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                  <Icon name="Play" size={24} className="text-primary ml-1" />
                </div>
              </div>

              {/* Duration Badge */}
              <div className="absolute bottom-3 right-3 bg-black/80 text-white px-2 py-1 rounded text-xs font-medium">
                {item.duration}
              </div>

              {/* Category Badge */}
              <div className="absolute top-3 left-3">
                <div className="flex items-center gap-1 bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                  <Icon name={getCategoryIcon(item.category)} size={12} />
                  <span className="capitalize">{item.category}</span>
                </div>
              </div>
            </div>

            <div className="p-4">
              <h3 className="font-playfair text-lg font-semibold text-foreground mb-2 line-clamp-2">
                {item.title}
              </h3>
              
              <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                {item.description}
              </p>

              <div className="flex items-center justify-between text-xs text-muted-foreground">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1">
                    <Icon name="Eye" size={12} />
                    <span>{item.views} views</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Icon name="Calendar" size={12} />
                    <span>{new Date(item.date).toLocaleDateString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Video Modal Placeholder */}
      {activeVideo && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="flex items-center justify-between p-4 border-b border-border">
              <h3 className="font-playfair text-lg font-semibold">
                {activeVideo.title}
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setActiveVideo(null)}
                iconName="X"
                iconSize={20}
              />
            </div>
            
            <div className="p-6 text-center">
              <div className="w-full h-64 bg-muted rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <Icon name="Play" size={48} className="text-muted-foreground mb-2 mx-auto" />
                  <p className="text-muted-foreground">Video Player Placeholder</p>
                  <p className="text-sm text-muted-foreground mt-1">
                    Duration: {activeVideo.duration}
                  </p>
                </div>
              </div>
              
              <p className="text-muted-foreground">
                {activeVideo.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default KitchenChronicles;