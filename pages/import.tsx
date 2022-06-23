import { Layout } from '@components/common';
import { Chevron } from '@components/icons';
import { Button } from '@components/ui';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import styles from './styles/import.module.scss';

const ImportPage = () => {
  return (
    <>
      <section className={cn('py-container--sm', styles.import)}>
        <div className={cn('container')}>
          <div className={styles.import__intro}>
            <h1 className={cn('title', styles.import__title)}>
              Import. <br />
              The <span className="title--emphasized">easy</span> way.
              <img
                className={styles.import__title__image}
                src="/assets/geometric_1.svg"
                alt="a geometric shape"
              />
            </h1>
            <div className={styles.import__intro__inner}>
              <div>
                <p className="paragraph">
                  Wij kunnen inklaringen overal ter wereld aanbieden. Dit door
                  ons eigen medewerkers of door betrouwbare agenten die
                  zorgvuldig worden uitgekozen. Wij werken volgens de{' '}
                  <strong>AEO standaard</strong>. Dit zorgt voor minder fouten
                  en bijkomende controles.
                </p>
                <p className="paragraph">
                  Wij beschikken over ons eigen douane-entrepot. Hierdoor kunnen
                  wij jouw goederen opslaan in afwachting van de nodige
                  documenten voor douaneformaliteiten.
                </p>
              </div>
              <img
                src="/assets/real_time_analytics.svg"
                alt="real_time_analytics_illustration"
              />
            </div>
            <ul className={styles.import__list}>
              <li>Inklaring</li>
              <li>Door to door</li>
              <li>Levering in heel België en Europa</li>
              <li>NCTS</li>
              <li>Eigen douane-entrepot</li>
              <li>AEO standaard</li>
              <li>Tijdelijke invoer</li>
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
                Wij beschikken ook over de nodige borgstellingen voor de opmaak
                van transitdocumenten. Wij kunnen ook zelf voor het transport
                zorgen. Dit door onze eigen voertuigen of door betrouwbare
                transporteurs.
              </p>
              <div className={styles.stats__grid}>
                <div className={styles.stats__stat}>
                  <span className={styles.stats__title}>250 customs</span>
                  <span className={styles.stats__text}>
                    Meer dan 250 inklaringen per maand.
                  </span>
                </div>
                <div className={styles.stats__stat}>
                  <span className={styles.stats__title}>200 documents</span>
                  <span className={styles.stats__text}>
                    Meer dan 200 documenten per maand.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={cn('py-container')}>
        <div className={cn('container')}>
          <h2 className={styles.team__title}>
            Met hun jarenlange ervaring in de sector, biedt ons import team jou
            de beste service.
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
              <p>
                Onze medewerkers blijven zich bijscholen om jou steeds de
                nieuwste informatie te kunnen verschaffen.
              </p>
              <Link href="/contact" passHref>
                <Button
                  iconRight={<Chevron />}
                  variant="light"
                  size="sm"
                  as="a"
                >
                  Join the team
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
