import { Factory, Scan, Cpu, Package, Microscope, Gauge } from "lucide-react";
import { useTranslation } from "react-i18next";

const Applications = () => {
  const { t } = useTranslation();

  const applications = [
    {
      icon: Factory,
      title: t("applications.manufacturing.title"),
      description: t("applications.manufacturing.description"),
      industries: [t("cameraCategories.areaScan"), t("lensCategories.telecentric"), t("lensCategories.fa")],
    },
    {
      icon: Scan,
      title: t("applications.webInspection.title"),
      description: t("applications.webInspection.description"),
      industries: [t("cameraCategories.lineScan"), t("lensCategories.lineScan")],
    },
    {
      icon: Cpu,
      title: t("applications.electronics.title"),
      description: t("applications.electronics.description"),
      industries: [t("cameraCategories.areaScan"), t("lensCategories.telecentric"), t("lensCategories.macro")],
    },
    {
      icon: Package,
      title: t("applications.logistics.title"),
      description: t("applications.logistics.description"),
      industries: [t("cameraCategories.lineScan"), t("cameraCategories.areaScan"), t("lensCategories.fa")],
    },
    {
      icon: Gauge,
      title: t("applications.measurement.title"),
      description: t("applications.measurement.description"),
      industries: [t("lensCategories.telecentric"), t("cameraCategories.areaScan"), "Frame Grabbers"],
    },
    {
      icon: Microscope,
      title: t("applications.research.title"),
      description: t("applications.research.description"),
      industries: [t("lensCategories.macro"), t("lensCategories.infrared"), t("lensCategories.vr")],
    },
  ];

  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-2 block">
            {t("applications.label")}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("applications.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t("applications.description")}
          </p>
        </div>

        {/* Applications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {applications.map((app, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-6 hover-lift group"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <app.icon className="w-6 h-6 text-primary" />
              </div>
              
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                {app.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {app.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {app.industries.map((industry, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-muted-foreground border border-border"
                  >
                    {industry}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Applications;
