import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { Calendar, CheckCircle, Building2, FolderKanban } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: 9,
    suffix: "+",
    label: "Years of Field Experience",
    description: "Professional geological expertise",
  },
  {
    icon: CheckCircle,
    value: 100,
    suffix: "+",
    label: "Successful Surveys",
    description: "Completed with precision",
  },
  {
    icon: Building2,
    value: 5,
    suffix: "+",
    label: "Sectors Served",
    description: "Industries & organizations",
  },
  {
    icon: FolderKanban,
    value: 50,
    suffix: "+",
    label: "Projects Completed",
    description: "Across India",
  },
];

export const StatsSection = () => {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <AnimatedSection className="text-center mb-12">
          <span className="text-sm font-semibold text-teal uppercase tracking-wider">
            Our Track Record
          </span>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mt-2">
            Trusted by Industry Leaders
          </h2>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="bg-card rounded-2xl p-6 lg:p-8 shadow-card hover:shadow-glow transition-all duration-300 group">
                <div className="w-14 h-14 rounded-xl bg-gradient-ocean flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <stat.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <div className="text-3xl lg:text-4xl font-serif font-bold text-foreground mb-1">
                  <AnimatedCounter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </div>
                <p className="text-sm text-muted-foreground">{stat.description}</p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
