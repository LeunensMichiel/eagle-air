import { Bar, Layout, TiltedBar } from '@components/common';
import { Chevron } from '@components/icons';
import { Asb, BrusselsAirport, IATA, PPL, WCA } from '@components/partners';
import { Button } from '@components/ui';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';

import styles from './styles/export.module.scss';

const ExportPage = () => {
  const { t } = useTranslation('export');
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
      <section className={cn('py-container', styles.export)}>
        <div className={cn('container')}>
          <div className={styles.export__intro}>
            <img
              src="/assets/cccircular.svg"
              alt="geometric shape"
              className={styles['geometric-shape']}
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
            <ul className={styles.export__list}>
              <li>{t('list.item1')}</li>
              <li>{t('list.item2')}</li>
              <li>{t('list.item3')}</li>
              <li>{t('list.item4')}</li>
              <li>{t('list.item5')}</li>
            </ul>
          </div>
        </div>
      </section>
      <div className={styles.export__image__container}>
        <TiltedBar className={styles['export__tilted-bar']} />
        <Image
          src="/assets/web-09013.jpg"
          layout="responsive"
          width="1080"
          height="640"
          objectFit="cover"
          alt="truck loading"
          className={styles.export__image}
        />
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
              width="1080"
              height="560"
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
