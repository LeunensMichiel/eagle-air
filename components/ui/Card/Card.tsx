import { Chevron } from '@components/icons';
import { Button } from '@components/ui';
import Link from 'next/link';
import { FC } from 'react';

import ImageWithAspectRatio from '../ImageWithAspectRatio';
import styles from './Card.module.scss';

type CardProps = {
  imgSrc: string;
  title: string;
  text: string;
  url: string;
};

const Card: FC<CardProps> = ({ imgSrc, text, title, url }) => {
  return (
    <div className={styles.card}>
      <ImageWithAspectRatio
        alt="Picture of an eagleair truck"
        aspectRatio="3/2"
        src={imgSrc}
      />
      <div className={styles.card__body}>
        <div>
          <div className={styles.bar} />
          <h2 className={styles.card__title}>{title}</h2>
        </div>
        <p className={styles.card__text}>{text}</p>
        <Link href={url} passHref>
          <Button
            size="md"
            stretched
            as="a"
            iconRight={<Chevron />}
            variant="light"
          >
            More info
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Card;
