import { Layout } from '@components/common';
import { Chevron } from '@components/icons';
import { Button, Card } from '@components/ui';
import { slideLeftVariants } from '@lib/variants';
import cn from 'classnames';
import { motion } from 'framer-motion';
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
      <section className={cn('py-container--sm', styles.import)}>
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
            <motion.ul
              className={styles.import__list}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{
                once: true,
                amount: 0.8,
                fallback: true,
              }}
              transition={{ staggerChildren: 0.07 }}
            >
              {[...Array(7)].map((_, i) => (
                <motion.li key={i} variants={slideLeftVariants}>
                  {t(`list.item${i + 1}`)}
                </motion.li>
              ))}
            </motion.ul>
          </div>
          <div className={styles.stats}>
            <Card
              text={t('stats.description')}
              title={t('stats.title')}
              isAlternative
              imgSrc="/assets/web-08923.jpg"
            />
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
              width="540"
              height="280"
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
