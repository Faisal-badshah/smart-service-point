import { Link } from 'react-router-dom';
import { 
  WashingMachine, 
  Wind, 
  UtensilsCrossed, 
  Microwave, 
  Refrigerator, 
  Thermometer,
  ArrowRight,
  Phone
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    icon: WashingMachine,
    title: 'Washing Machine',
    description: 'Expert repair for all Siemens & Bosch washing machine models.',
  },
  {
    icon: Wind,
    title: 'Dryer Repair',
    description: 'Professional dryer repair and maintenance services.',
  },
  {
    icon: UtensilsCrossed,
    title: 'Dishwasher',
    description: 'Complete dishwasher repair and troubleshooting.',
  },
  {
    icon: Microwave,
    title: 'Oven & Microwave',
    description: 'Repair services for ovens and microwave appliances.',
  },
  {
    icon: Refrigerator,
    title: 'Refrigerator',
    description: 'Fridge repair including cooling issues and compressor.',
  },
  {
    icon: Thermometer,
    title: 'AC Repair',
    description: 'Air conditioner repair, gas refill, and servicing.',
  },
];

const ServicesPreview = () => {
  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-secondary mb-4">Our Repair Services</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Specialized in Siemens & Bosch home appliances. From washing machines to air conditioners, we fix it all.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-service group cursor-pointer"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
              <a href="tel:+91 99206 62103" className="inline-flex items-center text-sm font-medium text-primary hover:underline gap-1">
                <Phone className="w-4 h-4" />
                Book Now
              </a>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link to="/services">
            <Button size="lg" className="btn-primary gap-2">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
