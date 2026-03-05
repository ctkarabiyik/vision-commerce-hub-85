import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import LocaleLink from "@/components/LocaleLink";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ChevronRight, Mail, Phone, MapPin, Clock, CheckCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { z } from "zod";

const contactSchema = z.object({
  firstName: z.string().trim().min(1, "First name is required").max(100),
  lastName: z.string().trim().min(1, "Last name is required").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z.string().trim().max(30).optional().default(""),
  company: z.string().trim().max(200).optional().default(""),
  role: z.string().trim().max(100).optional().default(""),
  product: z.string().trim().max(200).optional().default(""),
  quantity: z.string().trim().max(100).optional().default(""),
  message: z.string().trim().min(1, "Please describe your project or inquiry").max(5000),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactUs = () => {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const prefilledProduct = searchParams.get("product") || "";

  const [formData, setFormData] = useState<ContactFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    role: "",
    product: prefilledProduct,
    quantity: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
    // Clear error on change
    if (errors[id as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [id]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactFormData;
        if (!fieldErrors[field]) {
          fieldErrors[field] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    const data = result.data;

    const subject = encodeURIComponent(
      `Quote Request${data.product ? ` – ${data.product}` : ""} from ${data.firstName} ${data.lastName}`
    );

    const bodyLines = [
      `Name: ${data.firstName} ${data.lastName}`,
      `Email: ${data.email}`,
      data.phone ? `Phone: ${data.phone}` : "",
      data.company ? `Company: ${data.company}` : "",
      data.role ? `Role: ${data.role}` : "",
      data.product ? `Product: ${data.product}` : "",
      data.quantity ? `Quantity: ${data.quantity}` : "",
      "",
      "Message:",
      data.message,
    ]
      .filter(Boolean)
      .join("\n");

    const body = encodeURIComponent(bodyLines);
    window.location.href = `mailto:sales2@alarge.com.tr?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-12 bg-secondary">
        <div className="container mx-auto px-4">
          <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <LocaleLink to="/" className="hover:text-primary transition-colors">{t("common.home")}</LocaleLink>
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
                {submitted ? (
                  <div className="flex flex-col items-center justify-center py-12 text-center">
                    <CheckCircle className="w-16 h-16 text-primary mb-4" />
                    <h2 className="text-2xl font-bold text-foreground mb-2">{t("contactPage.thankYouTitle")}</h2>
                    <p className="text-muted-foreground mb-6 max-w-md">
                      {t("contactPage.thankYouMessage")}
                    </p>
                    <Button variant="outline" onClick={() => setSubmitted(false)}>
                      {t("contactPage.sendAnother")}
                    </Button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-foreground mb-6">{t("contactPage.formTitle")}</h2>
                    <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="firstName">{t("contactPage.firstName")} *</Label>
                          <Input id="firstName" value={formData.firstName} onChange={handleChange} placeholder={t("contactPage.placeholderFirstName")} className={errors.firstName ? "border-destructive" : ""} />
                          {errors.firstName && <p className="text-sm text-destructive">{errors.firstName}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="lastName">{t("contactPage.lastName")} *</Label>
                          <Input id="lastName" value={formData.lastName} onChange={handleChange} placeholder={t("contactPage.placeholderLastName")} className={errors.lastName ? "border-destructive" : ""} />
                          {errors.lastName && <p className="text-sm text-destructive">{errors.lastName}</p>}
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="email">{t("contactPage.email")} *</Label>
                          <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder={t("contactPage.placeholderEmail")} className={errors.email ? "border-destructive" : ""} />
                          {errors.email && <p className="text-sm text-destructive">{errors.email}</p>}
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">{t("contactPage.phone")}</Label>
                          <Input id="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder={t("contactPage.placeholderPhone")} />
                        </div>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company">{t("contactPage.company")}</Label>
                          <Input id="company" value={formData.company} onChange={handleChange} placeholder={t("contactPage.placeholderCompany")} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="role">{t("contactPage.role")}</Label>
                          <Input id="role" value={formData.role} onChange={handleChange} placeholder={t("contactPage.placeholderRole")} />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="product">{t("contactPage.product")}</Label>
                        <Input id="product" value={formData.product} onChange={handleChange} placeholder={t("contactPage.placeholderProduct")} />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="quantity">{t("contactPage.quantity")}</Label>
                        <Input id="quantity" value={formData.quantity} onChange={handleChange} placeholder={t("contactPage.placeholderQuantity")} />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">{t("contactPage.projectDetails")} *</Label>
                        <Textarea
                          id="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder={t("contactPage.placeholderMessage")}
                          rows={5}
                          className={errors.message ? "border-destructive" : ""}
                        />
                        {errors.message && <p className="text-sm text-destructive">{errors.message}</p>}
                      </div>

                      <Button type="submit" size="lg" className="w-full sm:w-auto">
                        {t("contactPage.submit")}
                      </Button>
                    </form>
                  </>
                )}
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
                       <p className="text-muted-foreground">Yıldız Teknik Üniversitesi Davutpaşa Teknopark</p>
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
    </div>
  );
};

export default ContactUs;