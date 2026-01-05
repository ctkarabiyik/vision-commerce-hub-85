import { Camera, Facebook, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-primary rounded-sm flex items-center justify-center">
                <Camera className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-tight">VISIONTECH</span>
                <span className="text-[10px] uppercase tracking-widest text-accent-foreground/60 -mt-1">Industrial Cameras</span>
              </div>
            </a>
            <p className="text-sm text-accent-foreground/70 mb-6">
              Your trusted partner for industrial machine vision cameras and components since 2008.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded bg-accent-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-accent-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-accent-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded bg-accent-foreground/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Products</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">Area Scan Cameras</a></li>
              <li><a href="#" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">Line Scan Cameras</a></li>
              <li><a href="#" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">Smart Cameras</a></li>
              <li><a href="#" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">3D Cameras</a></li>
              <li><a href="#" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">Embedded Vision</a></li>
              <li><a href="#" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">Accessories</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">About Us</a></li>
              <li><a href="#" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">Careers</a></li>
              <li><a href="#" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">Partners</a></li>
              <li><a href="#" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">News & Events</a></li>
              <li><a href="#" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">Technical Support</a></li>
              <li><a href="#" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">Software Downloads</a></li>
              <li><a href="#" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">RMA & Returns</a></li>
              <li><a href="#" className="text-sm text-accent-foreground/70 hover:text-primary transition-colors">FAQs</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-accent-foreground/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-accent-foreground/60">
              © 2024 VisionTech. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm text-accent-foreground/60 hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm text-accent-foreground/60 hover:text-primary transition-colors">Terms of Service</a>
              <a href="#" className="text-sm text-accent-foreground/60 hover:text-primary transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
