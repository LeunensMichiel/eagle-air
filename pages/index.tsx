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
import { dynamicSlideUpVariants, slideUpVariants } from '@lib/variants';
import cn from 'classnames';
import { motion, useAnimation, Variants } from 'framer-motion';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';

import styles from './styles/index.module.scss';

const icons = [<Availability />, <Bolt />, <Heart />, <Plane />];

const Home = () => {
  const { t } = useTranslation('home');
  const circleAnimation = useAnimation();
  const circleAnimation2 = useAnimation();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMouseMove = (e: any) => {
    if (typeof window !== undefined) {
      const { clientX, clientY } = e;
      const moveX = clientX - window.innerWidth / 2;
      const moveY = clientY - window.innerHeight / 2;
      const offsetFactor = 20;
      const offsetFactor2 = 50;
      circleAnimation.start({
        x: moveX / offsetFactor,
        y: moveY / offsetFactor,
      });
      circleAnimation2.start({
        x: -moveX / offsetFactor2,
        y: -moveY / offsetFactor2,
      });
    }
  };

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
          <motion.div
            className={styles.stats__grid}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8, fallback: true }}
            transition={{ staggerChildren: 0.07, delayChildren: 0.1 }}
          >
            {[...Array(4)].map((_, i) => (
              <motion.div
                className={styles.stats__stat}
                variants={slideUpVariants}
                key={i}
              >
                <span className={styles.stats__title}>
                  {t(`stats.title${i + 1}`)}
                </span>
                <span className={styles.stats__text}>
                  {t(`stats.text${i + 1}`)}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      <section
        className={cn(styles.about, 'py-container')}
        onMouseMove={(e) => handleMouseMove(e)}
      >
        <div className="container">
          <motion.div
            className={cn(styles.circle, styles['circle--big'])}
            animate={circleAnimation}
          />
          <motion.div
            className={cn(styles.circle, styles['circle--small'])}
            animate={circleAnimation2}
          />
          <span className={styles.about__subtitle}>{t('about.subTitle')}</span>
          <h1 className={styles.about__title}>{t('about.title')}</h1>
          <motion.div
            className={styles.about__items}
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true, amount: 0.8, fallback: true }}
          >
            {[...Array(4)].map((_, i) => (
              <motion.div
                className={styles.about__item}
                variants={dynamicSlideUpVariants}
                custom={i}
                key={i}
              >
                {icons[i]}
                <span className={styles.about__item__title}>
                  {t(`about.itemTitle${i + 1}`)}
                </span>
                <span className={styles.about__item__text}>
                  {t(`about.itemText${i + 1}`)}
                </span>
              </motion.div>
            ))}
          </motion.div>
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
