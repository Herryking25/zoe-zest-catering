import React, { useState } from 'react';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const InspirationBoard = ({ savedItems, onRemoveItem, onShareBoard, onClearBoard }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (savedItems.length === 0) {
    return (
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          variant="default"
          size="lg"
          onClick={() => setIsOpen(true)}
          iconName="Heart"
          iconPosition="left"
          className="shadow-warm-lg"
        >
          Inspiration Board (0)
        </Button>
      </div>
    );
  }

  return (
    <>
      {/* Floating Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <Button
          variant="default"
          size="lg"
          onClick={() => setIsOpen(true)}
          iconName="Heart"
          iconPosition="left"
          className="shadow-warm-lg relative"
        >
          Inspiration Board ({savedItems.length})
          {savedItems.length > 0 && (
            <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full w-6 h-6 flex items-center justify-center">
              {savedItems.length}
            </span>
          )}
        </Button>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div>
                <h2 className="text-2xl font-playfair font-bold text-foreground">
                  My Inspiration Board
                </h2>
                <p className="text-muted-foreground mt-1">
                  {savedItems.length} saved {savedItems.length === 1 ? 'item' : 'items'}
                </p>
              </div>
              
              <div className="flex items-center gap-2">
                {savedItems.length > 0 && (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={onShareBoard}
                      iconName="Share2"
                      iconPosition="left"
                      iconSize={16}
                    >
                      Share Board
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={onClearBoard}
                      iconName="Trash2"
                      iconPosition="left"
                      iconSize={16}
                    >
                      Clear All
                    </Button>
                  </>
                )}
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsOpen(false)}
                  iconName="X"
                  iconSize={20}
                />
              </div>
            </div>

            {/* Content */}
            <div className="p-6 max-h-[calc(90vh-120px)] overflow-y-auto">
              {savedItems.length === 0 ? (
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Heart" size={32} className="text-muted-foreground" />
                  </div>
                  <h3 className="text-lg font-playfair font-semibold text-foreground mb-2">
                    No saved items yet
                  </h3>
                  <p className="text-muted-foreground">
                    Start building your inspiration board by saving your favorite images from our gallery.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {savedItems.map((item) => (
                    <div
                      key={item.id}
                      className="group relative bg-white rounded-lg overflow-hidden shadow-warm hover:shadow-warm-lg transition-all duration-300"
                    >
                      <div className="relative overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.title}
                          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                        />
                        
                        {/* Remove Button */}
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => onRemoveItem(item.id)}
                          className="absolute top-2 right-2 bg-white/90 hover:bg-white text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          iconName="X"
                          iconSize={16}
                        />

                        {/* Category Badge */}
                        <div className="absolute top-2 left-2">
                          <span className="bg-primary text-primary-foreground px-2 py-1 rounded-full text-xs font-medium">
                            {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                          </span>
                        </div>
                      </div>

                      <div className="p-3">
                        <h4 className="font-playfair text-sm font-semibold text-foreground mb-1 line-clamp-1">
                          {item.title}
                        </h4>
                        <p className="text-xs text-muted-foreground line-clamp-2">
                          {item.description}
                        </p>
                        
                        {item.guestCount && (
                          <div className="flex items-center gap-1 mt-2">
                            <Icon name="Users" size={12} className="text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">
                              {item.guestCount} guests
                            </span>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {savedItems.length > 0 && (
              <div className="border-t border-border p-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="default"
                    fullWidth
                    iconName="Calendar"
                    iconPosition="left"
                    onClick={() => {
                      setIsOpen(false);
                      // Navigate to consultation booking
                      window.location.href = '/consultation-booking';
                    }}
                  >
                    Book Consultation with These Ideas
                  </Button>
                  <Button
                    variant="outline"
                    fullWidth
                    iconName="Download"
                    iconPosition="left"
                    onClick={() => {
                      // Mock download functionality
                      alert('Inspiration board downloaded! Check your downloads folder.');
                    }}
                  >
                    Download Board
                  </Button>
                </div>
                
                <p className="text-xs text-muted-foreground text-center mt-3">
                  Share your inspiration board with our team during your consultation for personalized recommendations.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default InspirationBoard;