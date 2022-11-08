import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import translationRO from './locales/ro/translation.json';

// the translations
const resources = {
  en: {
    translation: translationEN,
  },
  ro: {
    translation: translationRO,
  },
};

i18next
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: 'en',

    keySeparator: false, // we do not use keys in form messages.welcome

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18next;
