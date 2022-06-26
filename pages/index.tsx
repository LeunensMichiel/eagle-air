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
import Trans from 'next-translate/Trans';
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
            <Trans
              i18nKey="landing.slogan"
              ns="home"
              components={[<span className="highlight--light" />]}
            />
          </span>
          <div className={styles.landing__buttons}>
            <Link href="/contact" passHref>
              <Button
                className={styles.landing__button}
                size="lg"
                as="a"
                iconRight={<Chevron />}
              >
                {t('landing.button1')}
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
                {t('landing.button2')}
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
            <Trans
              i18nKey="intro.title"
              ns="home"
              components={[<span className="title--emphasized" />]}
            />
          </h1>
          <p className={'paragraph'}>{t('intro.paragraph')}</p>
        </div>
        <Carousel
          slides={[
            {
              image: '/assets/web-08962.jpg',
              title: t('common:links.import'),
              href: '/import',
            },
            {
              image: '/assets/web-08898.jpg',
              title: t('common:links.export'),
              href: '/export',
            },
            {
              image: '/assets/struisvogel.jpg',
              title: t('common:links.avi'),
              href: '/avi',
            },
          ]}
        />
        <div className={cn(styles.cards, 'container')}>
          <Card
            imgSrc="/assets/web-08875.jpg"
            text={t('card.text1')}
            title={
              <Trans
                i18nKey="card.title1"
                ns="home"
                components={[<span className="underline" />]}
              />
            }
            url="/import"
            buttonText={t('card.button')}
          />
          <Card
            imgSrc="/assets/web-08964.jpg"
            text={t('card.text2')}
            title={
              <Trans
                i18nKey="card.title2"
                ns="home"
                components={[<span className="underline" />]}
              />
            }
            url="/export"
            buttonText={t('card.button')}
          />
          <Card
            imgSrc="/assets/chicks-in-transport.jpg"
            text={t('card.text3')}
            title={
              <Trans
                i18nKey="card.title3"
                ns="home"
                components={[<span className="underline" />]}
              />
            }
            url="/avi"
            buttonText={t('card.button')}
            isAlternative
          />
        </div>
      </section>
      <section className={cn(styles.stats, 'py-container')}>
        <div className="container">
          <h1 className={'title'}>
            <Trans
              i18nKey="stats.header"
              ns="home"
              components={[<span className="title--emphasized" />, <br />]}
            />
          </h1>
          <div className={styles.stats__grid}>
            <div className={styles.stats__stat}>
              <span className={styles.stats__title}>{t('stats.title1')}</span>
              <span className={styles.stats__text}>{t('stats.text1')}</span>
            </div>
            <div className={styles.stats__stat}>
              <span className={styles.stats__title}>{t('stats.title2')}</span>
              <span className={styles.stats__text}>{t('stats.text2')}</span>
            </div>
            <div className={styles.stats__stat}>
              <span className={styles.stats__title}>{t('stats.title3')}</span>
              <span className={styles.stats__text}>{t('stats.text3')}</span>
            </div>
            <div className={styles.stats__stat}>
              <span className={styles.stats__title}>{t('stats.title4')}</span>
              <span className={styles.stats__text}>{t('stats.text4')}</span>
            </div>
          </div>
        </div>
      </section>
      <section className={cn(styles.about, 'py-container')}>
        <div className="container">
          <div className={cn(styles.circle, styles['circle--big'])} />
          <div className={cn(styles.circle, styles['circle--small'])} />
          <span className={styles.about__subtitle}>{t('about.subTitle')}</span>
          <h1 className={styles.about__title}>{t('about.title')}</h1>
          <div className={styles.about__items}>
            <div className={styles.about__item}>
              <Availability />
              <span className={styles.about__item__title}>
                {t('about.itemTitle1')}
              </span>
              <span className={styles.about__item__text}>
                {t('about.itemText1')}
              </span>
            </div>
            <div className={styles.about__item}>
              <Bolt />
              <span className={styles.about__item__title}>
                {t('about.itemTitle2')}
              </span>
              <span className={styles.about__item__text}>
                {t('about.itemText2')}
              </span>
            </div>
            <div className={styles.about__item}>
              <Heart />
              <span className={styles.about__item__title}>
                {t('about.itemTitle3')}
              </span>
              <span className={styles.about__item__text}>
                {t('about.itemText3')}
              </span>
            </div>
            <div className={styles.about__item}>
              <Plane />
              <span className={styles.about__item__title}>
                {t('about.itemTitle4')}
              </span>
              <span className={styles.about__item__text}>
                {t('about.itemText4')}
              </span>
            </div>
          </div>
          <h3 className={styles.about__title}>
            <Trans
              i18nKey="about.partners"
              ns="home"
              components={[<span className="title--emphasized--light" />]}
            />
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
          <Trans
            i18nKey="contact.title"
            ns="home"
            components={[<br />, <span className="title--emphasized" />]}
          />
        </h1>
        <ContactForm />
      </section>
    </>
  );
};

export default Home;

Home.Layout = Layout;
