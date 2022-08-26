import { Bar, Layout, TiltedBar } from '@components/common';
import { Chevron } from '@components/icons';
import { Asb, BrusselsAirport, IATA, PPL, WCA } from '@components/partners';
import { Button } from '@components/ui';
import Parallax from '@lib/parallax';
import { slideLeftVariants } from '@lib/variants';
import cn from 'classnames';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';
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
        className={cn('py-container', styles.export)}
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
                components={[<span className="title--emphasized--light" />]}
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
      <div className={styles.export__image__container}>
        <TiltedBar className={styles['export__tilted-bar']} />
        <Parallax>
          <Image
            src="/assets/web-09013.jpg"
            layout="responsive"
            width="1080"
            height="640"
            objectFit="cover"
            alt="truck loading"
            className={styles.export__image}
          />
        </Parallax>
      </div>
      <section className={cn('py-container--sm')}>
        <div className={cn('container')}>
          <div className={styles.article}>
            <div>
              <Bar className={styles.article__bar} />
              <h2>{t('article.title')}</h2>
            </div>
          </div>
          <div className={styles.article__body}>
            <p className={styles.article__paragraph}>
              <Trans
                i18nKey="article.paragraph"
                ns="export"
                components={[<strong />]}
              />
            </p>
            <Image
              layout="responsive"
              width="540"
              height="280"
              objectFit="cover"
              objectPosition="50% 50%"
              src="/assets/dog.jpg"
              alt="Donna, a security dog"
              className={styles.article__image}
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
