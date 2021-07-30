const path = require('path');

module.exports = {
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    localePath: './public/locales',
    defaultNS: 'app',
    serializeConfig: false,
  },
  serializeConfig: false,
  localePath: path.resolve('./public/locales'),
};
