import { Shield, Truck, Headphones, Award, RefreshCw, Users } from "lucide-react";
import { useTranslation } from "react-i18next";

const WhyChooseUs = () => {
  const { t } = useTranslation();

  const features = [
    {
      icon: Shield,
      title: t("whyChooseUs.features.authorizedTitle"),
      description: t("whyChooseUs.features.authorizedDesc"),
    },
    {
      icon: Truck,
      title: t("whyChooseUs.features.shippingTitle"),
      description: t("whyChooseUs.features.shippingDesc"),
    },
    {
      icon: Headphones,
      title: t("whyChooseUs.features.supportTitle"),
      description: t("whyChooseUs.features.supportDesc"),
    },
    {
      icon: Award,
      title: t("whyChooseUs.features.qualityTitle"),
      description: t("whyChooseUs.features.qualityDesc"),
    },
    {
      icon: RefreshCw,
      title: t("whyChooseUs.features.demoTitle"),
      description: t("whyChooseUs.features.demoDesc"),
    },
    {
      icon: Users,
      title: t("whyChooseUs.features.trustedTitle"),
      description: t("whyChooseUs.features.trustedDesc"),
    },
  ];

  return (
    <section id="about" className="py-20 bg-accent text-accent-foreground">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider mb-2">
            <div className="w-8 h-0.5 bg-primary" />
            {t("whyChooseUs.label")}
            <div className="w-8 h-0.5 bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t("whyChooseUs.title")}
          </h2>
          <p className="text-accent-foreground/70 max-w-2xl mx-auto">
            {t("whyChooseUs.description")}
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
