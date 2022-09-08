import { useAcceptCookies } from '@lib/hooks';
import Script from 'next/script';

export const GoogleAnalytics = () => {
  const ga4Id = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const { acceptedCookies } = useAcceptCookies();

  if (!acceptedCookies) {
    return null;
  }

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${ga4Id}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${ga4Id}');
            `,
        }}
      />
    </>
  );
};
