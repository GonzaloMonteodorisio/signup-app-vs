import i18next from "i18next";
import { initReactI18next } from "react-i18next";
// import LanguageDetector from 'i18next-browser-languagedetector';

// console.info('LanguageDetector: ', LanguageDetector);

i18next
  .use(initReactI18next).init({
    lng: 'en',
    fallbackLng: 'es',
    resources: {
      es: {
        translation: {
          "screen": "Pantalla principal",
          "email-placeholder": "algo{{ extension }}",
          "login-button": "Enviar código",
          "code-input": "Inserte Código recibido",
          "resend-code": "Reenviar código"
        }
      },
      en: {
        translation: {
          "screen": "Home Screen",
          "email-placeholder": "something{{ extension }}",
          "login-button": "Send code",
          "code-input": "insert received code",
          "resend-code": "Resend code"
        }
      }
    }
  });