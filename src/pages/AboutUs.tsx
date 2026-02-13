import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import WhyChooseUs from "@/components/WhyChooseUs";
import Applications from "@/components/Applications";
import Footer from "@/components/Footer";
import { ChevronRight } from "lucide-react";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-20 lg:pt-24">
        {/* Page Header */}
        <section className="py-12 bg-secondary border-b border-border">
          <div className="container mx-auto px-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link to="/" className="hover:text-primary transition-colors">Home</Link>
              <ChevronRight className="w-4 h-4" />
              <span className="text-foreground">About Us</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground">About Us</h1>
          </div>
        </section>

        <WhyChooseUs />
        <Applications />
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
