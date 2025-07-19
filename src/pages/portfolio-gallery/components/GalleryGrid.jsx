import React from 'react';
import GalleryCard from './GalleryCard';

const GalleryGrid = ({ 
  items, 
  viewMode, 
  onSaveToBoard, 
  onShare, 
  onViewDetails 
}) => {
  const getGridClasses = () => {
    switch (viewMode) {
      case 'masonry':
        return 'columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6';
      case 'grid':
        return 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6';
      case 'list':
        return 'grid grid-cols-1 gap-4';
      default:
        return 'columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6';
    }
  };

  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <div className="max-w-md mx-auto">
          <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-12 h-12 text-muted-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
          <h3 className="text-lg font-playfair font-semibold text-foreground mb-2">
            No items found
          </h3>
          <p className="text-muted-foreground">
            Try adjusting your search or filter criteria to find what you're looking for.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className={getGridClasses()}>
      {items.map((item) => (
        <div key={item.id} className={viewMode === 'masonry' ? 'break-inside-avoid' : ''}>
          <GalleryCard
            item={item}
            onSaveToBoard={onSaveToBoard}
            onShare={onShare}
            onViewDetails={onViewDetails}
          />
        </div>
      ))}
    </div>
  );
};

export default GalleryGrid;