import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import { GraduationCap, Award, Target, Leaf } from "lucide-react";

const highlights = [
  {
    icon: GraduationCap,
    title: "Expert Geologist",
    description: "Dr. Ravikanth Padala brings deep expertise in groundwater investigation and mining geology",
  },
  {
    icon: Award,
    title: "Scientific Approach",
    description: "Modern survey techniques with GIS tools and data-driven analysis",
  },
  {
    icon: Target,
    title: "Precision Results",
    description: "Accurate borewell identification and resource estimation",
  },
  {
    icon: Leaf,
    title: "Sustainable Solutions",
    description: "Ethical practices focused on long-term resource management",
  },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-background to-muted/30 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-teal/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold text-teal uppercase tracking-wider">
            About Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-2 mb-4">
            RK Professional Geoscience{" "}
            <span className="text-teal">Consultancy</span>
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Delivering scientific, reliable, and sustainable geological solutions across India
          </p>
        </AnimatedSection>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Founder Card */}
          <AnimatedSection delay={0.2} className="lg:col-span-1">
            <motion.div 
              className="bg-card rounded-2xl p-6 shadow-xl border border-border/50 h-full"
              whileHover={{ y: -5, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex flex-col items-center text-center">
                <div className="relative mb-6">
                  <div className="w-48 h-48 rounded-2xl overflow-hidden ring-4 ring-teal/20 shadow-lg">
                    <img 
                      src={`${import.meta.env.BASE_URL}images/Dr. Ravikanth Padala,.jpg`}
                      alt="Dr. Ravikanth Padala" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                  Dr. Ravikanth Padala
                </h3>
                <p className="text-base text-teal font-semibold mb-4">
                  Chief Geologist
                </p>
                
                <div className="space-y-2 w-full">
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <GraduationCap className="w-4 h-4 text-teal" />
                    <span>PhD in Geology</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <Award className="w-4 h-4 text-teal" />
                    <span>9+ Years Field Experience</span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border/50 w-full">
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Professional geologist specializing in groundwater investigation and mining geology with extensive expertise across multiple sectors
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <AnimatedSection delay={0.3}>
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                    <Target className="w-5 h-5 text-teal" />
                  </div>
                  Our Mission
                </h3>
                <p className="text-base text-muted-foreground leading-relaxed">
                  RK Geo Services is a professional geoscience consultancy specializing in 
                  <strong className="text-foreground"> groundwater investigation</strong> and 
                  <strong className="text-foreground"> mining geology</strong>. We provide scientific, 
                  reliable, and sustainable solutions using modern survey techniques, field expertise, 
                  GIS tools, and data-driven analysis.
                </p>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <div className="bg-card rounded-2xl p-8 shadow-lg border border-border/50">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center">
                    <Leaf className="w-5 h-5 text-teal" />
                  </div>
                  Our Approach
                </h3>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  We have successfully served diverse sectors including agriculture, industries, 
                  infrastructure, mining, and government projects across India. Our commitment to 
                  ethical practices and long-term resource management sets us apart.
                </p>
                
                {/* Key Highlights */}
                <div className="grid sm:grid-cols-2 gap-5">
                  {highlights.map((item, index) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="flex items-start gap-4 p-5 bg-muted/50 rounded-xl hover:bg-muted/70 transition-colors"
                    >
                      <div className="w-12 h-12 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-6 h-6 text-teal" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground text-base mb-2">{item.title}</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};
