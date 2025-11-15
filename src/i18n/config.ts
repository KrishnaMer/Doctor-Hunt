import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import es from './locales/es.json';
import fr from './locales/fr.json';
import hi from './locales/hi.json';
import ar from './locales/ar.json';

// Get device language using multiple fallback methods
const getDeviceLanguage = (): string => {
  const supportedLanguages = ['en', 'es', 'fr', 'hi', 'ar'];

  try {
    let deviceLang: string | null = null;

    // Method 1: Try using react-native-localize (best method, but requires native linking)
    try {
      const RNLocalize = require('react-native-localize');
      if (RNLocalize && typeof RNLocalize.getLocales === 'function') {
        const locales = RNLocalize.getLocales();
        if (locales && Array.isArray(locales) && locales.length > 0) {
          const locale = locales[0];
          if (locale && locale.languageCode) {
            deviceLang = locale.languageCode;
          }
        }
      }
    } catch (e) {
      // react-native-localize not available or not properly linked
      console.log('react-native-localize not available, using fallback');
    }

    // Method 2: Use JavaScript Intl API (works without native modules)
    if (!deviceLang && typeof Intl !== 'undefined') {
      try {
        const locale = Intl.DateTimeFormat().resolvedOptions().locale;
        if (locale) {
          // Extract language code (e.g., "en-US" -> "en", "hi-IN" -> "hi")
          deviceLang = locale.split('-')[0].toLowerCase();
        }
      } catch (e) {
        console.log('Intl API not available');
      }
    }

    // Check if we support this language
    if (deviceLang && supportedLanguages.includes(deviceLang)) {
      console.log('Detected device language:', deviceLang);
      return deviceLang;
    } else if (deviceLang) {
      console.log(
        'Device language',
        deviceLang,
        'not supported, using English',
      );
    }
  } catch (error) {
    console.log('Error detecting device language:', error);
  }

  // Default to English if detection fails
  console.log('Using default language: English');
  return 'en';
};

i18n.use(initReactI18next).init({
  compatibilityJSON: 'v4',
  resources: {
    en: { translation: en },
    es: { translation: es },
    fr: { translation: fr },
    hi: { translation: hi },
    ar: { translation: ar },
  },
  lng: getDeviceLanguage(), // Automatically detect device language
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // React already escapes values
  },
});

export default i18n;
