import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, FileText, Video, HelpCircle, ChevronRight } from "lucide-react";

const categories = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description: "Quick start guides and setup tutorials",
    articles: 24,
  },
  {
    icon: FileText,
    title: "Technical Documentation",
    description: "Detailed specifications and API references",
    articles: 86,
  },
  {
    icon: Video,
    title: "Video Tutorials",
    description: "Step-by-step video guides",
    articles: 32,
  },
  {
    icon: HelpCircle,
    title: "Troubleshooting",
    description: "Common issues and solutions",
    articles: 45,
  },
];

const popularArticles = [
  {
    title: "How to Configure GigE Camera Network Settings",
    category: "Getting Started",
    readTime: "5 min read",
  },
  {
    title: "Understanding Camera Resolution and Frame Rate Trade-offs",
    category: "Technical Documentation",
    readTime: "8 min read",
  },
  {
    title: "Troubleshooting Image Quality Issues",
    category: "Troubleshooting",
    readTime: "6 min read",
  },
  {
    title: "Lens Selection Guide for Machine Vision",
    category: "Technical Documentation",
    readTime: "12 min read",
  },
  {
    title: "Setting Up Trigger Modes for Industrial Cameras",
    category: "Getting Started",
    readTime: "7 min read",
  },
  {
    title: "Optimizing Exposure and Gain Settings",
    category: "Technical Documentation",
    readTime: "10 min read",
  },
];

const latestArticles = [
  {
    title: "New Pylon 7.4 Features Overview",
    date: "Jan 15, 2026",
    category: "Product Updates",
  },
  {
    title: "Migrating from USB2 to USB3 Vision Cameras",
    date: "Jan 12, 2026",
    category: "Getting Started",
  },
  {
    title: "Best Practices for High-Speed Imaging",
    date: "Jan 10, 2026",
    category: "Technical Documentation",
  },
  {
    title: "Camera Link vs CoaXPress: A Comparison",
    date: "Jan 8, 2026",
    category: "Technical Documentation",
  },
];

const KnowledgeBase = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section with Search */}
      <section className="pt-32 pb-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Knowledge Base
            </h1>
            <p className="text-lg text-muted-foreground mb-8">
              Find answers, tutorials, and technical documentation for all your machine vision needs.
            </p>
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input 
                placeholder="Search articles, tutorials, and documentation..."
                className="pl-12 h-12 text-base"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-foreground mb-8">Browse by Category</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <a
                key={index}
                href="#"
                className="bg-card border border-border rounded-xl p-6 hover:border-primary/50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-2">{category.description}</p>
                <span className="text-xs text-primary font-medium">{category.articles} articles</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Popular & Latest Articles */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Popular Articles */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Popular Articles</h2>
              <div className="space-y-4">
                {popularArticles.map((article, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors group"
                  >
                    <h3 className="font-medium text-foreground group-hover:text-primary transition-colors mb-1">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground">
                      <span>{article.category}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Latest Articles */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Latest Articles</h2>
              <div className="space-y-4">
                {latestArticles.map((article, index) => (
                  <a
                    key={index}
                    href="#"
                    className="block bg-card border border-border rounded-lg p-4 hover:border-primary/50 transition-colors group"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <h3 className="font-medium text-foreground group-hover:text-primary transition-colors mb-1">
                          {article.title}
                        </h3>
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span>{article.category}</span>
                          <span>•</span>
                          <span>{article.date}</span>
                        </div>
                      </div>
                      <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Need Help CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 text-center">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
              <HelpCircle className="w-7 h-7 text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Can't find what you're looking for?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Our technical support team is here to help. Contact us for personalized assistance.
            </p>
            <Button size="lg">
              Contact Support
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default KnowledgeBase;
