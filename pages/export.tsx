import { Bar, Layout, TiltedBar } from '@components/common';
import { Chevron } from '@components/icons';
import { Asb, BrusselsAirport, IATA, PPL, WCA } from '@components/partners';
import { Button } from '@components/ui';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import styles from './styles/export.module.scss';

const ExportPage = () => {
  return (
    <>
      <section className={cn('py-container', styles.export)}>
        <div className={cn('container')}>
          <div className={styles.export__intro}>
            <img
              src="/assets/cccircular.svg"
              alt="geometric shape"
              className={styles['geometric-shape']}
            />
            <h1 className={cn('title', styles.export__title)}>
              Our <span className="title--emphasized--light">export</span> is
              going places.
            </h1>
            <p className={cn('paragraph', styles.export__paragraph)}>
              Ons export team zorgt steeds voor de snelle afhandeling van jouw
              vracht. Wij snappen als geen ander de tijdsgevoeligheid van
              luchtvracht. Daarom dat wij alles regelen van pick-up tot
              eindbestemming. Wat je wensen ook zijn, ons team staat steeds voor
              je klaar!
            </p>
            <ul className={styles.export__list}>
              <li>Pick-up in België en Europa</li>
              <li>Verzenden over de hele wereld</li>
              <li>Wekelijkse consols</li>
              <li>Tijdelijke uitvoer</li>
              <li>In-house screening</li>
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
              <h2>Our paw partners in crime.</h2>
            </div>
          </div>
          <div className={styles.article__body}>
            <p className={styles.article__paragraph}>
              Samen met onze partner ASB security zorgen wij voor de gepaste
              screeningmethode voor al jouw vracht. ASB security verzorgt al
              onze screening en dit in ons eigen magazijn –{' '}
              <strong>24/7.</strong>
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
          <h3>Wanna team-up?</h3>
          <p>
            Send us a message for more information about our partner initiative.
          </p>
          <Link href="/contact" passHref>
            <Button size="sm" iconRight={<Chevron />} as="a">
              Contact us
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
