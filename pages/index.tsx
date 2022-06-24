import { Layout, TiltedBar } from '@components/common';
import { ContactForm } from '@components/common/Form';
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
      <section className={cn(styles.landing)}>
        <video playsInline autoPlay muted poster="/assets/poster.jpg" loop>
          <source src="/assets/landing.mp4" type="video/mp4" />
        </video>
        <div className={cn(styles.landing__inner, 'container')}>
          <span className={styles.landing__title__super}>
            <span>
              <strong>Eagle Air</strong> Agencies
            </span>
          </span>
          <span className={styles.landing__headline}>
            We do <span className="highlight--light">transport</span> right.
          </span>
          <div className={styles.landing__buttons}>
            <Link href="/contact" passHref>
              <Button
                className={styles.landing__button}
                size="lg"
                as="a"
                iconRight={<Chevron />}
              >
                Contact us
              </Button>
            </Link>
            <Link href="/#services" passHref>
              <Button
                className={styles['landing__button--outlined']}
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
            <ChevronDoubleDown className={styles.landing__chevron} />
          </Link>
        </div>
        <TiltedBar />
      </section>
      <section className="py-container" id="intro">
        <div className={cn(styles.intro__container, 'container')}>
          <Logo className={styles['logo--small']} />
          <h1 className={'title'}>
            Your goods, delivered with{' '}
            <span className={'title--emphasized'}>expertise.</span>
          </h1>
          <p className={'paragraph'}>
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
            buttonText="More info"
          />
          <Card
            imgSrc="/assets/web-08964.jpg"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget enim
          pharetra adipiscing."
            title="Professionals in air freight export."
            url="/export"
            buttonText="More info"
          />
          <Card
            imgSrc="/assets/chicks-in-transport.jpg"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget enim
          pharetra adipiscing."
            title="Animals should be transported with care."
            url="/avi"
            buttonText="More info"
            isAlternative
          />
        </div>
      </section>
      <section className={cn(styles.stats, 'py-container')}>
        <div className="container">
          <h1 className={'title'}>
            <span className={'title--emphasized'}>Dock and load. </span>
            <br />
            From animals to cars and everything in between.
          </h1>
          <div className={styles.stats__grid}>
            <div className={styles.stats__stat}>
              <span className={styles.stats__title}>1746 m²</span>
              <span className={styles.stats__text}>
                The total surface of our warehouse.
              </span>
            </div>
            <div className={styles.stats__stat}>
              <span className={styles.stats__title}>135 countries</span>
              <span className={styles.stats__text}>
                We export to more than 135 countries worldwide
              </span>
            </div>
            <div className={styles.stats__stat}>
              <span className={styles.stats__title}>30 years</span>
              <span className={styles.stats__text}>
                The amount of experience in our sector
              </span>
            </div>
            <div className={styles.stats__stat}>
              <span className={styles.stats__title}>55.000 tonnes</span>
              <span className={styles.stats__text}>
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
      <section className="container py-container">
        <h1 className={cn('title', styles.contact__title)}>
          Interested? <br />
          Let&apos;s discuss{' '}
          <span className={'title--emphasized'}>opportunities.</span>
        </h1>
        <ContactForm />
      </section>
    </>
  );
};

export default Home;

Home.Layout = Layout;
