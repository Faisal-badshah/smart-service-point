import { Phone, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CTA = () => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <div 
          className="rounded-3xl p-8 md:p-12 lg:p-16 text-center relative overflow-hidden"
          style={{ background: 'linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(var(--brand-blue-dark)) 100%)' }}
        >
          {/* Decorative Elements */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4">
              Need Appliance Repair?
            </h2>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
              Call now for fast, reliable Siemens & Bosch appliance repair. Our experts are available 24x7!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:+912269470420">
                <Button size="lg" className="btn-cta text-lg px-8 py-6 w-full sm:w-auto">
                  <Phone className="w-5 h-5" />
                  Call +91 99206 62103
                </Button>
              </a>
              <Link to="/contact">
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="text-lg px-8 py-6 w-full sm:w-auto bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>

            <p className="mt-6 text-sm text-primary-foreground/70">
              Free diagnosis with every service call
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
