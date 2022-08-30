import { Layout } from '@components/common';
import { Chevron } from '@components/icons';
import { Asb, BrusselsAirport, IATA, PPL, WCA } from '@components/partners';
import { Button, Card, ImageWithAspectRatio } from '@components/ui';
import { slideLeftVariants } from '@lib/variants';
import cn from 'classnames';
import { motion, useAnimation } from 'framer-motion';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';

import styles from './styles/export.module.scss';

const ExportPage = () => {
  const { t } = useTranslation('export');
  const circleAnimation = useAnimation();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleMouseMove = (e: any) => {
    if (typeof window !== undefined) {
      const { clientX, clientY } = e;
      const moveX = clientX - window.innerWidth / 2;
      const moveY = clientY - window.innerHeight / 2;
      const offsetFactor = 100;
      circleAnimation.start({
        x: -moveX / offsetFactor,
        y: moveY / offsetFactor,
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
      <section
        className={cn('py-container--sm', styles.export)}
        onMouseMove={(e) => handleMouseMove(e)}
      >
        <div className={cn('container')}>
          <div className={styles.export__intro}>
            <motion.img
              src="/assets/cccircular.svg"
              alt="geometric shape"
              className={styles['geometric-shape']}
              animate={circleAnimation}
            />
            <h1 className={cn('title', styles.export__title)}>
              <Trans
                i18nKey="intro.title"
                ns="export"
                components={[<span className="title--emphasized" />, <br />]}
              />
            </h1>
            <p className={cn('paragraph', styles.export__paragraph)}>
              {t('intro.paragraph')}
            </p>
            <motion.ul
              className={styles.export__list}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{
                once: true,
                amount: 0.8,
                fallback: true,
              }}
              transition={{ staggerChildren: 0.07, delayChildren: 0.1 }}
            >
              {[...Array(5)].map((_, i) => (
                <motion.li key={i} variants={slideLeftVariants}>
                  {t(`list.item${i + 1}`)}
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </div>
      </section>
      <section className="container">
        <ImageWithAspectRatio
          alt="Colleague transporting goods in our warehouse"
          aspectRatio="16/9"
          src="/assets/web-08998.jpg"
        />
      </section>
      <section className={cn('py-container--sm')}>
        <div className={cn('container')}>
          <div className={styles.export__intro}>
            <h1 className={cn(styles.articles__header, 'title')}>
              <Trans
                i18nKey="article.header"
                ns="export"
                components={[<span className="title--emphasized" />]}
              />
            </h1>
            <p className={cn('paragraph', styles.export__paragraph)}>
              {t('article.subtitle')}
            </p>
          </div>
          <div className={styles.articles}>
            <Card
              imgSrc="/assets/dog.jpg"
              squared
              text={
                <Trans
                  i18nKey="article.paragraph"
                  ns="export"
                  components={[<strong />]}
                />
              }
              title={t('article.title')}
            />
            <Card
              videoSrc="/assets/xray.mp4"
              squared
              text={
                <Trans
                  i18nKey="article.paragraph2"
                  ns="export"
                  components={[<strong />]}
                />
              }
              title={t('article.title2')}
            />
          </div>
        </div>
        <div className={cn('container', styles.contact)}>
          <h3>{t('contact.title')}</h3>
          <p>{t('contact.paragraph')} </p>
          <Link href="/contact" passHref>
            <Button size="sm" iconRight={<Chevron />} as="a">
              {t('contact.button')}
            </Button>
          </Link>
          <div className={styles.partners}>
            <Asb />
            <BrusselsAirport />
            <IATA />
            <PPL />
            <WCA />
          </div>
        </div>
      </section>
    </>
  );
};

export default ExportPage;
ExportPage.Layout = Layout;
