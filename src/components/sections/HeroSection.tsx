import { motion } from "framer-motion";
import { ArrowRight, Phone, Droplets, Mountain, Waves } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

export const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="Geological terrain" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-hero opacity-85" />
      </div>
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Animated water flow lines */}
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 1440 900" preserveAspectRatio="xMidYMid slice">
            <motion.path
              d="M0,400 C200,350 400,450 600,400 C800,350 1000,450 1200,400 C1400,350 1440,400 1440,400 L1440,900 L0,900 Z"
              fill="none"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
            />
            <motion.path
              d="M0,500 C300,450 500,550 700,500 C900,450 1100,550 1300,500 C1440,475 1440,500 1440,500 L1440,900 L0,900 Z"
              fill="none"
              stroke="rgba(255,255,255,0.2)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.3, ease: "easeInOut" }}
            />
            <motion.path
              d="M0,600 C250,550 450,650 650,600 C850,550 1050,650 1250,600 C1400,575 1440,600 1440,600 L1440,900 L0,900 Z"
              fill="none"
              stroke="rgba(255,255,255,0.15)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 2, delay: 0.6, ease: "easeInOut" }}
            />
          </svg>
        </div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-1/4 left-1/4 opacity-10"
          animate={{ y: [-20, 20, -20], rotate: [0, 5, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <Droplets className="w-32 h-32 text-primary-foreground" />
        </motion.div>
        <motion.div
          className="absolute bottom-1/3 right-1/4 opacity-10"
          animate={{ y: [20, -20, 20], rotate: [0, -5, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        >
          <Mountain className="w-40 h-40 text-primary-foreground" />
        </motion.div>
        <motion.div
          className="absolute top-1/2 right-1/3 opacity-10"
          animate={{ x: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <Waves className="w-24 h-24 text-primary-foreground" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 pt-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-teal animate-pulse" />
            <span className="text-sm font-medium text-primary-foreground">
              Professional Geoscience Consultancy
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-primary-foreground leading-tight mb-6"
          >
            Scientific Groundwater &{" "}
            <span className="text-teal-light">Geological Solutions</span>{" "}
            You Can Trust
          </motion.h1>

          {/* Sub-headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg sm:text-xl text-primary-foreground/80 mb-8 max-w-2xl"
          >
            Hydrogeological Surveys • Borewell Identification • Mining Consultancy
          </motion.p>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-base text-primary-foreground/70 mb-10 max-w-xl"
          >
            Led by Dr. Ravikanth Padala, a professional geologist with extensive field expertise, 
            we deliver data-driven solutions for sustainable water and mineral resource management.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button
              size="lg"
              variant="teal"
              className="font-semibold px-8 py-6 text-lg gap-2 group"
              onClick={() => scrollToSection("#contact")}
            >
              Request Survey
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="hero"
              className="font-semibold px-8 py-6 text-lg gap-2"
              asChild
            >
              <a href="tel:7702663322">
                <Phone className="w-5 h-5" />
                Contact Expert
              </a>
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};
