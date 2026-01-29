import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ChevronRight, Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-12 bg-secondary">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary transition-colors">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">Contact Us</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-muted-foreground">
              Get in touch with our team for pricing, technical specifications, or custom solutions. 
              We typically respond within 24 business hours.
            </p>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-3 gap-12 flex flex-col-reverse lg:flex-row lg:grid">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card border border-border rounded-lg p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Contact Information</h2>
                
                <form className="space-y-6">
                  {/* Name Fields */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  {/* Email & Phone */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="john@company.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>

                  {/* Company & Role */}
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name *</Label>
                      <Input id="company" placeholder="Acme Corporation" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">Your Role</Label>
                      <Input id="role" placeholder="Engineering Manager" />
                    </div>
                  </div>

                  {/* Product Interest */}
                  <div className="space-y-2">
                    <Label htmlFor="product">Product of Interest</Label>
                    <Input id="product" placeholder="e.g., ACE-2040 Pro Series, Area Scan Cameras" />
                  </div>

                  {/* Quantity */}
                  <div className="space-y-2">
                    <Label htmlFor="quantity">Estimated Quantity</Label>
                    <Input id="quantity" placeholder="e.g., 10-50 units" />
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your project requirements, application, timeline, or any specific questions..."
                      rows={5}
                    />
                  </div>

                  {/* Submit */}
                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    Submit Request
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 order-first lg:order-last">
              <div className="bg-card border border-border rounded-lg p-8 sticky top-24">
                <h3 className="text-xl font-bold text-foreground mb-6">Get in Touch</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Email</div>
                      <a href="mailto:sales@alargecamera.com" className="text-muted-foreground hover:text-primary transition-colors">
                        sales@alargecamera.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Phone</div>
                      <a href="tel:+18005551234" className="text-muted-foreground hover:text-primary transition-colors">
                        +1 (800) 555-1234
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Address</div>
                      <p className="text-muted-foreground">
                        123 Industrial Blvd<br />
                        San Jose, CA 95134<br />
                        United States
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">Business Hours</div>
                      <p className="text-muted-foreground">
                        Mon - Fri: 8:00 AM - 6:00 PM PST<br />
                        Sat - Sun: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Need immediate assistance? Call our sales team directly for urgent inquiries.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactUs;
