import { WashingMachine, Phone, CheckCircle2, Clock, Shield, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';

const featuredServices = [
  {
    brand: 'Siemens',
    title: 'Siemens Washing Machine Repair',
    description: 'Expert repair for all Siemens washing machine models including iQ series, front load, and top load machines.',
    benefits: [
      'Common drum issues fixed in 60 minutes',
      'Error code diagnosis & repair',
      'Genuine Siemens spare parts',
      'Motor & PCB repair specialists',
      '90-day service warranty',
    ],
    highlight: 'Most Popular',
    accentColor: 'primary',
  },
  {
    brand: 'Bosch',
    title: 'Bosch Washing Machine Repair',
    description: 'Specialized repair service for Bosch washing machines including Serie 2, 4, 6, and 8 models.',
    benefits: [
      'Error codes solved fast with genuine parts',
      'Front & top load experts',
      'Water pump & drain issues',
      'Electronic control board repair',
      '90-day service warranty',
    ],
    highlight: 'Top Rated',
    accentColor: 'accent',
  },
];

const FeaturedServices = () => {
  return (
    <section className="section-padding bg-secondary/30 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 30%, hsl(var(--primary)) 0%, transparent 50%),
                              radial-gradient(circle at 80% 70%, hsl(var(--accent)) 0%, transparent 50%)`
          }}
        />
      </div>

      <div className="container-custom relative">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            ⭐ Top Repairs
          </span>
          <h2 className="heading-secondary mb-4">
            Featured Washing Machine Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Washing machines are our specialty. Our expert technicians have repaired 1000+ Siemens & Bosch washing machines across Mumbai.
          </p>
        </div>

        {/* Featured Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {featuredServices.map((service, index) => (
            <div
              key={index}
              className="card-featured group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Badge */}
              <div className="absolute top-4 right-4">
                <span 
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    service.accentColor === 'primary' 
                      ? 'bg-primary text-primary-foreground' 
                      : 'bg-accent text-accent-foreground'
                  }`}
                >
                  {service.highlight}
                </span>
              </div>

              {/* Icon & Brand */}
              <div className="flex items-center gap-4 mb-6">
                <div 
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                    service.accentColor === 'primary' 
                      ? 'bg-primary/10' 
                      : 'bg-accent/10'
                  }`}
                >
                  <WashingMachine 
                    className={`w-8 h-8 ${
                      service.accentColor === 'primary' ? 'text-primary' : 'text-accent'
                    }`} 
                  />
                </div>
                <div>
                  <span className="text-sm font-semibold text-muted-foreground">{service.brand}</span>
                  <h3 className="text-xl font-bold">{service.title}</h3>
                </div>
              </div>

              {/* Description */}
              <p className="text-muted-foreground mb-6">{service.description}</p>

              {/* Benefits */}
              <ul className="space-y-3 mb-8">
                {service.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 
                      className={`w-5 h-5 flex-shrink-0 mt-0.5 ${
                        service.accentColor === 'primary' ? 'text-primary' : 'text-accent'
                      }`} 
                    />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a href="tel:+912269470420" className="block">
                <Button className="btn-cta-pulse w-full gap-2 text-lg py-6">
                  <Phone className="w-5 h-5" />
                  Call Now – Get Quote
                </Button>
              </a>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border">
            <div className="w-10 h-10 bg-cta/10 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-cta" />
            </div>
            <div>
              <p className="font-semibold text-sm">60 Min</p>
              <p className="text-xs text-muted-foreground">Response Time</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="font-semibold text-sm">Genuine</p>
              <p className="text-xs text-muted-foreground">Spare Parts</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border">
            <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
              <Wrench className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="font-semibold text-sm">Expert</p>
              <p className="text-xs text-muted-foreground">Technicians</p>
            </div>
          </div>
          <div className="flex items-center gap-3 p-4 bg-background rounded-xl border border-border">
            <div className="w-10 h-10 bg-cta/10 rounded-lg flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-cta" />
            </div>
            <div>
              <p className="font-semibold text-sm">90 Days</p>
              <p className="text-xs text-muted-foreground">Warranty</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;