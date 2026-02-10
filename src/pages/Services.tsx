import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { 
  WashingMachine, 
  Wind, 
  UtensilsCrossed, 
  Microwave, 
  Refrigerator, 
  Thermometer,
  Phone,
  CheckCircle2
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: WashingMachine,
    title: 'Siemens Washing Machine Repair',
    brand: 'Siemens',
    shortDesc: 'Expert repair for all Siemens washing machine models including iQ300, iQ500, and iQ700 series.',
    description: 'Our technicians specialize in Siemens washing machines with deep expertise in drum issues, motor repairs, water pump problems, and electronic control board diagnostics. We use genuine Siemens parts for lasting repairs.',
    features: ['Drum & bearing replacement', 'Motor repair & replacement', 'Water pump issues', 'Control board repair', 'Error code diagnosis', 'Door lock & seal repair'],
    featured: true,
  },
  {
    icon: WashingMachine,
    title: 'Bosch Washing Machine Repair',
    brand: 'Bosch',
    shortDesc: 'Specialized service for Bosch Serie 2, 4, 6, and 8 washing machines with genuine parts.',
    description: 'Complete repair solutions for all Bosch washing machine models. From simple fixes to complex motor and PCB repairs, our experts handle it all with precision and genuine Bosch components.',
    features: ['All Serie models supported', 'Genuine Bosch parts', 'Spin & drain issues', 'Electronic diagnostics', 'Noise & vibration fix', 'Installation support'],
    featured: true,
  },
  {
    icon: Wind,
    title: 'Dryer Repair',
    brand: 'Both',
    shortDesc: 'Professional Siemens & Bosch dryer repair for heating, drum, and ventilation problems.',
    description: 'Professional repair services for Siemens & Bosch dryers. From heating issues to drum problems, our technicians can fix all dryer-related issues quickly and efficiently.',
    features: ['Heating element repair', 'Drum belt replacement', 'Thermostat issues', 'Ventilation problems', 'Timer & control repair', 'Lint filter cleaning'],
    featured: false,
  },
  {
    icon: UtensilsCrossed,
    title: 'Dishwasher Repair',
    brand: 'Both',
    shortDesc: 'Complete Siemens & Bosch dishwasher repair for drainage, spray arm, and door issues.',
    description: 'Expert dishwasher repair for all Siemens & Bosch models. We fix drainage problems, cleaning issues, and all mechanical & electrical faults with precision.',
    features: ['Drainage problems', 'Spray arm repair', 'Door latch issues', 'Pump replacement', 'Water inlet valve', 'Detergent dispenser'],
    featured: false,
  },
  {
    icon: Microwave,
    title: 'Oven & Microwave Repair',
    brand: 'Both',
    shortDesc: 'Expert repair for Siemens & Bosch ovens and microwaves including built-in models.',
    description: 'Complete repair services for Siemens & Bosch ovens and microwaves. From heating issues to control panel problems, we handle all types of repairs.',
    features: ['Heating element repair', 'Magnetron replacement', 'Door switch repair', 'Control panel fix', 'Temperature calibration', 'Fan motor repair'],
    featured: false,
  },
  {
    icon: Refrigerator,
    title: 'Refrigerator Repair',
    brand: 'Both',
    shortDesc: 'Professional Siemens & Bosch fridge repair for cooling, compressor, and ice maker issues.',
    description: 'Professional fridge repair for Siemens & Bosch refrigerators. We fix cooling issues, compressor problems, ice maker faults, and more with genuine parts.',
    features: ['Compressor repair', 'Gas refilling', 'Thermostat issues', 'Ice maker repair', 'Door seal replacement', 'Defrost system repair'],
    featured: false,
  },
  {
    icon: Thermometer,
    title: 'AC Repair & Service',
    brand: 'Both',
    shortDesc: 'Complete Siemens & Bosch AC repair including gas refill, PCB repair, and installation.',
    description: 'Complete AC repair and maintenance for Siemens & Bosch air conditioners. From gas refilling to compressor repair, we provide comprehensive solutions.',
    features: ['Gas refilling', 'Compressor repair', 'PCB repair', 'Filter cleaning', 'Installation & uninstallation', 'Annual maintenance'],
    featured: false,
  },
];

