import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download, Code, Wrench, Monitor, Cpu, Settings } from "lucide-react";

const softwareCategories = [
  {
    title: "Camera Software Suites",
    items: [
      { name: "Pylon Camera Software Suite", version: "v7.4.0", size: "245 MB", description: "Complete SDK for Basler cameras with viewer, API, and samples", icon: Code },
      { name: "VisionPro Development Kit", version: "v9.2.1", size: "1.2 GB", description: "Advanced vision tools for industrial automation", icon: Code },
      { name: "HALCON Runtime", version: "v23.05", size: "890 MB", description: "Machine vision library for image processing", icon: Code },
    ]
  },
  {
    title: "Drivers & Firmware",
    items: [
      { name: "GigE Vision Driver", version: "v2.1.3", size: "12 MB", description: "Universal driver for GigE Vision cameras", icon: Wrench },
      { name: "USB3 Vision Driver", version: "v1.8.2", size: "8 MB", description: "High-speed USB3 Vision interface driver", icon: Wrench },
      { name: "Camera Link Driver Pack", version: "v3.0.1", size: "45 MB", description: "Complete driver package for Camera Link interfaces", icon: Wrench },
      { name: "CoaXPress Driver", version: "v2.0.0", size: "22 MB", description: "High-bandwidth CoaXPress interface driver", icon: Wrench },
    ]
  },
  {
    title: "Utilities & Tools",
    items: [
      { name: "Camera Selector Tool", version: "v4.1.0", size: "15 MB", description: "Find the perfect camera for your application", icon: Monitor },
      { name: "Lens Calculator", version: "v2.3.0", size: "5 MB", description: "Calculate optimal lens specifications", icon: Settings },
      { name: "Bandwidth Calculator", version: "v1.5.0", size: "3 MB", description: "Estimate data bandwidth requirements", icon: Cpu },
      { name: "IP Configurator", version: "v3.2.1", size: "8 MB", description: "Configure network settings for GigE cameras", icon: Settings },
    ]
  }
];

const SoftwareDownloads = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Software Downloads
            </h1>
            <p className="text-lg text-muted-foreground">
              Download the latest drivers, SDKs, and utilities for your industrial cameras. 
              All software is compatible with Windows, Linux, and macOS platforms.
            </p>
          </div>
        </div>
      </section>

      {/* Software Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-12">
            {softwareCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-bold text-foreground mb-6">{category.title}</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {category.items.map((item, itemIndex) => (
                    <div
                      key={itemIndex}
                      className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors group"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                          <item.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-foreground mb-1">{item.name}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                          <div className="flex flex-wrap items-center justify-between gap-3">
                            <div className="flex items-center gap-4 text-xs text-muted-foreground">
                              <span>{item.version}</span>
                              <span>•</span>
                              <span>{item.size}</span>
                            </div>
                            <Button size="sm" variant="outline" className="gap-2">
                              <Download className="w-4 h-4" />
                              Download
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* System Requirements */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">System Requirements</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <h3 className="font-semibold text-foreground mb-2">Windows</h3>
              <p className="text-sm text-muted-foreground">Windows 10/11 (64-bit)</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <h3 className="font-semibold text-foreground mb-2">Linux</h3>
              <p className="text-sm text-muted-foreground">Ubuntu 20.04+ / CentOS 8+</p>
            </div>
            <div className="bg-card border border-border rounded-xl p-6 text-center">
              <h3 className="font-semibold text-foreground mb-2">macOS</h3>
              <p className="text-sm text-muted-foreground">macOS 12 Monterey+</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SoftwareDownloads;
