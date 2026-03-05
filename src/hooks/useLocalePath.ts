import { useParams } from "react-router-dom";

const SUPPORTED_LANGUAGES = ["en", "tr", "ru", "it", "ar", "de"];

export const useLocalePath = () => {
  const { lang } = useParams<{ lang: string }>();
  const currentLang = lang && SUPPORTED_LANGUAGES.includes(lang) ? lang : "en";

  const localePath = (path: string) => {
    // If path already starts with a lang prefix, replace it
    const cleanPath = path.startsWith("/") ? path : `/${path}`;
    return `/${currentLang}${cleanPath}`;
  };

  return { localePath, currentLang };
};

export { SUPPORTED_LANGUAGES };
