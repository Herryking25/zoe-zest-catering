import React from 'react';
import Button from '../../../components/ui/Button';
import Icon from '../../../components/AppIcon';

const FilterBar = ({ 
  activeFilter, 
  onFilterChange, 
  searchTerm, 
  onSearchChange, 
  viewMode, 
  onViewModeChange 
}) => {
  const filterOptions = [
    { id: 'all', label: 'All Events', icon: 'Grid3X3' },
    { id: 'corporate', label: 'Corporate', icon: 'Building2' },
    { id: 'weddings', label: 'Weddings', icon: 'Heart' },
    { id: 'private', label: 'Private Parties', icon: 'Users' },
    { id: 'seasonal', label: 'Seasonal', icon: 'Calendar' },
    { id: 'signature', label: 'Signature Dishes', icon: 'ChefHat' }
  ];

  const viewModes = [
    { id: 'masonry', icon: 'LayoutGrid', label: 'Masonry' },
    { id: 'grid', icon: 'Grid3X3', label: 'Grid' },
    { id: 'list', icon: 'List', label: 'List' }
  ];

  return (
    <div className="bg-white border-b border-border sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        {/* Search Bar */}
        <div className="mb-4">
          <div className="relative max-w-md">
            <Icon 
              name="Search" 
              size={20} 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" 
            />
            <input
              type="text"
              placeholder="Search by event type, dish, or theme..."
              value={searchTerm}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-warm"
            />
          </div>
        </div>

        {/* Filter Buttons and View Mode */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-2">
            {filterOptions.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? 'default' : 'outline'}
                size="sm"
                onClick={() => onFilterChange(filter.id)}
                iconName={filter.icon}
                iconPosition="left"
                iconSize={16}
                className="transition-warm"
              >
                {filter.label}
              </Button>
            ))}
          </div>

          {/* View Mode Toggle */}
          <div className="flex items-center gap-2">
            <span className="text-sm text-muted-foreground mr-2">View:</span>
            {viewModes.map((mode) => (
              <Button
                key={mode.id}
                variant={viewMode === mode.id ? 'default' : 'ghost'}
                size="sm"
                onClick={() => onViewModeChange(mode.id)}
                iconName={mode.icon}
                iconSize={16}
                className="transition-warm"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;