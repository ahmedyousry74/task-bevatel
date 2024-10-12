import { createI18n } from 'vue-i18n';
import axios from 'axios'; // Import your HTTP client library
import en from '../locale/en.json';
import ar from '../locale/ar.json';

// Read the initial language from local storage or use 'en' as the default.
const initialLocale = localStorage.getItem('lang') || 'ar';

// Global variable to store the selected locale
export const selectedLocale = {
  locale: initialLocale,
};

function loadLocaleMessages() {
  const locales = [{ en: en }, { ar: ar }];
  const messages = {};
  locales.forEach(lang => {
    const key = Object.keys(lang);
    messages[key] = lang[key];
  });
  return messages;
}

const i18n = createI18n({
  legacy: false,
  locale: initialLocale, // Set the initial locale
  fallbackLocale: 'ar',
  messages: loadLocaleMessages(),
});
const { t } = i18n.global;


// Axios interceptor to add the selected locale to the request headers
// axios.interceptors.request.use(config => {
//   config.headers['Accept-Language'] = selectedLocale.locale;
//   if (['post', 'put', 'patch'].includes(config.method.toLowerCase())) {
//     if (typeof config.data === 'object' && config.data !== null) {
//       // If the request body is an object, add the lang property
//       config.data.lang = selectedLocale.locale;
//     } else {
//       // If the request body is not an object, convert it to an object
//       config.data = { lang: selectedLocale.locale };
//     }
//   }
//   return config;
// });

export default i18n;
