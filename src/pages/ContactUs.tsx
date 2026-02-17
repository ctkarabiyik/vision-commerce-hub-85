import { Link, useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ChevronRight, Mail, Phone, MapPin, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";

const ContactUs = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const prefilledProduct = searchParams.get("product") || "";

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-12 bg-secondary">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary transition-colors">{t("common.home")}</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">{t("contactPage.breadcrumb")}</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-4">
              {t("contactPage.title")}
            </h1>
            <p className="text-lg text-muted-foreground">
              {t("contactPage.description")}
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
                <h2 className="text-2xl font-bold text-foreground mb-6">{t("contactPage.formTitle")}</h2>
                
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">{t("contactPage.firstName")}</Label>
                      <Input id="firstName" placeholder="John" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">{t("contactPage.lastName")}</Label>
                      <Input id="lastName" placeholder="Doe" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">{t("contactPage.email")}</Label>
                      <Input id="email" type="email" placeholder="john@company.com" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">{t("contactPage.phone")}</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 000-0000" />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="company">{t("contactPage.company")}</Label>
                      <Input id="company" placeholder="Acme Corporation" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="role">{t("contactPage.role")}</Label>
                      <Input id="role" placeholder="Engineering Manager" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="product">{t("contactPage.product")}</Label>
                    <Input id="product" defaultValue={prefilledProduct} placeholder="e.g., ACE-2040 Pro Series, Area Scan Cameras" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="quantity">{t("contactPage.quantity")}</Label>
                    <Input id="quantity" placeholder="e.g., 10-50 units" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t("contactPage.projectDetails")}</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project requirements, application, timeline, or any specific questions..."
                      rows={5} />
                  </div>

                  <Button type="submit" size="lg" className="w-full sm:w-auto">
                    {t("contactPage.submit")}
                  </Button>
                </form>
              </div>
            </div>

            {/* Contact Info Sidebar */}
            <div className="lg:col-span-1 order-first lg:order-last">
              <div className="bg-card border border-border rounded-lg p-8 sticky top-24">
                <h3 className="text-xl font-bold text-foreground mb-6">{t("contactPage.getInTouch")}</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">{t("contactPage.emailLabel")}</div>
                      <a className="text-muted-foreground hover:text-primary transition-colors" href="mailto:sales2@alarge.com.tr">
                        sales2@alarge.com.tr
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">{t("contactPage.phoneLabel")}</div>
                      <a className="text-muted-foreground hover:text-primary transition-colors" href="tel:+902122786102">
                        +90 (212) 278 61 02
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-semibold text-foreground mb-1">{t("contactPage.addressLabel")}</div>
                      <p className="text-muted-foreground">Yıldız Teknik Üniversitesi Davutpaşa Teknopark
                        <br />
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
                      <div className="font-semibold text-foreground mb-1">{t("contactPage.businessHours")}</div>
                      <p className="text-muted-foreground whitespace-pre-line">
                        {t("contactPage.businessHoursValue")}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    {t("contactPage.urgentHelp")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>);
};

export default ContactUs;
