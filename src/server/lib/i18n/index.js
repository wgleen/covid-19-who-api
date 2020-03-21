import i18n from 'i18n'

const LOCALES = ['en-US', 'pt-BR']

i18n.configure({
  locales: LOCALES,
  defaultLocale: 'en-US',
  directory: __dirname + '/locales',
  updateFiles: false,
  objectNotation: true,
  api: {
    '__': 't',
    '__n': 'tn'
  }
})

export default i18n
