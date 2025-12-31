import { Droplets, Phone, Mail, Youtube, Instagram, MapPin } from "lucide-react";
import { motion } from "framer-motion";

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Groundwater Services", href: "#groundwater" },
  { name: "Mining Services", href: "#mining" },
  { name: "Why Choose Us", href: "#why-us" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Borewell Point Identification",
  "Hydrogeological Surveys",
  "Aquifer Mapping",
  "Water Quality Testing",
  "Mining Consultancy",
  "GIS Mapping",
];

export const Footer = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-ocean-deep text-primary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <motion.a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("#home");
              }}
              className="flex items-center gap-3 mb-6"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 rounded-xl bg-teal flex items-center justify-center">
                <Droplets className="w-7 h-7 text-secondary-foreground" />
              </div>
              <div>
                <span className="font-serif text-xl font-bold">RK Geo</span>
                <span className="block text-xs opacity-80">Services</span>
              </div>
            </motion.a>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-6">
              Professional geoscience consultancy specializing in groundwater 
              investigation and mining geology. Scientific solutions you can trust.
            </p>
            <div className="flex gap-3">
              <a
                href="https://youtube.com/@rkgroundwaterdetectors"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-red-500 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/rkgeoservices"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center hover:bg-pink-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-primary-foreground/70 hover:text-teal-light transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-primary-foreground/70 text-sm">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-teal-light flex-shrink-0 mt-0.5" />
                <div className="text-sm">
                  <a href="tel:7702663322" className="text-primary-foreground/70 hover:text-teal-light block">
                    7702663322
                  </a>
                  <a href="tel:9059326175" className="text-primary-foreground/70 hover:text-teal-light block">
                    90593 26175
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-teal-light flex-shrink-0 mt-0.5" />
                <a href="mailto:rkgeoservices9@gmail.com" className="text-primary-foreground/70 hover:text-teal-light text-sm break-all">
                  rkgeoservices9@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-teal-light flex-shrink-0 mt-0.5" />
                <span className="text-primary-foreground/70 text-sm">
                  Hyderabad, Telangana, India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/50 text-sm">
              © {new Date().getFullYear()} RK Geo Services. All rights reserved.
            </p>
            <p className="text-primary-foreground/50 text-sm">
              Led by Dr. Ravikanth Padala – Professional Geologist
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
