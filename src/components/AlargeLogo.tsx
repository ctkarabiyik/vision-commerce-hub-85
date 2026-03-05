import headerLogo from "@/assets/alarge-logo.svg";
import footerLogo from "@/assets/alarge-logo-footer.svg";

interface AlargeLogoProps {
  className?: string;
  variant?: "dark" | "light";
}

const AlargeLogo = ({ className = "", variant = "dark" }: AlargeLogoProps) => {
  const src = variant === "dark" ? headerLogo : footerLogo;
  
  return (
    <img
      src={src}
      alt="Alarge Camera Logo"
      className={`${className}`}
      style={{ height: "auto", width: "auto" }}
    />
  );
};

export default AlargeLogo;
