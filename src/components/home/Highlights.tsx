import { Clock, Shield, MapPin, Wrench, Phone, Award } from 'lucide-react';

const highlights = [
  {
    icon: Clock,
    title: '60 Min Response',
    description: 'Get expert technician at your doorstep within 60 minutes of your call.',
  },
  {
    icon: Shield,
    title: 'Genuine Parts',
    description: 'We use only authentic Siemens & Bosch spare parts for all repairs.',
  },
  {
    icon: MapPin,
    title: '40 KM Coverage',
    description: 'Serving Mumbai, Navi Mumbai, and Thane with doorstep service.',
  },
  {
    icon: Phone,
    title: '24x7 Availability',
    description: 'Round the clock support. Call us anytime, we are always available.',
  },
  {
    icon: Wrench,
    title: 'Expert Technicians',
    description: 'Trained and certified professionals for Siemens & Bosch appliances.',
  },
  {
    icon: Award,
    title: 'Quality Assured',
    description: 'Warranty on repairs with guaranteed customer satisfaction.',
  },
];

const Highlights = () => {
  return (
    <section className="section-padding bg-secondary/50">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-secondary mb-4">Why Choose Smart Service?</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Mumbai's trusted experts for Siemens & Bosch home appliance repairs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                <item.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
              <p className="text-muted-foreground text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Highlights;
