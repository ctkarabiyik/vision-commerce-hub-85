import { Shield, Truck, Headphones, Award, RefreshCw, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Authorized Distributor",
    description: "Official partner of 20+ leading camera manufacturers with full warranty support.",
  },
  {
    icon: Truck,
    title: "Fast Shipping",
    description: "Same-day dispatch on in-stock items. Global delivery with tracking.",
  },
  {
    icon: Headphones,
    title: "Expert Support",
    description: "Technical engineers available 24/7 to help with selection and integration.",
  },
  {
    icon: Award,
    title: "Quality Guaranteed",
    description: "Every camera tested and certified before shipment. 30-day returns.",
  },
  {
    icon: RefreshCw,
    title: "Demo Program",
    description: "Try before you buy. Free evaluation units for qualified projects.",
  },
  {
    icon: Users,
    title: "Trusted by Industry",
    description: "Serving 2,000+ companies in automotive, electronics, and pharma.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="about" className="py-20 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider mb-2">
            <div className="w-8 h-0.5 bg-primary" />
            Why Choose Us
            <div className="w-8 h-0.5 bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Your Trusted Vision Partner
          </h2>
          <p className="text-accent-foreground/70 max-w-2xl mx-auto">
            With 15+ years of experience, we provide the expertise and support you need 
            to implement successful machine vision solutions.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group flex gap-4 p-6 rounded-sm bg-accent-foreground/5 border border-accent-foreground/10 hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded bg-primary/20 flex items-center justify-center flex-shrink-0 group-hover:bg-primary transition-colors duration-300">
                <feature.icon className="w-6 h-6 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-accent-foreground/70">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
