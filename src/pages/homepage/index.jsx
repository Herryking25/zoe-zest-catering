import React from 'react';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import LiveEventFeed from './components/LiveEventFeed';
import FlavorJourney from './components/FlavorJourney';
import BehindKitchen from './components/BehindKitchen';
import ServicesOverview from './components/ServicesOverview';
import TrustIndicators from './components/TrustIndicators';
import NewsletterFooter from './components/NewsletterFooter';

const Homepage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroSection />
        <LiveEventFeed />
        {/* <FlavorJourney /> */}
        {/* <BehindKitchen /> */}
        <ServicesOverview />
        <TrustIndicators />
      </main>
      
      <NewsletterFooter />
    </div>
  );
};

export default Homepage;