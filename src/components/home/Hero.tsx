import { Phone, Clock, Shield, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Background Gradient */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, hsl(var(--primary)) 0%, transparent 50%), radial-gradient(circle at 80% 50%, hsl(var(--accent)) 0%, transparent 50%)'
        }}
      />
      
      <div className="container-custom section-padding relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Brand Badges */}
            <div className="flex gap-3 justify-center lg:justify-start mb-6">
              <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                Siemens Expert
              </span>
              <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                Bosch Expert
              </span>
            </div>

            <h1 className="heading-primary mb-6 text-balance">
              Expert Siemens & Bosch Appliance Repair in Mumbai
              <span className="block text-primary mt-2">Fast Doorstep Service</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              Service in 60 Minutes • Genuine Parts • 24x7 Availability
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <a href="tel:+912269470420">
                <Button size="lg" className="btn-cta text-lg px-8 py-6 w-full sm:w-auto">
                  <Phone className="w-5 h-5" />
                  Call +91 22 6947 0420
                </Button>
              </a>
              <a href="#services">
                <Button size="lg" variant="outline" className="text-lg px-8 py-6 w-full sm:w-auto border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary">
                  View Services
                </Button>
              </a>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Clock className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">24x7 Service</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Shield className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Genuine Parts</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">40 KM Coverage</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Phone className="w-5 h-5 text-accent" />
                <span className="text-sm font-medium">Doorstep Service</span>
              </div>
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div className="relative hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-3xl transform rotate-3" />
            <div className="relative bg-secondary rounded-3xl p-8 transform -rotate-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-background rounded-xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">60 Min Response</h3>
                  <p className="text-sm text-muted-foreground">Fast service at your doorstep</p>
                </div>
                <div className="bg-background rounded-xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-1">Genuine Parts</h3>
                  <p className="text-sm text-muted-foreground">Only authentic spares</p>
                </div>
                <div className="bg-background rounded-xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-1">40 KM Coverage</h3>
                  <p className="text-sm text-muted-foreground">Mumbai, Navi Mumbai, Thane</p>
                </div>
                <div className="bg-background rounded-xl p-6 shadow-lg">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-1">24x7 Available</h3>
                  <p className="text-sm text-muted-foreground">Always here to help</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
