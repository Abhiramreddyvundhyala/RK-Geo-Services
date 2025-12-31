import { useState } from "react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { motion, AnimatePresence } from "framer-motion";
import {
  Droplets,
  Target,
  Layers,
  BarChart3,
  FlaskConical,
  Wrench,
  CloudRain,
  Map,
  Leaf,
  ChevronDown,
} from "lucide-react";

const groundwaterServices = [
  {
    icon: Droplets,
    title: "Hydrogeological Surveys",
    description: "Comprehensive surveys for groundwater exploration using modern geophysical methods",
    details: "We conduct detailed hydrogeological investigations including resistivity surveys, electromagnetic surveys, and geological mapping to identify promising groundwater zones.",
  },
  {
    icon: Target,
    title: "Borewell Point Identification",
    description: "Scientific identification and marking of optimal borewell locations",
    details: "Using advanced geophysical equipment and geological analysis, we pinpoint the most suitable locations for borewell drilling with high success rates.",
  },
  {
    icon: Layers,
    title: "Aquifer Mapping",
    description: "Groundwater potential assessment and aquifer characterization",
    details: "Detailed mapping of aquifer systems including depth, extent, yield potential, and water quality to ensure sustainable extraction.",
  },
  {
    icon: BarChart3,
    title: "Water Table Monitoring",
    description: "Seasonal fluctuation studies and long-term monitoring",
    details: "Regular monitoring of water table levels to understand seasonal variations and predict future trends for better resource management.",
  },
  {
    icon: FlaskConical,
    title: "Water Quality Testing",
    description: "Comprehensive groundwater quality analysis and interpretation",
    details: "Laboratory analysis of groundwater samples for physical, chemical, and bacteriological parameters with detailed interpretation reports.",
  },
  {
    icon: Wrench,
    title: "Failed Borewell Investigation",
    description: "Diagnosis and corrective solutions for non-performing wells",
    details: "Technical investigation of failed borewells to identify causes and recommend rehabilitation measures or alternative solutions.",
  },
  {
    icon: CloudRain,
    title: "Artificial Recharge Design",
    description: "Rainwater harvesting and recharge structure design",
    details: "Design and implementation of artificial recharge structures including percolation ponds, recharge wells, and check dams.",
  },
  {
    icon: Map,
    title: "GIS-Based Mapping",
    description: "GPS and GIS-based groundwater resource mapping",
    details: "Advanced spatial analysis and mapping using Geographic Information Systems for comprehensive groundwater resource assessment.",
  },
  {
    icon: Leaf,
    title: "Sustainable Management",
    description: "Long-term groundwater management planning",
    details: "Development of sustainable groundwater management plans considering extraction rates, recharge potential, and future demand projections.",
  },
];

export const ServicesSection = () => {
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="groundwater" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold text-teal uppercase tracking-wider">
            Our Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-2 mb-4">
            Groundwater Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive groundwater investigation and management solutions 
            using scientific methods and modern technology
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {groundwaterServices.map((service, index) => (
            <StaggerItem key={service.title}>
              <motion.div
                className="h-full bg-card rounded-2xl shadow-card border border-border/50 overflow-hidden group cursor-pointer"
                whileHover={{ y: -5, boxShadow: "0 20px 40px -15px hsl(var(--teal) / 0.2)" }}
                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
              >
                <div className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-ocean flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-semibold text-foreground mb-1">{service.title}</h4>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </div>
                    <motion.div
                      animate={{ rotate: expandedIndex === index ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    </motion.div>
                  </div>

                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-muted-foreground mt-4 pt-4 border-t border-border">
                          {service.details}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
