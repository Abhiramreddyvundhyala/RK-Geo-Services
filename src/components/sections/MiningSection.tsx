import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import {
  Mountain,
  Search,
  FileText,
  Droplet,
  MapPin,
  FileCheck,
  Pickaxe,
} from "lucide-react";

const miningServices = [
  {
    icon: Mountain,
    title: "Geological Mapping",
    description: "Detailed geological mapping and mineral exploration surveys",
    color: "from-earth to-earth-light",
  },
  {
    icon: Search,
    title: "Prospecting & Estimation",
    description: "Mineral prospecting and reserve estimation studies",
    color: "from-earth to-earth-light",
  },
  {
    icon: MapPin,
    title: "Quarry Surveys",
    description: "Quarry and mining lease surveys with precise documentation",
    color: "from-earth to-earth-light",
  },
  {
    icon: FileText,
    title: "Report Preparation",
    description: "Geological and mining report preparation for approvals",
    color: "from-earth to-earth-light",
  },
  {
    icon: Droplet,
    title: "Impact Assessment",
    description: "Hydrogeological impact assessment for mining operations",
    color: "from-earth to-earth-light",
  },
  {
    icon: Pickaxe,
    title: "GIS Mine Planning",
    description: "GIS-based mine planning and resource optimization",
    color: "from-earth to-earth-light",
  },
  {
    icon: FileCheck,
    title: "Compliance Support",
    description: "Statutory approvals and regulatory compliance assistance",
    color: "from-earth to-earth-light",
  },
];

export const MiningSection = () => {
  return (
    <section id="mining" className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-earth rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-earth-light rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold text-earth uppercase tracking-wider">
            Mining Expertise
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-2 mb-4">
            Mining Geology Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional mining geology consultancy for exploration, 
            planning, and regulatory compliance
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {miningServices.map((service) => (
            <StaggerItem key={service.title}>
              <motion.div
                className="h-full bg-card rounded-2xl p-6 shadow-card border border-border/50 group"
                whileHover={{ 
                  y: -8, 
                  boxShadow: "0 20px 40px -15px hsl(var(--earth) / 0.25)" 
                }}
              >
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <service.icon className="w-7 h-7 text-accent-foreground" />
                </div>
                <h4 className="font-semibold text-foreground mb-2 text-lg">
                  {service.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
