import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to Upgrade Your Vision System?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
            Our engineers are ready to help you find the perfect camera for your application. 
            Get a custom quote within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="heroOutline" className="group">
              Get a Quote
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="heroOutline">
              <Phone className="w-5 h-5" />
              Call Us Now
            </Button>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 pt-8 border-t border-primary-foreground/20">
            <a href="tel:+18001234567" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Phone className="w-5 h-5" />
              <span>1-800-VISION</span>
            </a>
            <a href="mailto:sales@visiontech.com" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground transition-colors">
              <Mail className="w-5 h-5" />
              <span>sales@visiontech.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;
