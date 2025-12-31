import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { MiningSection } from "@/components/sections/MiningSection";
import { WhyUsSection } from "@/components/sections/WhyUsSection";
import { SectorsSection } from "@/components/sections/SectorsSection";
import { ContactSection, WhatsAppButton } from "@/components/sections/ContactSection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>RK Geo Services | Professional Groundwater & Mining Geology Consultancy</title>
        <meta 
          name="description" 
          content="RK Geo Services offers scientific groundwater investigation, borewell identification, hydrogeological surveys, and mining geology consultancy by Dr. Ravikanth Padala." 
        />
        <meta name="keywords" content="groundwater survey, borewell identification, hydrogeological survey, mining geology, geological consultancy, Hyderabad, Dr Ravikanth Padala" />
        <link rel="canonical" href="https://rkgeoservices.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="RK Geo Services | Professional Groundwater & Mining Geology Consultancy" />
        <meta property="og:description" content="Scientific groundwater investigation, borewell identification, and mining geology consultancy services." />
        <meta property="og:type" content="website" />
        
        {/* Schema.org Local Business */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "RK Geo Services",
            "description": "Professional geoscience consultancy specializing in groundwater investigation and mining geology",
            "telephone": "+91-7702663322",
            "email": "rkgeoservices9@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Hyderabad",
              "addressRegion": "Telangana",
              "addressCountry": "IN"
            },
            "founder": {
              "@type": "Person",
              "name": "Dr. Ravikanth Padala",
              "jobTitle": "Geologist"
            },
            "sameAs": [
              "https://youtube.com/@rkgroundwaterdetectors",
              "https://www.instagram.com/rkgeoservices"
            ]
          })}
        </script>
      </Helmet>

      <main className="overflow-x-hidden">
        <Navbar />
        <HeroSection />
        <StatsSection />
        <AboutSection />
        <ServicesSection />
        <MiningSection />
        <WhyUsSection />
        <SectorsSection />
        <ContactSection />
        <Footer />
        <WhatsAppButton />
      </main>
    </>
  );
};

export default Index;
