import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Andheri, Mumbai',
    rating: 5,
    text: 'Excellent service! The technician arrived within 45 minutes and fixed my Bosch washing machine quickly. Very professional and used genuine parts.',
  },
  {
    name: 'Rajesh Patel',
    location: 'Thane',
    rating: 5,
    text: 'Best appliance repair service in Mumbai. They repaired my Siemens dishwasher perfectly. Highly recommend Smart Service!',
  },
  {
    name: 'Anita Desai',
    location: 'Navi Mumbai',
    rating: 5,
    text: 'Called at 10 PM and they still responded immediately. Fixed my fridge the same night. Amazing 24x7 service!',
  },
];

const Testimonials = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-secondary mb-4">What Our Customers Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Trusted by thousands of families across Mumbai for their appliance repair needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-6 shadow-sm relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/10" />
              
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                "{testimonial.text}"
              </p>

              <div className="border-t border-border pt-4">
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">Authorized service for</p>
          <div className="flex justify-center gap-8 items-center">
            <div className="px-6 py-3 bg-background rounded-lg shadow-sm">
              <span className="font-bold text-xl text-primary">SIEMENS</span>
            </div>
            <div className="px-6 py-3 bg-background rounded-lg shadow-sm">
              <span className="font-bold text-xl text-primary">BOSCH</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