const Services = () => {
  return (
    <>
      <Helmet>
        <title>Siemens & Bosch Repair Services Mumbai | Washing Machine, Fridge, AC - Smart Service</title>
        <meta 
          name="description" 
          content="Expert Siemens & Bosch appliance repair in Mumbai. Washing machine service centre, fridge repair, AC repair, dishwasher repair. Genuine parts, 24x7 doorstep service. Call now!" 
        />
        <meta name="keywords" content="Siemens washing machine service centre Mumbai, Bosch washing machine repair near me, Siemens fridge repair, Bosch AC service, dishwasher repair Mumbai, appliance repair near me" />
        <link rel="canonical" href="https://homecareappliances.in/services" />
      </Helmet>

      <Layout>
        {/* Page Header */}
        <section 
          className="py-16 md:py-24 relative"
          style={{ background: 'linear-gradient(135deg, hsl(215 100% 27%) 0%, hsl(197 100% 35%) 100%)' }}
        >
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle,_rgba(255,255,255,0.1)_1px,_transparent_1px)] bg-[size:20px_20px]" />
          <div className="container-custom relative">
            <div className="text-center text-primary-foreground">
              <span className="inline-block px-4 py-1.5 bg-white/20 rounded-full text-sm font-semibold mb-4 backdrop-blur-sm">
                Siemens & Bosch Specialists
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Repair Services</h1>
              <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                Specialized repair services with genuine parts and expert technicians. 24×7 doorstep service across Mumbai.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="space-y-12">
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-8 items-center ${
                    index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    {/* Featured Badge */}
                    {service.featured && (
                      <span className="inline-block px-3 py-1 bg-cta/10 text-cta rounded-full text-sm font-semibold mb-4">
                        ⭐ Most Popular
                      </span>
                    )}
                    
                    {/* Brand Badge */}
                    <div className="flex gap-2 mb-4">
                      {service.brand === 'Both' ? (
                        <>
                          <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">Siemens</span>
                          <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-semibold">Bosch</span>
                        </>
                      ) : (
                        <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold">{service.brand}</span>
                      )}
                    </div>

                    <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                      <service.icon className="w-10 h-10 text-primary" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold mb-3">{service.title}</h2>
                    <p className="text-muted-foreground font-medium mb-4">{service.shortDesc}</p>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    
                    <ul className="grid grid-cols-2 gap-3 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-cta flex-shrink-0" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-3">
                      <a href="tel:+91 99206 62103">
                        <Button className="btn-cta gap-2">
                          <Phone className="w-4 h-4" />
                          Call +91 99206 62103
                        </Button>
                      </a>
                    </div>
                  </div>

                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="bg-secondary/50 rounded-2xl p-8 relative overflow-hidden border border-border/50">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                      <div className="relative flex items-center justify-center min-h-[250px]">
                        <service.icon className="w-32 h-32 text-primary/20" />
                      </div>
                      <div className="flex gap-3 justify-center mt-4">
                        <span className="px-4 py-1.5 bg-background rounded-full text-sm font-medium shadow-sm">Siemens</span>
                        <span className="px-4 py-1.5 bg-background rounded-full text-sm font-medium shadow-sm">Bosch</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section 
          className="section-padding"
          style={{ background: 'linear-gradient(135deg, hsl(215 100% 97%) 0%, hsl(197 100% 97%) 100%)' }}
        >
          <div className="container-custom text-center">
            <h2 className="heading-secondary mb-4">Ready to Get Your Appliance Fixed?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Call us now for fast, reliable repair service. Our expert technicians are available 24×7!
            </p>
            <a href="tel:+91 99206 62103">
              <Button size="lg" className="btn-cta text-lg px-10 py-7 rounded-xl gap-3">
                <Phone className="w-6 h-6" />
                <span className="flex flex-col items-start">
                  <span className="text-xs font-normal opacity-90">Call Now – 24×7</span>
                  <span className="font-bold">+91 99206 62103</span>
                </span>
              </Button>
            </a>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Services;