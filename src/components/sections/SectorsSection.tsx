import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import { 
  Wheat, 
  Factory, 
  Building2, 
  Pickaxe, 
  Landmark 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const sectors = [
  {
    icon: Wheat,
    title: "Agriculture & Irrigation",
    description: "Supporting farmers with reliable water sources for sustainable crop production and efficient irrigation systems",
    gradient: "from-green-500 to-teal-600",
    bgPattern: "radial-gradient(circle at 30% 50%, rgba(16, 185, 129, 0.1) 0%, transparent 50%)",
  },
  {
    icon: Factory,
    title: "Industries & Factories",
    description: "Industrial water supply solutions and groundwater management for manufacturing excellence",
    gradient: "from-blue-500 to-indigo-600",
    bgPattern: "radial-gradient(circle at 70% 30%, rgba(59, 130, 246, 0.1) 0%, transparent 50%)",
  },
  {
    icon: Building2,
    title: "Infrastructure & Construction",
    description: "Geological surveys for construction projects and urban development planning",
    gradient: "from-orange-500 to-red-600",
    bgPattern: "radial-gradient(circle at 50% 70%, rgba(249, 115, 22, 0.1) 0%, transparent 50%)",
  },
  {
    icon: Pickaxe,
    title: "Mining & Quarrying",
    description: "Mineral exploration and mining consultancy services for resource optimization",
    gradient: "from-amber-500 to-yellow-600",
    bgPattern: "radial-gradient(circle at 80% 80%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)",
  },
  {
    icon: Landmark,
    title: "Government Projects",
    description: "Technical consultancy for government and public sector initiatives and infrastructure development",
    gradient: "from-purple-500 to-pink-600",
    bgPattern: "radial-gradient(circle at 20% 20%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)",
  },
];

export const SectorsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-muted/30 via-background to-muted/20">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <span className="text-sm font-semibold text-teal uppercase tracking-wider">
            Industries We Serve
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-2 mb-4">
            Sectors We Serve
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Delivering specialized geological solutions across diverse industries
          </p>
        </AnimatedSection>

        <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {sectors.map((sector, index) => (
            <StaggerItem key={sector.title}>
              <Card className="group relative h-full border border-border/50 hover:border-teal/50 transition-all duration-500 overflow-hidden">
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: sector.bgPattern }}
                />
                
                <CardContent className="p-6 relative z-10">
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${sector.gradient} flex items-center justify-center mb-4 shadow-lg`}
                  >
                    <sector.icon className="w-7 h-7 text-white" strokeWidth={2} />
                  </motion.div>
                  
                  <motion.h3 
                    className="font-serif font-bold text-foreground text-lg mb-3 leading-tight"
                    initial={{ opacity: 1 }}
                    whileHover={{ color: "hsl(var(--teal))" }}
                    transition={{ duration: 0.3 }}
                  >
                    {sector.title}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-muted-foreground text-sm leading-relaxed"
                    initial={{ opacity: 0.8 }}
                    whileHover={{ opacity: 1 }}
                  >
                    {sector.description}
                  </motion.p>
                  
                  <motion.div
                    initial={{ width: "0%" }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.4 }}
                    className={`h-1 mt-4 rounded-full bg-gradient-to-r ${sector.gradient}`}
                  />
                  
                  <motion.div
                    className="absolute top-3 right-3 text-4xl font-bold opacity-5 group-hover:opacity-10 transition-opacity"
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 15 }}
                    transition={{ duration: 0.4 }}
                  >
                    {String(index + 1).padStart(2, '0')}
                  </motion.div>
                </CardContent>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
