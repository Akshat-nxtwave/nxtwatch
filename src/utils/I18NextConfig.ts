import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// don't want to use this?
// have a look at the Quick start guide
// for passing in lng and translations on init

const resources = {
  en: {
    mod1: {
      contact_us: "Conasdivbaidvnas",
    },
    mod2: {
      contact_us: "Contact Us",
    },
  },
  fr: {
    mod1: {
      contact_us: "gervfdv",
    },
    mod2: {
      contact_us: "425435",
    },
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
