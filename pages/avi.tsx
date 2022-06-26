import { Bar, Layout } from '@components/common';
import { Bolt, Heart } from '@components/icons';
import { Button, Card } from '@components/ui';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';

import styles from './styles/avi.module.scss';

const AVIPage = () => {
  const { t } = useTranslation('avi');
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
      <section className={cn('py-container', styles.avi)}>
        <div className={cn('container')}>
          <div className={styles.avi__inner}>
            <img
              className={styles.avi__intro__image}
              src="/assets/eggs.svg"
              alt="a geometric shape"
            />
            <h1 className={cn('title')}>
              <Trans
                i18nKey="intro.title"
                ns="avi"
                components={[<span className="title--emphasized" />]}
              />
            </h1>
            <p className={cn('paragraph', styles.avi__intro__paragraph)}>
              {t('intro.paragraph')}
            </p>
            <div className={styles.avi__intro__buttons}>
              <Link href="/avi#info" passHref>
                <Button size="lg" as="a" iconRight={<Heart />}>
                  {t('intro.button1')}
                </Button>
              </Link>
              <Link href="/avi#video" passHref>
                <Button size="lg" as="a" variant="lighter" iconRight={<Bolt />}>
                  {t('intro.button2')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.avi__video__wrapper} id="video">
          <video
            className={styles.avi__video}
            playsInline
            poster="/assets/tarmac.jpg"
            preload="metadata"
            controls
          >
            <source
              src="https://drive.google.com/uc?export=download&id=1Pe2wM_O0ABdQyoKusZ9ktV9yU_8-Mavi"
              type="video/mp4"
            />
          </video>
        </div>
        <div className={cn('container')} id="info">
          <div className={styles.cards}>
            <Card
              imgSrc="/assets/chicks.jpg"
              text={t('card.text1')}
              title={t('card.title1')}
              url="/contact"
              buttonText={t('card.button')}
            />
            <Card
              imgSrc="/assets/heifer.jpg"
              text={t('card.text2')}
              title={t('card.title2')}
              url="/contact"
              buttonText={t('card.button')}
            />
          </div>
          <div className={styles.article}>
            <img
              className={styles['article__image--heart']}
              src="/assets/heart.svg"
              alt="a geometric shape"
            />
            <div>
              <Bar className={styles.article__bar} />
              <h2>
                <Trans
                  i18nKey="article.title"
                  ns="avi"
                  components={[<span className="underline" />]}
                />
              </h2>
            </div>
            <div className={styles.article__body}>
              <p className={styles.article__paragraph}>
                {t('article.paragraph')}
              </p>
              <Image
                layout="responsive"
                width="540"
                height="280"
                objectFit="cover"
                objectPosition="50% 50%"
                src="/assets/tarmac_2.jpg"
                alt="Chicks at the tarmac"
                className={styles.article__image}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AVIPage;
AVIPage.Layout = Layout;
