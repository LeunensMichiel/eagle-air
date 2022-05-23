import { Layout } from '@components/common';
import { Chevron, ChevronDoubleDown } from '@components/icons';
import { Button } from '@components/ui';
import cn from 'classnames';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import useTranslation from 'next-translate/useTranslation';

import styles from './styles/index.module.scss';

const Home = () => {
  const { t } = useTranslation('home');

  return (
    <>
      <NextSeo
        title={t('seo.title')}
        description={t('seo.description')}
        openGraph={{
          title: t('seo.title'),
          description: t('seo.description'),
        }}
      />
      <div className={cn(styles.videoContainer)}>
        <video playsInline autoPlay muted poster="/assets/poster.jpg" loop>
          <source src="/assets/landing.mp4" type="video/mp4" />
        </video>
        <div className={cn(styles.videoBody, 'container')}>
          <span className={styles.superTitle}>
            <span>
              <strong>Eagle Air</strong> Agencies
            </span>
          </span>
          <h1>
            We do <span className="highlight--light">transport</span> right.
          </h1>
          <div className={styles.buttonContainer}>
            <Link href="/contact" passHref>
              <Button
                className={styles.whiteButton}
                size="lg"
                as="a"
                iconRight={<Chevron />}
              >
                Contact us
              </Button>
            </Link>
            <Link href="/#services" passHref>
              <Button
                className={styles.whiteButtonOutlined}
                size="lg"
                as="a"
                variant="outlined"
                iconRight={<Chevron />}
              >
                What we do
              </Button>
            </Link>
          </div>
          <ChevronDoubleDown className={styles.chevronDoubleDown} />
        </div>
      </div>
    </>
  );
};

export default Home;

Home.Layout = Layout;
