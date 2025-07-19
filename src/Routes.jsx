import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ScrollToTop from "components/ScrollToTop";
import ErrorBoundary from "components/ErrorBoundary";
// Add your imports here
import Homepage from "pages/homepage";
import PortfolioGallery from "pages/portfolio-gallery";
import ServicesOverview from "pages/services-overview";
import ConsultationBooking from "pages/consultation-booking";
import AboutZoeZest from "pages/about-zoe-zest";
import ContactLocations from "pages/contact-locations";
import NotFound from "pages/NotFound";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
      <ScrollToTop />
      <RouterRoutes>
        {/* Define your routes here */}
        <Route path="/" element={<Homepage />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/portfolio-gallery" element={<PortfolioGallery />} />
        <Route path="/services-overview" element={<ServicesOverview />} />
        <Route path="/consultation-booking" element={<ConsultationBooking />} />
        <Route path="/about-zoe-zest" element={<AboutZoeZest />} />
        <Route path="/contact-locations" element={<ContactLocations />} />
        <Route path="*" element={<NotFound />} />
      </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;