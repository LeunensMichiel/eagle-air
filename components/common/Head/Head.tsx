import i18nConfig from 'i18n.json';
import NextHead from 'next/head';
import { useRouter } from 'next/router';
import { DefaultSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';
import { VFC } from 'react';

const Head: VFC = () => {
  const { t, lang } = useTranslation('common');
  const router = useRouter();
  const { locales, defaultLocale } = i18nConfig;
  const url = process.env.SITE_URL;

  return (
    <>
      <DefaultSeo
        title={t('seo.title')}
        titleTemplate={t('seo.titleTemplate')}
        defaultTitle={t('seo.defaultTitle')}
        description={t('seo.description')}
        languageAlternates={locales
          .filter((hrefLang) => hrefLang !== defaultLocale)
          .map((hrefLang) => ({
            hrefLang,
            href: `${url}/${hrefLang}${router.pathname}`,
          }))}
        openGraph={{
          title: t('seo.og.title'),
          description: t('seo.og.description'),
          type: 'website',
          url,
          locale: lang,
          site_name: 'Eagle Air',
          images: [
            {
              url: '/card.jpg',
              width: 1200,
              height: 630,
              alt: t('seo.og.imgAlt'),
            },
          ],
        }}
      />
      <NextHead>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/meta/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/meta/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/meta/favicon-16x16.png"
        />
        <link rel="manifest" href="/meta/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/meta/safari-pinned-tab.svg"
          color="#3f4367"
        />
        <link rel="shortcut icon" href="/meta/favicon.ico" />
        <meta name="msapplication-TileColor" content="#f8f8f8" />
        <meta name="msapplication-config" content="/meta/browserconfig.xml" />
        <meta name="theme-color" content="#f8f8f8" />
        <link
          rel="preload"
          href="/fonts/cooper-black.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/fira-sans-v16-latin-500.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/fira-sans-v16-latin-600.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/fira-sans-v16-latin-900.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/fira-sans-v16-latin-regular.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </NextHead>
    </>
  );
};

export default Head;
