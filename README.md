# Eagleair

## Getting Started

Install dependencies:

```bash
yarn
```

Run the development server:

```bash
yarn dev
```

Run a production build:

```bash
yarn build
yarn start
```

## Formatting and Linting

This template makes use of `Husky`, which will run `es-lint` and `prettier` automatically before each commit.
In case you want to run these commands manually, you can do as follows:

```bash
yarn lint
```

```bash
yarn format
```

## Self host fonts

Want to self-host your fonts? (recommended!), you can easily set this up:

Download your `.woff2` font(s) from eg: [Google webfont helper](https://google-webfonts-helper.herokuapp.com/fonts).

`.woff2` [will suffice for support](https://caniuse.com/woff2). If you want to support older browsers, _like IE11_, you can download the `.woff` variant as well as a fallback.

1. Put your fonts in the `public/fonts` folder. Create one if it does not exist yet.
2. Navigate to `styles/common/_typography.scss` and uncomment the `@font-face` code-block.
   1. :warning: Duplicate the @font-face for each font-style your're serving (eg 400, 400i, 700,...)
   2. Add your font to the scss variables of choice. eg: `$font-family-base: 'My Font', $font-family-system;`. You can add it to your `_theme.scss` file as well instead, if you want a different font per theme.
3. Lasly, navigate to `components/common/Head` and add this `<link>` tag **for EACH font-file you added in the fonts folder.** Enjoy the free lighthouse/performance improvements.

```jsx
<link
  rel="preload"
  href="/fonts/myFont.woff2"
  as="font"
  type="font/woff2"
  crossOrigin="anonymous"
/>
```

## SEO

This template is configured with [Next-SEO](https://github.com/garmeeh/next-seo) to bring out the best of Next.js. Follow the documentation for more information on how to customize this to your liking.

The default `seo-default` configuration is located in the `components/common/Head` file. Change it to your liking.
Don't forget to add your _google-site-verification_ meta-tag!

You can add an og:image for each page, but a default image is configured in the default settings as wel. This image is named `card.jpg`, and can be found under `/global/`. Swap this image out with your custom `card.jpg`.

## Internationalization (i18n)

Translation is provided by Next's build-in internationalization's + a neat little package called [Next-translate](https://github.com/vinissimus/next-translate). Easy to follow documentation.
The default provided languages in this template are `English`, `Dutch` and `French` as I'm Belgian :smile:.

### Favicons en Webmanifest

Go to a favicon generator like [favicongenerator](https://realfavicongenerator.net/). For this generator, in the last step, you can provide a custom directory. Enter the `/meta/` directory and download your files. Place them in the `public/meta/` folder.
If the generator also created a `webmanifest`, put it there as well. Otherwise, you'll need to create one yourself. (Recommended).

Lastly, copy the `<link>` and `<meta>` tags and overwrite the current ones in `components/common/Head`.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
