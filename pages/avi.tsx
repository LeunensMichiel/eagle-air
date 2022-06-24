import { Bar, Layout } from '@components/common';
import { Bolt, Heart } from '@components/icons';
import { Button, Card } from '@components/ui';
import cn from 'classnames';
import Image from 'next/image';
import Link from 'next/link';

import styles from './styles/avi.module.scss';

const AVIPage = () => {
  return (
    <section className={cn('py-container', styles.avi)}>
      <div className={cn('container')}>
        <div className={styles.avi__inner}>
          <img
            className={styles.avi__intro__image}
            src="/assets/eggs.svg"
            alt="a geometric shape"
          />
          <h1 className={cn('title')}>
            Live
            <span className="title--emphasized"> Animal</span> Department.
          </h1>
          <p className={cn('paragraph', styles.avi__intro__paragraph)}>
            Ons live animals department staat jou steeds bij in de verscheping
            van jouw levende dieren, groot en klein. Geen vraag is ons te veel
            en wij zorgen dat jouw dieren in de beste omstandigheden reizen. Dit
            onder andere door het verschaffen van opbouwmateriaal en koten.
          </p>
          <div className={styles.avi__intro__buttons}>
            <Link href="/avi#info" passHref>
              <Button size="lg" as="a" iconRight={<Heart />}>
                How we take care
              </Button>
            </Link>
            <Link href="/avi#video" passHref>
              <Button size="lg" as="a" variant="lighter" iconRight={<Bolt />}>
                Informational video
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
            text="Reeds jaren zijn wij de Europese marktleider in de export van broedeieren en kuikens. Ons AVI team is 24/7 beschikbaar en staat jou steeds bij met hun kennis en expertise. Wij werken voor de grootste broeierijen over heel Europa en verschepen voornamelijk naar Afrika en het Midden-Oosten."
            title="Hatching eggs and chicks"
            url="/contact"
            buttonText="Request quote"
          />
          <Card
            imgSrc="/assets/heifer.jpg"
            text="Ook de export van vee, kent voor ons geen geheimen meer. Jouw vee is bij ons in goede handen. Wij zijn steeds zelf aanwezig bij opbouw van de dieren op de luchthaven van vertrek."
            title="Heifers (cows)"
            url="/contact"
            buttonText="Request quote"
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
            <h2>Eagle Air takes care of everything.</h2>
          </div>
          <div className={styles.article__body}>
            <p className={styles.article__paragraph}>
              Bij ons staat het comfort en de veiligheid van de dieren centraal.
              Animal welfare is voor ons niet zomaar een begrip, maar een
              prioriteit! Daarom bieden wij onze klanten de optie aan om het
              opbouwmateriaal door ons te laten verzorgen. Zo weet je met
              zekerheid dat de zending aan de regelgeving voldoet en dat de
              diertjes in optimale omstandigheden kunnen reizen.
            </p>
            <Image
              layout="responsive"
              width="1080"
              height="560"
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
  );
};

export default AVIPage;
AVIPage.Layout = Layout;
