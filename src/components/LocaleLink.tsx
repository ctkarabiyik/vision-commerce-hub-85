import { Link, LinkProps } from "react-router-dom";
import { useLocalePath } from "@/hooks/useLocalePath";

interface LocaleLinkProps extends Omit<LinkProps, "to"> {
  to: string;
}

/**
 * A Link component that automatically prepends the current locale prefix.
 * Use this instead of <Link> for all internal navigation.
 */
const LocaleLink = ({ to, ...props }: LocaleLinkProps) => {
  const { localePath } = useLocalePath();
  
  // Don't prefix external links or anchor links
  if (to.startsWith("http") || to.startsWith("#") || to.startsWith("mailto:")) {
    return <Link to={to} {...props} />;
  }

  return <Link to={localePath(to)} {...props} />;
};

export default LocaleLink;
