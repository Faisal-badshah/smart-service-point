import { Helmet } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';
import Hero from '@/components/home/Hero';
import FeaturedServices from '@/components/home/FeaturedServices';
import Highlights from '@/components/home/Highlights'; 
import ServicesPreview from '@/components/home/ServicesPreview';
import Testimonials from '@/components/home/Testimonials';
import CTA from '@/components/home/CTA';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Siemens & Bosch Appliance Repair Mumbai | Smart Service - 24x7 Doorstep Service</title>
        <meta 
          name="description" 
          content="Expert Siemens & Bosch washing machine, fridge, AC, dishwasher repair in Mumbai. Genuine parts, 24x7 doorstep service in 60 minutes. Call +91 99206 62103" 
        />
        <meta name="keywords" content="Siemens washing machine service centre Mumbai, Bosch appliance repair near me, washing machine repair Mumbai, Siemens service Mumbai, Bosch service Mumbai, fridge repair, AC repair, dishwasher repair, appliance service Mumbai" />
        <link rel="canonical" href="https://homecareappliances.in" />
      </Helmet>

      <Layout>
        <Hero />
        <FeaturedServices />
        <Highlights />
        <ServicesPreview />
        <Testimonials />
        <CTA />
      </Layout>
    </>
  );
};

export default Index;