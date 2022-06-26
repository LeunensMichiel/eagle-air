// eslint-disable-next-line @typescript-eslint/no-var-requires
const nextTranslate = require('next-translate');

module.exports = nextTranslate({
  swcMinify: true,
  eslint: {
    dirs: ['pages', 'components', 'lib', 'locales', 'public'],
  },
});
