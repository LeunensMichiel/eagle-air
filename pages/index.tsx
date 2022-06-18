import { Layout } from '@components/common';
import { Chevron, ChevronDoubleDown } from '@components/icons';
import { Button, Carousel, Logo } from '@components/ui';
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
      <section className={cn(styles.videoContainer)}>
        <video playsInline autoPlay muted poster="/assets/poster.jpg" loop>
          <source src="/assets/landing.mp4" type="video/mp4" />
        </video>
        <div className={cn(styles.videoBody, 'container')}>
          <span className={styles.superTitle}>
            <span>
              <strong>Eagle Air</strong> Agencies
            </span>
          </span>
          <span className={styles.slogan}>
            We do <span className="highlight--light">transport</span> right.
          </span>
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
          <Link href="/#intro">
            <ChevronDoubleDown className={styles.chevronDoubleDown} />
          </Link>
        </div>
        <div className={styles.tiltedBar} />
      </section>
      <section className="py-container">
        <div className="container">
          <Logo className={styles.smallLogo} />
          <h1 className={styles.title}>
            Your goods, delivered with{' '}
            <span className={styles['title--emphasize']}>expertise.</span>
          </h1>
          <p className={styles.intro}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora
            optio soluta, nulla vel sint aut dolor alias praesentium blanditiis,
            et id neque dignissimos autem molestiae molestias suscipit
            reiciendis, quisquam nesciunt.
          </p>
        </div>
        <Carousel
          slides={[
            {
              image: '/assets/web-08962.jpg',
              title: 'Import',
            },
            {
              image: '/assets/web-08898.jpg',
              title: 'Export',
            },
            {
              image: '/assets/struisvogel.jpg',
              title: 'AVI',
            },
          ]}
        />
      </section>
    </>
  );
};

export default Home;

Home.Layout = Layout;
