import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import { 
  Microscope, 
  Cpu, 
  UserCheck, 
  Leaf, 
  Building,
  CheckCircle2 
} from "lucide-react";

const reasons = [
  {
    icon: Microscope,
    title: "Scientific & Data-Driven",
    description: "Every decision backed by rigorous scientific analysis and field data",
  },
  {
    icon: Cpu,
    title: "Modern Technology",
    description: "Advanced instruments, GIS tools, and geophysical equipment",
  },
  {
    icon: UserCheck,
    title: "Field-Tested Expertise",
    description: "Decades of hands-on experience across diverse geological conditions",
  },
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description: "Ethical approach focused on long-term resource conservation",
  },
  {
    icon: Building,
    title: "Project Experience",
    description: "Successfully served government and private sector projects",
  },
];

export const WhyUsSection = () => {
  return (
    <section id="why-us" className="py-24 bg-gradient-ocean text-primary-foreground relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 rounded-full bg-teal/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-ocean-light/10 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.5, 0.3, 0.5] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Title */}
          <AnimatedSection>
            <span className="text-sm font-semibold text-teal-light uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mt-2 mb-6">
              Expertise That{" "}
              <span className="text-teal-light">Delivers Results</span>
            </h2>
            <p className="text-lg text-primary-foreground/80 mb-8 leading-relaxed">
              With a commitment to scientific excellence and sustainable practices, 
              RK Geo Services has become a trusted partner for organizations seeking 
              reliable geological solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              {["ISO Standards", "GPS Accuracy", "24/7 Support"].map((item) => (
                <div
                  key={item}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20"
                >
                  <CheckCircle2 className="w-4 h-4 text-teal-light" />
                  <span className="text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Right - Reasons List */}
          <div className="space-y-4">
            {reasons.map((reason, index) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 p-4 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10 backdrop-blur-sm group"
              >
                <div className="w-12 h-12 rounded-xl bg-teal/20 flex items-center justify-center flex-shrink-0 group-hover:bg-teal/30 transition-colors">
                  <reason.icon className="w-6 h-6 text-teal-light" />
                </div>
                <div>
                  <h4 className="font-semibold text-primary-foreground mb-1">
                    {reason.title}
                  </h4>
                  <p className="text-sm text-primary-foreground/70">
                    {reason.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
