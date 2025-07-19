import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import Input from '../../../components/ui/Input';

const MenuBuilder = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [guestCount, setGuestCount] = useState('');
  const [dietaryRestrictions, setDietaryRestrictions] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [estimatedCost, setEstimatedCost] = useState(0);

  const categories = [
    { value: 'appetizers', label: 'Appetizers & Small Chops' },
    { value: 'mains', label: 'Main Courses' },
    { value: 'sides', label: 'Side Dishes' },
    { value: 'desserts', label: 'Desserts' },
    { value: 'beverages', label: 'Beverages' }
  ];

  const dietaryOptions = [
    { value: 'vegetarian', label: 'Vegetarian' },
    { value: 'vegan', label: 'Vegan' },
    { value: 'gluten-free', label: 'Gluten-Free' },
    { value: 'dairy-free', label: 'Dairy-Free' },
    { value: 'nut-free', label: 'Nut-Free' },
    { value: 'keto', label: 'Keto-Friendly' }
  ];

  const menuItems = {
    appetizers: [
      { id: 1, name: "Truffle Arancini Balls", price: 4.50, dietary: ['vegetarian'] },
      { id: 2, name: "Smoked Salmon Canapés", price: 5.25, dietary: ['gluten-free'] },
      { id: 3, name: "Mini Beef Wellington", price: 6.75, dietary: [] },
      { id: 4, name: "Stuffed Mushroom Caps", price: 3.95, dietary: ['vegetarian', 'gluten-free'] }
    ],
    mains: [
      { id: 5, name: "Herb-Crusted Salmon", price: 28.50, dietary: ['gluten-free'] },
      { id: 6, name: "Braised Short Ribs", price: 32.75, dietary: [] },
      { id: 7, name: "Quinoa Stuffed Portobello", price: 24.95, dietary: ['vegetarian', 'vegan', 'gluten-free'] },
      { id: 8, name: "Chicken Marsala", price: 26.50, dietary: [] }
    ],
    sides: [
      { id: 9, name: "Roasted Seasonal Vegetables", price: 8.50, dietary: ['vegetarian', 'vegan', 'gluten-free'] },
      { id: 10, name: "Garlic Mashed Potatoes", price: 7.25, dietary: ['vegetarian'] },
      { id: 11, name: "Wild Rice Pilaf", price: 9.75, dietary: ['vegetarian', 'vegan'] }
    ],
    desserts: [
      { id: 12, name: "Chocolate Lava Cake", price: 8.95, dietary: ['vegetarian'] },
      { id: 13, name: "Seasonal Fruit Tart", price: 7.50, dietary: ['vegetarian'] },
      { id: 14, name: "Vegan Coconut Panna Cotta", price: 8.25, dietary: ['vegan', 'dairy-free'] }
    ],
    beverages: [
      { id: 15, name: "Signature Cocktail Package", price: 12.50, dietary: [] },
      { id: 16, name: "Wine Pairing Selection", price: 15.75, dietary: [] },
      { id: 17, name: "Artisan Coffee Service", price: 4.25, dietary: [] }
    ]
  };

  const filteredItems = selectedCategory ? 
    menuItems[selectedCategory]?.filter(item => 
      dietaryRestrictions.length === 0 || 
      dietaryRestrictions.some(restriction => item.dietary.includes(restriction))
    ) || [] : [];

  const addItem = (item) => {
    const existingItem = selectedItems.find(selected => selected.id === item.id);
    if (existingItem) {
      setSelectedItems(selectedItems.map(selected => 
        selected.id === item.id 
          ? { ...selected, quantity: selected.quantity + 1 }
          : selected
      ));
    } else {
      setSelectedItems([...selectedItems, { ...item, quantity: 1 }]);
    }
    updateEstimatedCost();
  };

  const removeItem = (itemId) => {
    setSelectedItems(selectedItems.filter(item => item.id !== itemId));
    updateEstimatedCost();
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity === 0) {
      removeItem(itemId);
    } else {
      setSelectedItems(selectedItems.map(item => 
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      ));
    }
    updateEstimatedCost();
  };

  const updateEstimatedCost = () => {
    const total = selectedItems.reduce((sum, item) => 
      sum + (item.price * item.quantity), 0
    );
    const guests = parseInt(guestCount) || 1;
    setEstimatedCost(total * guests);
  };

  React.useEffect(() => {
    updateEstimatedCost();
  }, [selectedItems, guestCount]);

  return (
    <section className="py-16 bg-warm-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-foreground mb-4">
            Interactive Menu Builder
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Create your perfect menu by selecting items from our curated collection. 
            Get instant pricing estimates and dietary accommodation options.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Menu Selection */}
          <div className="lg:col-span-2 space-y-6">
            {/* Filters */}
            <div className="bg-card rounded-xl p-6 shadow-warm">
              <h3 className="text-xl font-playfair font-bold text-foreground mb-4">
                Customize Your Selection
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <Select
                  label="Menu Category"
                  placeholder="Choose a category"
                  options={categories}
                  value={selectedCategory}
                  onChange={setSelectedCategory}
                />
                
                <Input
                  label="Guest Count"
                  type="number"
                  placeholder="Enter number of guests"
                  value={guestCount}
                  onChange={(e) => setGuestCount(e.target.value)}
                  min="1"
                />
              </div>

              <Select
                label="Dietary Restrictions"
                placeholder="Select dietary needs"
                options={dietaryOptions}
                value={dietaryRestrictions}
                onChange={setDietaryRestrictions}
                multiple
                searchable
                clearable
              />
            </div>

            {/* Menu Items */}
            {selectedCategory && (
              <div className="bg-card rounded-xl p-6 shadow-warm">
                <h3 className="text-xl font-playfair font-bold text-foreground mb-4">
                  Available Items
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {filteredItems.map((item) => (
                    <div
                      key={item.id}
                      className="border border-border rounded-lg p-4 hover:shadow-warm transition-all"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-foreground">{item.name}</h4>
                        <span className="text-primary font-bold">${item.price}</span>
                      </div>
                      
                      {item.dietary.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-3">
                          {item.dietary.map((diet) => (
                            <span
                              key={diet}
                              className="bg-success/10 text-success px-2 py-1 rounded-full text-xs"
                            >
                              {diet}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => addItem(item)}
                        iconName="Plus"
                        iconPosition="left"
                        className="w-full"
                      >
                        Add to Menu
                      </Button>
                    </div>
                  ))}
                </div>
                
                {filteredItems.length === 0 && (
                  <div className="text-center py-8">
                    <Icon name="Search" size={48} className="text-muted-foreground mx-auto mb-4" />
                    <p className="text-muted-foreground">
                      No items match your current filters. Try adjusting your dietary restrictions.
                    </p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Selected Items & Summary */}
          <div className="space-y-6">
            {/* Selected Items */}
            <div className="bg-card rounded-xl p-6 shadow-warm sticky top-4">
              <h3 className="text-xl font-playfair font-bold text-foreground mb-4">
                Your Menu Selection
              </h3>
              
              {selectedItems.length === 0 ? (
                <div className="text-center py-8">
                  <Icon name="ShoppingCart" size={48} className="text-muted-foreground mx-auto mb-4" />
                  <p className="text-muted-foreground">
                    Start building your menu by selecting items from the categories.
                  </p>
                </div>
              ) : (
                <div className="space-y-3">
                  {selectedItems.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-3 bg-muted rounded-lg"
                    >
                      <div className="flex-1">
                        <h4 className="font-medium text-foreground text-sm">{item.name}</h4>
                        <p className="text-muted-foreground text-xs">${item.price} each</p>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 bg-background rounded-full flex items-center justify-center hover:bg-muted-foreground/10 transition-colors"
                        >
                          <Icon name="Minus" size={12} />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 bg-background rounded-full flex items-center justify-center hover:bg-muted-foreground/10 transition-colors"
                        >
                          <Icon name="Plus" size={12} />
                        </button>
                        <button
                          onClick={() => removeItem(item.id)}
                          className="w-6 h-6 text-error hover:bg-error/10 rounded-full flex items-center justify-center transition-colors ml-2"
                        >
                          <Icon name="Trash2" size={12} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Cost Summary */}
              {selectedItems.length > 0 && (
                <div className="border-t border-border pt-4 mt-4">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Items Total:</span>
                      <span className="text-foreground">
                        ${selectedItems.reduce((sum, item) => sum + (item.price * item.quantity), 0).toFixed(2)}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Guests:</span>
                      <span className="text-foreground">{guestCount || 1}</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg border-t border-border pt-2">
                      <span className="text-foreground">Estimated Total:</span>
                      <span className="text-primary">${estimatedCost.toFixed(2)}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 space-y-2">
                    <Button
                      variant="default"
                      size="default"
                      className="w-full"
                      iconName="Calendar"
                      iconPosition="left"
                    >
                      Request Quote
                    </Button>
                    <Button
                      variant="outline"
                      size="default"
                      className="w-full"
                      iconName="Download"
                      iconPosition="left"
                    >
                      Download Menu
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MenuBuilder;