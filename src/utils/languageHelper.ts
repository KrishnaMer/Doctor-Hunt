import i18n from '../i18n/config';
import { SUPPORTED_LANGUAGES, LanguageCode } from '../i18n/languages';

/**
 * Change the app language
 * @param languageCode - The language code (e.g., 'en', 'es', 'fr', 'hi', 'ar')
 */
export const changeLanguage = (languageCode: LanguageCode) => {
  i18n.changeLanguage(languageCode);
};

/**
 * Get the current language code
 */
export const getCurrentLanguage = (): LanguageCode => {
  return (i18n.language as LanguageCode) || 'en';
};

/**
 * Get all supported languages
 */
export const getSupportedLanguages = () => {
  return Object.values(SUPPORTED_LANGUAGES);
};

/**
 * Check if a language is RTL
 */
export const isRTL = (languageCode?: LanguageCode): boolean => {
  const code = languageCode || getCurrentLanguage();
  return SUPPORTED_LANGUAGES[code]?.isRTL || false;
};
