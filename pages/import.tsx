import { Layout } from '@components/common';
import { Chevron } from '@components/icons';
import { Button } from '@components/ui';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import Trans from 'next-translate/Trans';
import useTranslation from 'next-translate/useTranslation';

import styles from './styles/import.module.scss';

const ImportPage = () => {
  const { t } = useTranslation('import');
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
      <section className={cn('py-container', styles.import)}>
        <div className={cn('container')}>
          <div className={styles.import__intro}>
            <h1 className={cn('title', styles.import__title)}>
              <Trans
                i18nKey="intro.title"
                ns="import"
                components={[<br />, <span className="title--emphasized" />]}
              />
              <img
                className={styles.import__title__image}
                src="/assets/geometric_1.svg"
                alt="a geometric shape"
              />
            </h1>
            <div className={styles.import__intro__inner}>
              <div>
                <p className="paragraph">
                  <Trans
                    i18nKey="intro.paragraph1"
                    ns="import"
                    components={[<strong />]}
                  />
                </p>
                <p className="paragraph">{t('intro.paragraph2')}</p>
              </div>
              <img
                src="/assets/real_time_analytics.svg"
                alt="real_time_analytics_illustration"
              />
            </div>
            <ul className={styles.import__list}>
              <li>{t('list.item1')}</li>
              <li>{t('list.item2')}</li>
              <li>{t('list.item3')}</li>
              <li>{t('list.item4')}</li>
              <li>{t('list.item5')}</li>
              <li>{t('list.item6')}</li>
              <li>{t('list.item7')}</li>
            </ul>
          </div>
          <div className={styles.stats}>
            <Image
              src="/assets/web-08923.jpg"
              layout="responsive"
              width="1080"
              height="560"
              objectFit="cover"
              alt="truck loading"
              className={styles.import__image}
            />
            <div className={styles.stats__list}>
              <p className={styles.stats__description}>
                {t('stats.description')}
              </p>
              <div className={styles.stats__grid}>
                <div className={styles.stats__stat}>
                  <span className={styles.stats__title}>
                    {t('stats.title1')}
                  </span>
                  <span className={styles.stats__text}>{t('stats.text1')}</span>
                </div>
                <div className={styles.stats__stat}>
                  <span className={styles.stats__title}>
                    {t('stats.title2')}
                  </span>
                  <span className={styles.stats__text}>{t('stats.text2')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cn('container')}>
          <h2 className={styles.team__title}>
            <Trans
              i18nKey="team.title"
              ns="import"
              components={[<span className="underline" />]}
            />
            <img src="/assets/geometric_3.svg" alt="geometric shape" />
          </h2>
          <div className={styles.team}>
            <Image
              layout="responsive"
              width="1080"
              height="560"
              objectFit="cover"
              objectPosition="50% 60%"
              src="/assets/web-08914.jpg"
              className={styles.import__image}
              alt="Two members of the eagleair team with a thumbs up"
            />
            <div className={styles.team__card}>
              <p>{t('team.card')}</p>
              <Link href="/contact" passHref>
                <Button
                  iconRight={<Chevron />}
                  variant="light"
                  size="sm"
                  as="a"
                >
                  {t('team.button')}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ImportPage;
ImportPage.Layout = Layout;
