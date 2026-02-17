import { Factory, Scan, Cpu, Package, Microscope, Gauge } from "lucide-react";

const applications = [
  {
    icon: Factory,
    title: "Manufacturing & Quality Control",
    description: "Area scan cameras and telecentric lenses for automated defect detection, dimensional measurement, and assembly verification on production lines.",
    industries: ["Area Scan Cameras", "Telecentric Lenses", "FA Lenses"],
  },
  {
    icon: Scan,
    title: "Web & Surface Inspection",
    description: "Line scan cameras paired with line scan lenses for continuous inspection of textiles, films, paper, and printed materials at high speeds.",
    industries: ["Line Scan Cameras", "Line Scan Lenses"],
  },
  {
    icon: Cpu,
    title: "Electronics & Semiconductor",
    description: "High-resolution area scan cameras with telecentric lenses for PCB inspection, chip alignment, and solder joint verification.",
    industries: ["Area Scan Cameras", "Telecentric Lenses", "Macro Lenses"],
  },
  {
    icon: Package,
    title: "Logistics & Packaging",
    description: "Line scan and area scan cameras for barcode reading, label verification, package dimensioning, and sorting automation.",
    industries: ["Line Scan Cameras", "Area Scan Cameras", "FA Lenses"],
  },
  {
    icon: Gauge,
    title: "Precision Measurement",
    description: "Telecentric lenses with area scan cameras for non-contact dimensional gauging, profile measurement, and calibration tasks.",
    industries: ["Telecentric Lenses", "Area Scan Cameras", "Frame Grabbers"],
  },
  {
    icon: Microscope,
    title: "Research & Laboratory",
    description: "Specialized macro, infrared, and VR lenses combined with high-resolution cameras for scientific imaging and metrology.",
    industries: ["Macro Lenses", "Infrared Lenses", "VR Lenses"],
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
            See how our cameras and lenses power vision systems across diverse industries.
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
