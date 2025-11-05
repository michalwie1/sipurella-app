// src/i18n.js
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import heHome from './locales/he/home.json';
import heForm from './locales/he/form.json';
import heErrors from './locales/he/errors.json';

import enHome from './locales/en/home.json';
import enForm from './locales/en/form.json';
import enErrors from './locales/en/errors.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
        he: {
            home: heHome,
            form: heForm,
            errors: heErrors,
        },
        en: {
            home: enHome,
            form: enForm,
            errors: enErrors,
        }
    },


    lng: 'he', // default
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
