import { Factory, Car, Pill, Cpu, Package, Microscope } from "lucide-react";

const applications = [
  {
    icon: Factory,
    title: "Manufacturing & Quality Control",
    description: "Automated defect detection, dimensional measurement, and assembly verification for high-speed production lines.",
    industries: ["Automotive", "Electronics", "Aerospace"],
  },
  {
    icon: Car,
    title: "Automotive Industry",
    description: "Vision-guided robotics, paint inspection, and component verification for automotive manufacturing and assembly.",
    industries: ["Body Assembly", "Paint Shop", "Final Inspection"],
  },
  {
    icon: Pill,
    title: "Pharmaceutical & Medical",
    description: "Label verification, fill-level inspection, and contamination detection for regulated medical environments.",
    industries: ["Drug Packaging", "Medical Devices", "Lab Automation"],
  },
  {
    icon: Package,
    title: "Logistics & Packaging",
    description: "Barcode reading, package dimensioning, and sorting automation for warehouses and fulfillment centers.",
    industries: ["E-commerce", "Distribution", "Food & Beverage"],
  },
  {
    icon: Cpu,
    title: "Electronics & Semiconductor",
    description: "PCB inspection, chip alignment, and solder joint verification for precision electronics manufacturing.",
    industries: ["PCB Assembly", "Chip Fabrication", "Display Manufacturing"],
  },
  {
    icon: Microscope,
    title: "Research & Laboratory",
    description: "High-resolution imaging for scientific research, microscopy, and specialized measurement applications.",
    industries: ["Life Sciences", "Materials Science", "Metrology"],
  },
];

const Applications = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary mb-2 block">
            Industry Solutions
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Applications of Industrial Cameras
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From high-speed manufacturing to precision laboratory work, our cameras power vision systems across diverse industries.
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
