import i18next from "i18next";
import { initReactI18next } from "react-i18next";


console.info('i18next', i18next);


i18next
  .use(initReactI18next).init({
    compatibilityJSON: 'v3',
    lng: 'en',
    fallbackLng: 'es',
    resources: {
      es: {
        translation: {
          "screen": "Pantalla principal",
          "email-placeholder": "algo{{ extension }}",
          "login-button": "Enviar código",
          "code-input": "Inserte Código recibido",
          "resend-code": "Reenviar código",
          "sign-out": "Cerrar sesión",
          "authenticated-message": "Autenticarse a través del PIN de seguridad",
          "authenticated-label": "Ingresar PIN",
          "login-label": "Inserte código recibido",
          "login-button-title": "Ingresar",
          "logged-out-message": "desloguado",
          "user-label": "Usuario",
          "default-first-name": "Nombre",
          "default-last-name": "Apellido",
          "biometrics-success": "Autenticación exitosa', 'Has iniciado sesión con biometría.",
          "biometrics-no-success": "Autenticación biometrica fallida', 'No se encuentra activada, o se produjo un error.",
          "edit-profile-photo-text": "Editar foto"
        }
      },
      en: {
        translation: {
          "screen": "Home Screen",
          "email-placeholder": "something{{ extension }}",
          "login-button": "Send code",
          "code-input": "insert received code",
          "resend-code": "Resend code",
          "sign-out": "Sign out",
          "authenticated-message": "Authenticate via security PIN",
          "authenticated-label": "Enter PIN",
          "login-label": "Insert received code",
          "login-button-title": "Enter",
          "logged-out-message": "logged-out",
          "user-label": "User",
          "default-first-name": "FirstName",
          "default-last-name": "LastName",
          "biometrics-success": "Authentication successful', 'You have logged in with biometrics.",
          "biometrics-no-success": "Biometric authentication failed', 'It is not activated, or an error occurred.",
          "edit-profile-photo-text": "Edit photo"
        }
      }
    }
  });