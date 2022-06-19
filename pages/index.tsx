import { Layout } from '@components/common';
import {
  Availability,
  Bolt,
  Chevron,
  ChevronDoubleDown,
  Heart,
  Plane,
} from '@components/icons';
import { Asb, BrusselsAirport, IATA, PPL, WCA } from '@components/partners';
import { Button, Card, Carousel, Logo } from '@components/ui';
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
            <span className={styles['title--emphasized']}>expertise.</span>
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
        <div className={cn(styles.cards, 'container')}>
          <Card
            imgSrc="/assets/web-08875.jpg"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget enim
          pharetra adipiscing."
            title="Import that helps your business grow."
            url="/import"
          />
          <Card
            imgSrc="/assets/web-08964.jpg"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget enim
          pharetra adipiscing."
            title="Professionals in air freight export."
            url="/export"
          />
          <Card
            imgSrc="/assets/chicks-in-transport.jpg"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget enim
          pharetra adipiscing."
            title="Animals should be transported with care."
            url="/avi"
          />
        </div>
      </section>
      <section className={cn(styles.stats, 'py-container')}>
        <div className="container">
          <h1 className={styles.title}>
            <span className={styles['title--emphasized']}>Dock and load. </span>
            <br /> From animals to cars and everything in between.
          </h1>
          <div className={styles.stats__grid}>
            <div className={styles.stats__stat}>
              <span className={styles.stats__title}>1746 m²</span>
              <span className={styles.stats__body}>
                The total surface of our warehouse.
              </span>
            </div>
            <div className={styles.stats__stat}>
              <span className={styles.stats__title}>135 countries</span>
              <span className={styles.stats__body}>
                We export to more than 135 countries worldwide
              </span>
            </div>
            <div className={styles.stats__stat}>
              <span className={styles.stats__title}>30 years</span>
              <span className={styles.stats__body}>
                The amount of experience in our sector
              </span>
            </div>
            <div className={styles.stats__stat}>
              <span className={styles.stats__title}>55.000 tonnes</span>
              <span className={styles.stats__body}>
                That’s a lot of freightage we ship each year!
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className={cn(styles.about, 'py-container')}>
        <div className="container">
          <div className={cn(styles.circle, styles['circle--big'])} />
          <div className={cn(styles.circle, styles['circle--small'])} />
          <span className={styles.about__subtitle}>Why Eagle Air?</span>
          <h1 className={styles.about__title}>
            We’re no generic freightage company.
          </h1>
          <div className={styles.about__items}>
            <div className={styles.about__item}>
              <Availability />
              <span className={styles.about__item__title}>Available 24/7</span>
              <span className={styles.about__item__text}>
                As a family business, we are available to customers 24/7.
              </span>
            </div>
            <div className={styles.about__item}>
              <Bolt />
              <span className={styles.about__item__title}>Flexible</span>
              <span className={styles.about__item__text}>
                Urgent shipment? We are ready for you immediately.{' '}
              </span>
            </div>
            <div className={styles.about__item}>
              <Heart />
              <span className={styles.about__item__title}>
                Personal service
              </span>
              <span className={styles.about__item__text}>
                Our staff will take care of your cargo with the best knowledge
                and care.
              </span>
            </div>
            <div className={styles.about__item}>
              <Plane />
              <span className={styles.about__item__title}>Expertise</span>
              <span className={styles.about__item__text}>
                Years of expertise in air freight since 1992.{' '}
              </span>
            </div>
          </div>
          <h3 className={styles.about__title}>
            Trusted by our{' '}
            <span className={styles['title--emphasized--light']}>valued</span>{' '}
            partners.
          </h3>
          <div className={styles.partners}>
            <Asb isWhite />
            <BrusselsAirport isWhite />
            <IATA isWhite />
            <PPL isWhite />
            <WCA isWhite />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

Home.Layout = Layout;
