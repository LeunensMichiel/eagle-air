// eslint-disable-next-line @typescript-eslint/no-require-imports
const nextTranslate = require('next-translate-plugin');

module.exports = nextTranslate(
  {
    images: {
      // Next 16 only allows quality 75 by default; Card renders at 100.
      qualities: [75, 100],
    },
  },
  { turbopack: true }
);
