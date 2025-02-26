import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import * as Localization from 'expo-localization';

// Importar archivos de traducción
import es from './assets/locales/es.json';
import en from './assets/locales/en.json';

// Configurar i18next
i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: 'v4',
    resources: {
      en: { translation: en },
      es: { translation: es },
    },
    lng: Localization.locale.startsWith('es') ? 'es' : 'en', // Detectar idioma del dispositivo
    fallbackLng: 'en', // Si el idioma no está disponible, usar inglés
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
