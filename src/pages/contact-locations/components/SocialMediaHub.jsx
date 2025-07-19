import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const SocialMediaHub = () => {
  const [selectedPlatform, setSelectedPlatform] = useState('instagram');

  const socialPlatforms = [
    {
      id: 'instagram',
      name: 'Instagram',
      handle: '@zoezestcatering',
      followers: '12.5K',
      icon: 'Instagram',
      color: 'bg-gradient-to-r from-purple-500 to-pink-500',
      description: 'Behind-the-scenes kitchen moments and stunning food photography'
    },
    {
      id: 'facebook',
      name: 'Facebook',
      handle: 'Zoe Zest Catering',
      followers: '8.2K',
      icon: 'Facebook',
      color: 'bg-blue-600',
      description: 'Event updates, client testimonials, and community engagement'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      handle: 'Zoe Zest Catering',
      followers: '3.1K',
      icon: 'Linkedin',
      color: 'bg-blue-700',
      description: 'Corporate catering insights and industry thought leadership'
    },
    {
      id: 'tiktok',
      name: 'TikTok',
      handle: '@zoezestcatering',
      followers: '5.8K',
      icon: 'Music',
      color: 'bg-black',
      description: 'Quick cooking tips and fun kitchen moments'
    }
  ];

  const recentPosts = {
    instagram: [
      {
        id: 1,
        image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=400&h=400&fit=crop',
        caption: 'Fresh seasonal ingredients arriving for this weekend\'s wedding celebration! 🌿✨',
        likes: 234,
        comments: 18,
        timeAgo: '2 hours ago'
      },
      {
        id: 2,
        image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=400&h=400&fit=crop',
        caption: 'Behind the scenes: Our team preparing for a 200-guest corporate event 👨‍🍳',
        likes: 189,
        comments: 12,
        timeAgo: '1 day ago'
      },
      {
        id: 3,
        image: 'https://images.unsplash.com/photo-1551218808-94e220e084d2?w=400&h=400&fit=crop',
        caption: 'Signature appetizer platter ready for tonight\'s anniversary celebration 🥂',
        likes: 312,
        comments: 25,
        timeAgo: '2 days ago'
      }
    ],
    facebook: [
      {
        id: 1,
        image: 'https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=400&h=400&fit=crop',
        caption: 'Thank you to the Johnson family for trusting us with their daughter\'s graduation party! It was an honor to be part of such a special celebration.',
        likes: 67,
        comments: 8,
        timeAgo: '3 hours ago'
      },
      {
        id: 2,
        image: 'https://images.unsplash.com/photo-1555244162-803834f70033?w=400&h=400&fit=crop',
        caption: 'New seasonal menu items now available! Contact us to schedule a tasting and discover our latest culinary creations.',
        likes: 45,
        comments: 6,
        timeAgo: '1 day ago'
      }
    ],
    linkedin: [
      {
        id: 1,
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop',
        caption: 'The importance of sustainable sourcing in corporate catering: How we\'re reducing our environmental impact while maintaining exceptional quality.',
        likes: 23,
        comments: 4,
        timeAgo: '4 hours ago'
      }
    ],
    tiktok: [
      {
        id: 1,
        image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&h=400&fit=crop',
        caption: 'POV: You\'re prepping 500 canapés for tonight\'s event 🏃‍♀️💨 #cateringlife #eventprep',
        likes: 1200,
        comments: 89,
        timeAgo: '6 hours ago'
      }
    ]
  };

  const handlePlatformClick = (platformId) => {
    const platform = socialPlatforms.find(p => p.id === platformId);
    const urls = {
      instagram: 'https://instagram.com/zoezestcatering',
      facebook: 'https://facebook.com/zoezestcatering',
      linkedin: 'https://linkedin.com/company/zoezestcatering',
      tiktok: 'https://tiktok.com/@zoezestcatering'
    };
    window.open(urls[platformId], '_blank');
  };

  const handleDirectMessage = () => {
    const platform = socialPlatforms.find(p => p.id === selectedPlatform);
    alert(`Direct messaging feature would open ${platform.name} messenger`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-warm p-6 lg:p-8">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center">
          <Icon name="Share2" size={24} className="text-accent" />
        </div>
        <div>
          <h3 className="text-2xl font-playfair font-bold text-foreground">
            Follow Our Journey
          </h3>
          <p className="text-text-secondary">
            Stay connected with our latest events and culinary creations
          </p>
        </div>
      </div>

      {/* Platform Selection */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
        {socialPlatforms.map((platform) => (
          <button
            key={platform.id}
            onClick={() => setSelectedPlatform(platform.id)}
            className={`p-4 rounded-xl border-2 transition-all ${
              selectedPlatform === platform.id
                ? 'border-primary bg-primary/5 shadow-warm'
                : 'border-border hover:border-accent hover:shadow-sm'
            }`}
          >
            <div className={`w-12 h-12 ${platform.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
              <Icon name={platform.icon} size={24} className="text-white" />
            </div>
            <h4 className="font-semibold text-foreground text-sm">{platform.name}</h4>
            <p className="text-xs text-text-secondary mt-1">{platform.followers} followers</p>
          </button>
        ))}
      </div>

      {/* Selected Platform Details */}
      <div className="mb-6">
        {socialPlatforms.map((platform) => (
          selectedPlatform === platform.id && (
            <div key={platform.id} className="bg-muted/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center space-x-3">
                  <div className={`w-10 h-10 ${platform.color} rounded-lg flex items-center justify-center`}>
                    <Icon name={platform.icon} size={20} className="text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{platform.handle}</h4>
                    <p className="text-sm text-text-secondary">{platform.followers} followers</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handlePlatformClick(platform.id)}
                    iconName="ExternalLink"
                    iconPosition="right"
                  >
                    Visit
                  </Button>
                  <Button
                    variant="default"
                    size="sm"
                    onClick={handleDirectMessage}
                    iconName="MessageCircle"
                    iconPosition="left"
                  >
                    Message
                  </Button>
                </div>
              </div>
              <p className="text-sm text-text-secondary">{platform.description}</p>
            </div>
          )
        ))}
      </div>

      {/* Recent Posts */}
      <div>
        <h4 className="text-lg font-semibold text-foreground mb-4 flex items-center space-x-2">
          <Icon name="Image" size={20} />
          <span>Recent Posts</span>
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {recentPosts[selectedPlatform]?.map((post) => (
            <div key={post.id} className="border border-border rounded-lg overflow-hidden hover:shadow-sm transition-shadow">
              <div className="aspect-square overflow-hidden">
                <Image
                  src={post.image}
                  alt="Social media post"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-4">
                <p className="text-sm text-foreground mb-3 line-clamp-3">{post.caption}</p>
                <div className="flex items-center justify-between text-xs text-text-secondary">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Icon name="Heart" size={14} />
                      <span>{post.likes}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Icon name="MessageCircle" size={14} />
                      <span>{post.comments}</span>
                    </div>
                  </div>
                  <span>{post.timeAgo}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Social Media CTA */}
      <div className="mt-8 p-6 bg-gradient-to-r from-primary/5 to-accent/5 border border-primary/20 rounded-xl">
        <div className="text-center">
          <h4 className="text-lg font-playfair font-semibold text-foreground mb-2">
            Join Our Community
          </h4>
          <p className="text-text-secondary mb-4">
            Follow us for daily inspiration, behind-the-scenes content, and exclusive offers
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {socialPlatforms.map((platform) => (
              <Button
                key={platform.id}
                variant="outline"
                size="sm"
                onClick={() => handlePlatformClick(platform.id)}
                iconName={platform.icon}
                iconPosition="left"
              >
                Follow on {platform.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* Hashtags */}
      <div className="mt-6 text-center">
        <p className="text-sm text-text-secondary mb-2">Tag us in your posts!</p>
        <div className="flex flex-wrap justify-center gap-2">
          {['#ZoeZestCatering', '#CulinaryArtistry', '#EventCatering', '#FoodieLife', '#CelebrationFood'].map((hashtag, index) => (
            <span
              key={index}
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-accent/10 text-accent hover:bg-accent/20 transition-colors cursor-pointer"
            >
              {hashtag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SocialMediaHub;