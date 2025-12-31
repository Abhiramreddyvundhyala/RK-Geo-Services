import { useState } from "react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Youtube, 
  Instagram, 
  Send,
  MessageCircle 
} from "lucide-react";
import { toast } from "@/hooks/use-toast";
import emailjs from '@emailjs/browser';

// EmailJS Configuration
// Sign up at https://www.emailjs.com/ and replace these with your credentials
const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID'; // Replace with your EmailJS service ID
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID'; // Replace with your EmailJS template ID
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // Replace with your EmailJS public key

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    values: ["7702663322", "90593 26175", "9676494984"],
    href: "tel:7702663322",
  },
  {
    icon: Mail,
    label: "Email",
    values: ["rkgeoservices9@gmail.com"],
    href: "mailto:rkgeoservices9@gmail.com",
  },
  {
    icon: MapPin,
    label: "Location",
    values: ["Hyderabad, Telangana, India"],
    href: "#",
  },
];

const socialLinks = [
  {
    icon: Youtube,
    label: "YouTube",
    href: "https://youtube.com/@rkgroundwaterdetectors",
    color: "hover:bg-red-500",
  },
  {
    icon: Instagram,
    label: "Instagram",
    href: "https://www.instagram.com/rkgeoservices",
    color: "hover:bg-pink-500",
  },
];

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendWhatsAppMessage = () => {
    const phoneNumber = "917702663322"; // WhatsApp number with country code (no + or spaces)
    const serviceName = formData.service || "General Inquiry";
    const message = `Hello RK Geo Services,

I am interested in your services.

*Name:* ${formData.name}
*Phone:* ${formData.phone}
*Email:* ${formData.email}
*Service Required:* ${serviceName}

*Message:*
${formData.message}

Looking forward to hearing from you.`;
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp in new tab
    window.open(whatsappUrl, '_blank');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.name || !formData.phone) {
      toast({
        title: "Required Fields Missing",
        description: "Please fill in your name and phone number.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Check if EmailJS is configured
      const isEmailJSConfigured = EMAILJS_SERVICE_ID !== 'YOUR_SERVICE_ID' && 
                                   EMAILJS_TEMPLATE_ID !== 'YOUR_TEMPLATE_ID' && 
                                   EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY';

      if (isEmailJSConfigured) {
        // Send email using EmailJS
        const templateParams = {
          from_name: formData.name,
          from_email: formData.email,
          from_phone: formData.phone,
          service_type: formData.service,
          message: formData.message,
          to_email: 'rkgeoservices9@gmail.com',
        };

        await emailjs.send(
          EMAILJS_SERVICE_ID,
          EMAILJS_TEMPLATE_ID,
          templateParams,
          EMAILJS_PUBLIC_KEY
        );
      }

      // Always open WhatsApp with prefilled message
      sendWhatsAppMessage();

      toast({
        title: "Opening WhatsApp!",
        description: "Your message has been prepared. Click Send in WhatsApp to submit.",
      });
      
      // Reset form after a short delay
      setTimeout(() => {
        setFormData({ name: "", phone: "", email: "", service: "", message: "" });
      }, 1000);
      
    } catch (error) {
      console.error('Error:', error);
      
      // Even on error, still open WhatsApp
      sendWhatsAppMessage();
      
      toast({
        title: "Opening WhatsApp",
        description: "Sending via WhatsApp. Please complete your message there.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-28 bg-gradient-to-b from-background via-muted/20 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="text-sm font-semibold text-teal uppercase tracking-wider">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-2 mb-4">
            Contact Us
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Ready to start your project? Get in touch with our expert team today
          </p>
        </AnimatedSection>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 max-w-7xl mx-auto">
          {/* Contact Form */}
          <AnimatedSection delay={0.1}>
            <motion.div 
              className="bg-card rounded-3xl p-8 shadow-xl border border-border/50 relative overflow-hidden"
              whileHover={{ boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.2)" }}
              transition={{ duration: 0.3 }}
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-teal/20 to-transparent rounded-full blur-3xl" />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-teal/10 flex items-center justify-center">
                    <Send className="w-5 h-5 text-teal" />
                  </div>
                  Request a Survey
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Your Name *
                      </label>
                      <Input
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="h-11 border focus:border-teal transition-colors"
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">
                        Phone Number *
                      </label>
                      <Input
                        required
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="h-11 border focus:border-teal transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Email Address
                    </label>
                    <Input
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="h-11 border focus:border-teal transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Service Required
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full h-11 px-3 rounded-lg border border-input focus:border-teal bg-background text-foreground transition-colors"
                    >
                      <option value="">Select a service</option>
                      <option value="borewell">Borewell Point Identification</option>
                      <option value="hydro">Hydrogeological Survey</option>
                      <option value="mining">Mining Consultancy</option>
                      <option value="water-quality">Water Quality Testing</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea
                      placeholder="Tell us about your project requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="border focus:border-teal transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    variant="teal"
                    className="w-full font-semibold h-11 gap-2 shadow-lg hover:shadow-xl transition-all"
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </div>
            </motion.div>
          </AnimatedSection>

          {/* Contact Info */}
          <div className="space-y-8">
            <AnimatedSection delay={0.2}>
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 5, scale: 1.01 }}
                    className="flex items-start gap-4 p-5 bg-card rounded-xl shadow-lg hover:shadow-xl border border-border/50 hover:border-teal/50 group transition-all duration-300"
                  >
                    <motion.div 
                      className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal/20 to-teal/10 flex items-center justify-center flex-shrink-0 group-hover:from-teal/30 group-hover:to-teal/20 transition-all"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <item.icon className="w-6 h-6 text-teal" strokeWidth={2} />
                    </motion.div>
                    <div>
                      <h4 className="font-semibold text-base text-foreground mb-1">
                        {item.label}
                      </h4>
                      {item.values.map((value) => (
                        <p key={value} className="text-muted-foreground text-sm">
                          {value}
                        </p>
                      ))}
                    </div>
                  </motion.a>
                ))}
              </div>
            </AnimatedSection>

            {/* Social Links */}
            <AnimatedSection delay={0.3}>
              <motion.div 
                className="bg-card rounded-xl p-6 shadow-lg border border-border/50"
                whileHover={{ boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.2)" }}
              >
                <h4 className="font-semibold text-base text-foreground mb-4">Connect With Us</h4>
                <div className="flex gap-3">
                  {socialLinks.map((link) => (
                    <motion.a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1, y: -3 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-12 h-12 rounded-xl bg-muted flex items-center justify-center transition-all shadow-md ${link.color} hover:text-primary-foreground`}
                    >
                      <link.icon className="w-5 h-5" strokeWidth={2} />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </AnimatedSection>

            {/* Map Placeholder */}
            <AnimatedSection delay={0.4}>
              <motion.div 
                className="bg-card rounded-xl overflow-hidden shadow-lg border border-border/50"
                whileHover={{ boxShadow: "0 15px 30px -10px rgba(0, 0, 0, 0.2)" }}
              >
                <div className="h-60 bg-gradient-to-br from-muted via-muted/50 to-muted flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal/10 via-transparent to-transparent" />
                  <div className="text-center relative z-10">
                    <motion.div
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    >
                      <MapPin className="w-12 h-12 text-teal mx-auto mb-3" strokeWidth={2} />
                    </motion.div>
                    <p className="text-foreground font-semibold text-base">Hyderabad, Telangana</p>
                    <p className="text-muted-foreground text-sm mt-1">India</p>
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};

// WhatsApp Floating Button Component
export const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://wa.me/917702663322"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center shadow-lg hover:bg-green-600 transition-colors"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, type: "spring" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle className="w-7 h-7" />
    </motion.a>
  );
};
