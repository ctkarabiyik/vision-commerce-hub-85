import { Camera, Scan, CircuitBoard, Settings, Microscope, Box } from "lucide-react";

const categories = [
  {
    icon: Camera,
    title: "Area Scan Cameras",
    description: "High-resolution sensors for quality inspection and measurement",
    count: 156,
  },
  {
    icon: Scan,
    title: "Line Scan Cameras",
    description: "Continuous imaging for web inspection and sorting",
    count: 84,
  },
  {
    icon: CircuitBoard,
    title: "Smart Cameras",
    description: "Built-in processing for edge AI applications",
    count: 62,
  },
  {
    icon: Microscope,
    title: "3D Cameras",
    description: "Depth sensing and volumetric measurement",
    count: 45,
  },
  {
    icon: Settings,
    title: "Embedded Vision",
    description: "Compact modules for OEM integration",
    count: 98,
  },
  {
    icon: Box,
    title: "Accessories",
    description: "Lenses, cables, lighting, and enclosures",
    count: 320,
  },
];

const Categories = () => {
  return (
    <section id="categories" className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold uppercase tracking-wider mb-2">
            <div className="w-8 h-0.5 bg-primary" />
            Product Categories
            <div className="w-8 h-0.5 bg-primary" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Find the Right Camera
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Browse our comprehensive catalog of machine vision cameras, organized by technology and application.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <a
              key={index}
              href={`#${category.title.toLowerCase().replace(/\s+/g, '-')}`}
              className="group bg-card border border-border rounded-sm p-6 hover:border-primary transition-all duration-300 hover-lift"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-300">
                  <category.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {category.description}
                  </p>
                  <span className="text-xs font-semibold uppercase tracking-wider text-primary">
                    {category.count} Products
                  </span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
