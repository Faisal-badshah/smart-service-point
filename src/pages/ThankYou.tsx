import { Helmet } from "react-helmet-async";
import Layout from "@/components/layout/Layout";
import { Phone, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const ThankYou = () => {
  return (
    <>
      <Helmet>
        <title>Request Received | Smart Service</title>
        <meta
          name="description"
          content="Your service request has been received. Our technician will contact you shortly."
        />
        <link rel="canonical" href="https://homecareappliances.in/thank-you" />
      </Helmet>

      <Layout>
        <section className="py-20">
          <div className="container-custom max-w-2xl mx-auto text-center">
            
            {/* Success Icon */}
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center">
                <CheckCircle className="w-12 h-12 text-green-600" />
              </div>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold mb-4">
              Request Received!
            </h1>

            {/* Message */}
            <p className="text-lg text-muted-foreground mb-6">
              Thank you for contacting Smart Service.
              <br />
              Our team will call you within <strong>30 minutes</strong> to confirm your service.
            </p>

            {/* Trust Points */}
            <div className="bg-card border border-border rounded-xl p-6 mb-8 text-left">
              <p className="font-semibold mb-2">What happens next?</p>
              <ul className="text-muted-foreground space-y-1 text-sm">
                <li>• Our technician will call you shortly</li>
                <li>• Service will be scheduled at your convenience</li>
                <li>• Genuine Siemens & Bosch parts will be used</li>
                <li>• 24×7 doorstep service across Mumbai</li>
              </ul>
            </div>

            {/* Urgent CTA */}
            <p className="mb-4 font-medium">
              Need urgent assistance?
            </p>

            <a href="tel:+919920662103">
              <Button className="btn-cta h-12 text-lg">
                <Phone className="w-5 h-5 mr-2" />
                Call Now – 24×7 Support
              </Button>
            </a>

            {/* Reassurance */}
            <p className="mt-6 text-sm text-muted-foreground">
              If you submitted this by mistake, you can safely ignore this page.
            </p>

          </div>
        </section>
      </Layout>
    </>
  );
};

export default ThankYou;
