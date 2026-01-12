import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">SS</span>
              </div>
              <div>
                <p className="font-bold leading-tight">Smart Service</p>
                <p className="text-xs opacity-70">homecareappliances.in</p>
              </div>
            </div>
            <p className="text-sm opacity-80 mb-4">
              Expert Siemens & Bosch appliance repair service in Mumbai. Fast doorstep service with genuine parts and 24x7 availability.
            </p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-background/10 rounded-full text-xs font-medium">Siemens</span>
              <span className="px-3 py-1 bg-background/10 rounded-full text-xs font-medium">Bosch</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Our Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3 text-sm opacity-80">
              <li>Washing Machine Repair</li>
              <li>Dryer Repair</li>
              <li>Dishwasher Repair</li>
              <li>Oven & Microwave Repair</li>
              <li>Fridge Repair</li>
              <li>AC Repair</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 mt-0.5 text-accent" />
                <div>
                  <p className="text-sm font-medium">Toll-Free</p>
                  <a href="tel:+912269470420" className="text-sm opacity-80 hover:opacity-100">
                    +91 22 6947 0420
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 mt-0.5 text-accent" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <a href="mailto:info@homecareappliances.in" className="text-sm opacity-80 hover:opacity-100">
                    info@homecareappliances.in
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 mt-0.5 text-accent" />
                <div>
                  <p className="text-sm font-medium">Address</p>
                  <p className="text-sm opacity-80">
                    Ekta CHS Shop No. 4, Near Chakala Metro Station, Mumbai 400059
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 mt-0.5 text-accent" />
                <div>
                  <p className="text-sm font-medium">Working Hours</p>
                  <p className="text-sm opacity-80">24 Hours, 7 Days a Week</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-background/10">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-70">
              © {currentYear} Smart Service Point. All rights reserved.
            </p>
            <p className="text-sm opacity-70">
              Authorized service for Siemens & Bosch appliances in Mumbai
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
