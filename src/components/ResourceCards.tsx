import { Download, FileText, BookOpen, Code, Wrench, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const softwareDownloads = [
  {
    title: "VisionTech SDK",
    description: "Complete software development kit for camera integration",
    version: "v3.2.1",
    icon: Code,
  },
  {
    title: "Camera Viewer",
    description: "Live preview and configuration utility",
    version: "v2.1.0",
    icon: Wrench,
  },
  {
    title: "Firmware Updates",
    description: "Latest firmware for all camera models",
    version: "v1.8.4",
    icon: Download,
  },
];

const knowledgeArticles = [
  {
    title: "Getting Started Guide",
    description: "Step-by-step setup instructions for first-time users",
    category: "Tutorial",
    icon: BookOpen,
  },
  {
    title: "Integration Best Practices",
    description: "Optimize camera performance in industrial environments",
    category: "Technical",
    icon: FileText,
  },
  {
    title: "Troubleshooting FAQ",
    description: "Solutions to common issues and questions",
    category: "Support",
    icon: HelpCircle,
  },
];

const ResourceCards = () => {
  return (
    <section className="py-20 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Software Downloads */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Software Downloads</h2>
            <p className="text-muted-foreground mb-6">
              Tools and utilities for camera integration and development
            </p>
            <div className="space-y-4">
              {softwareDownloads.map((item, index) => (
                <div
                  key={index}
                  className="bg-card border border-border rounded-lg p-4 flex items-center gap-4 hover:border-primary/50 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="text-sm text-muted-foreground truncate">{item.description}</p>
                  </div>
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                      {item.version}
                    </span>
                    <Button size="sm" variant="outline" className="gap-1">
                      <Download className="w-4 h-4" />
                      Download
                    </Button>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="link" className="mt-4 px-0">
              View all downloads →
            </Button>
          </div>

          {/* Knowledge Articles */}
          <div>
            <h2 className="text-2xl font-bold text-foreground mb-2">Knowledge Base</h2>
            <p className="text-muted-foreground mb-6">
              Guides, tutorials, and technical documentation
            </p>
            <div className="space-y-4">
              {knowledgeArticles.map((article, index) => (
                <a
                  key={index}
                  href="#"
                  className="bg-card border border-border rounded-lg p-4 flex items-center gap-4 hover:border-primary/50 transition-colors group block"
                >
                  <div className="w-12 h-12 rounded-lg bg-accent/50 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                    <article.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground truncate">{article.description}</p>
                  </div>
                  <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded flex-shrink-0">
                    {article.category}
                  </span>
                </a>
              ))}
            </div>
            <Button variant="link" className="mt-4 px-0">
              Browse all articles →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourceCards;
