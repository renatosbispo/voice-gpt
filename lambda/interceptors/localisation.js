const Alexa = require('ask-sdk-core');
const i18n = require('i18next');

const languageStrings = {
  en: {
    translation: {
      WELCOME_MSG:
        'Welcome, you can say Hello or Help. Which would you like to try?',
      HELLO_MSG: 'Hello World!',
      HELP_MSG: 'You can say hello to me! How can I help?',
      GOODBYE_MSG: 'Goodbye!',
      REFLECTOR_MSG: 'You just triggered {{intent}}',
      FALLBACK_MSG: "Sorry, I don't know about that. Please try again.",
      ERROR_MSG: 'Sorry, there was an error. Please try again.',
    },
  },
  pt: {
    translation: {
      WELCOME_MSG:
        'Olá, você pode dizer olá ou ajuda. Quais deles voce deseja testar?',
      HELLO_MSG: 'Olá!',
      HELP_MSG: 'Você pode dizer olá para mim! Como posso ajudar?',
      GOODBYE_MSG: 'Até logo!',
      REFLECTOR_MSG: 'Você acaba de iniciar {{intent}}',
      FALLBACK_MSG:
        'Desculpe, não sei nada sobre isso. Por favor tente novamente.',
      ERROR_MSG: 'Desculpe, ocorreu um erro. Por favor tente novamente.',
    },
  },
};

const LocalisationRequestInterceptor = {
  process(handlerInput) {
    i18n
      .init({
        lng: Alexa.getLocale(handlerInput.requestEnvelope),
        resources: languageStrings,
      })
      .then((t) => {
        handlerInput.translate = (...args) => translate(...args);
      });
  },
};

module.exports = {
  LocalisationRequestInterceptor,
};
