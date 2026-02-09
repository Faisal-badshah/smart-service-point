import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: 'Request Submitted!',
      description: 'We will call you back within 30 minutes.',
    });

    setFormData({ name: '', phone: '', service: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const whatsappUrl = 'https://wa.me/912269470420?text=' + encodeURIComponent('Hi, I need Siemens/Bosch appliance repair. Please help!');

  return (
    <>
      <Helmet>
        <title>Contact Us | Smart Service - Siemens & Bosch Repair Mumbai | Call +91 99206 62103</title>
        <meta 
          name="description" 
          content="Contact Smart Service for Siemens & Bosch appliance repair in Mumbai. Call +91 99206 62103 for 24x7 doorstep service. Located near Chakala Metro Station. Fast response guaranteed!" 
        />
        <meta name="keywords" content="Siemens service centre near me, Bosch service centre Mumbai, appliance repair contact, washing machine repair contact Mumbai" />
        <link rel="canonical" href="https://homecareappliances.in/contact" />
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
                Get In Touch
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
              <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
                Get in touch for fast, reliable appliance repair service. We're available 24×7!
              </p>
            </div>
          </div>
        </section>

        {/* Contact Content */}
        <section className="section-padding">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h2 className="heading-secondary mb-6">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Need help with your Siemens or Bosch appliance? Contact us now for fast, professional repair service at your doorstep.
                </p>

                <div className="space-y-6">
                  {/* Phone - Primary CTA */}
                  <a 
                    href="tel:+912269470420"
                    className="flex items-start gap-4 p-5 rounded-xl bg-cta/10 hover:bg-cta/20 transition-colors group border-2 border-cta/30"
                  >
                    <div className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                      style={{ background: 'linear-gradient(135deg, hsl(134 61% 41%) 0%, hsl(134 61% 35%) 100%)' }}
                    >
                      <Phone className="w-7 h-7 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">Toll-Free Number</p>
                      <p className="text-2xl font-bold text-cta">+91 99206 62103</p>
                      <p className="text-sm text-muted-foreground">Click to call now – 24×7 Service</p>
                    </div>
                  </a>

                  {/* WhatsApp */}
                  <a 
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-4 p-4 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-[#25D366] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <MessageCircle className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-[#25D366] font-medium">Chat with us instantly</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a 
                    href="mailto:info@homecareappliances.in"
                    className="flex items-start gap-4 p-4 rounded-xl bg-secondary hover:bg-secondary/80 transition-colors"
                  >
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <p className="font-semibold">Email Us</p>
                      <p className="text-accent">info@homecareappliances.in</p>
                    </div>
                  </a>

                  {/* Address */}
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold">Our Location</p>
                      <p className="text-muted-foreground">
                        Ekta CHS Shop No. 4, Near Chakala Metro Station,<br />
                        Chakala, Mumbai, Maharashtra 400059
                      </p>
                    </div>
                  </div>

                  {/* Working Hours */}
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-secondary">
                    <div className="w-12 h-12 bg-cta/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-cta" />
                    </div>
                    <div>
                      <p className="font-semibold">Working Hours</p>
                      <p className="text-cta font-bold text-lg">24×7 Availability</p>
                      <p className="text-sm text-muted-foreground">We never close – call anytime!</p>
                    </div>
                  </div>
                </div>

                {/* Service Area */}
                <div className="mt-8 p-6 rounded-xl border border-border bg-card">
                  <h3 className="font-semibold mb-3">Service Coverage Area</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    We provide doorstep service within 40 km radius covering:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-secondary rounded-full text-sm font-medium">Mumbai</span>
                    <span className="px-3 py-1.5 bg-secondary rounded-full text-sm font-medium">Navi Mumbai</span>
                    <span className="px-3 py-1.5 bg-secondary rounded-full text-sm font-medium">Thane</span>
                    <span className="px-3 py-1.5 bg-secondary rounded-full text-sm font-medium">Andheri</span>
                    <span className="px-3 py-1.5 bg-secondary rounded-full text-sm font-medium">Bandra</span>
                    <span className="px-3 py-1.5 bg-secondary rounded-full text-sm font-medium">Powai</span>
                    <span className="px-3 py-1.5 bg-secondary rounded-full text-sm font-medium">Mulund</span>
                    <span className="px-3 py-1.5 bg-secondary rounded-full text-sm font-medium">Vashi</span>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <div className="bg-card rounded-2xl p-8 shadow-xl border border-border">
                  <h2 className="text-2xl font-bold mb-2">Request a Callback</h2>
                  <p className="text-muted-foreground mb-6">
                    Fill in your details and we'll call you back within 30 minutes
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        className="h-12"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium mb-2">
                        Phone Number *
                      </label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Enter your phone number"
                        className="h-12"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium mb-2">
                        Service Required *
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full h-12 px-3 rounded-md border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Select a service</option>
                        <option value="siemens-washing-machine">Siemens Washing Machine Repair</option>
                        <option value="bosch-washing-machine">Bosch Washing Machine Repair</option>
                        <option value="dryer">Dryer Repair</option>
                        <option value="dishwasher">Dishwasher Repair</option>
                        <option value="oven-microwave">Oven & Microwave Repair</option>
                        <option value="fridge">Refrigerator Repair</option>
                        <option value="ac">AC Repair</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Describe Your Issue
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Tell us about the problem with your appliance..."
                        rows={4}
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="btn-cta w-full h-12 text-lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        'Submitting...'
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Submit Request
                        </>
                      )}
                    </Button>
                  </form>

                  <p className="mt-4 text-sm text-center text-muted-foreground">
                    Or call us directly at{' '}
                    <a href="tel:+912269470420" className="text-cta font-bold hover:underline">
                      +91 99206 62103
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Google Maps */}
        <section className="pb-16">
          <div className="container-custom">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-border">
              <iframe
                title="Smart Service Location - Near Chakala Metro Station, Mumbai"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.9441776892455!2d72.8621!3d19.1087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c9bb7d7f6c0d%3A0x8d5e4c5c5c5c5c5c!2sChakala%20Metro%20Station!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Contact;