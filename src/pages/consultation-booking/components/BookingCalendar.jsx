import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const BookingCalendar = ({ selectedDate, onDateSelect, selectedTime, onTimeSelect }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  // Generate calendar days for current month
  const generateCalendarDays = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
    
    const days = [];
    const today = new Date();
    
    for (let i = 0; i < 42; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      
      const isCurrentMonth = date.getMonth() === month;
      const isPast = date < today.setHours(0, 0, 0, 0);
      const isToday = date.toDateString() === new Date().toDateString();
      const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();
      
      // Mock availability (in real app, this would come from API)
      const isAvailable = isCurrentMonth && !isPast && Math.random() > 0.3;
      
      days.push({
        date,
        isCurrentMonth,
        isPast,
        isToday,
        isSelected,
        isAvailable
      });
    }
    
    return days;
  };

  const availableTimes = [
    '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', 
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const navigateMonth = (direction) => {
    const newMonth = new Date(currentMonth);
    newMonth.setMonth(currentMonth.getMonth() + direction);
    setCurrentMonth(newMonth);
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <section className="py-16 bg-muted/30">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-playfair font-bold text-foreground mb-4">
            Select Date & Time
          </h2>
          <p className="text-lg text-text-secondary">
            Choose your preferred consultation date and time
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Calendar */}
          <div className="bg-card rounded-xl p-6 shadow-warm">
            <div className="flex items-center justify-between mb-6">
              <button
                onClick={() => navigateMonth(-1)}
                className="p-2 rounded-lg hover:bg-muted transition-warm"
              >
                <Icon name="ChevronLeft" size={20} />
              </button>
              
              <h3 className="text-xl font-playfair font-semibold text-foreground">
                {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
              </h3>
              
              <button
                onClick={() => navigateMonth(1)}
                className="p-2 rounded-lg hover:bg-muted transition-warm"
              >
                <Icon name="ChevronRight" size={20} />
              </button>
            </div>

            {/* Day headers */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {dayNames.map((day) => (
                <div key={day} className="text-center text-sm font-medium text-text-secondary py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-1">
              {generateCalendarDays().map((day, index) => (
                <button
                  key={index}
                  onClick={() => day.isAvailable && onDateSelect(day.date)}
                  disabled={!day.isAvailable}
                  className={`
                    aspect-square p-2 text-sm rounded-lg transition-warm
                    ${!day.isCurrentMonth ? 'text-muted-foreground' : ''}
                    ${day.isPast || !day.isAvailable ? 'cursor-not-allowed opacity-50' : 'hover:bg-muted'}
                    ${day.isToday ? 'ring-2 ring-primary' : ''}
                    ${day.isSelected ? 'bg-primary text-primary-foreground' : ''}
                    ${day.isAvailable && day.isCurrentMonth ? 'text-foreground' : ''}
                  `}
                >
                  {day.date.getDate()}
                </button>
              ))}
            </div>

            <div className="mt-4 flex items-center space-x-4 text-xs text-text-secondary">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-primary rounded"></div>
                <span>Selected</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 border-2 border-primary rounded"></div>
                <span>Today</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-muted rounded"></div>
                <span>Available</span>
              </div>
            </div>
          </div>

          {/* Time slots */}
          <div className="bg-card rounded-xl p-6 shadow-warm">
            <h3 className="text-xl font-playfair font-semibold text-foreground mb-6">
              Available Times
            </h3>
            
            {selectedDate ? (
              <div className="space-y-3">
                <p className="text-sm text-text-secondary mb-4">
                  {selectedDate.toLocaleDateString('en-US', { 
                    weekday: 'long', 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </p>
                
                <div className="grid grid-cols-2 gap-3">
                  {availableTimes.map((time) => (
                    <button
                      key={time}
                      onClick={() => onTimeSelect(time)}
                      className={`
                        p-3 rounded-lg text-sm font-medium transition-warm border
                        ${selectedTime === time
                          ? 'bg-primary text-primary-foreground border-primary'
                          : 'bg-background border-border hover:border-primary hover:bg-primary/5'
                        }
                      `}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div className="text-center py-8">
                <Icon name="Calendar" size={48} className="text-muted-foreground mx-auto mb-4" />
                <p className="text-text-secondary">
                  Please select a date to view available times
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingCalendar;