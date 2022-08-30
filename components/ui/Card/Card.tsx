import { Bar } from '@components/common';
import { Chevron } from '@components/icons';
import { Button } from '@components/ui';
import cn from 'classnames';
import Link from 'next/link';
import { FC, ReactNode } from 'react';

import ImageWithAspectRatio from '../ImageWithAspectRatio';
import styles from './Card.module.scss';

type CardProps = {
  squared?: boolean;
  imgSrc: string;
  title: string | ReactNode | ReactNode[];
  text: string | ReactNode | ReactNode[];
  buttonText?: string;
  url?: string;
  isAlternative?: boolean;
};

const Card: FC<CardProps> = ({
  imgSrc,
  text,
  title,
  url,
  isAlternative,
  squared,
  buttonText,
}) => {
  return (
    <div
      className={cn(styles.card, {
        [styles['card--alternative']]: isAlternative,
      })}
    >
      <ImageWithAspectRatio
        alt={`A picture describing the following title: ${title}`}
        aspectRatio={squared ? '1/1' : '148/81'}
        src={imgSrc}
        quality={100}
        wrapperClassName={styles.card__image}
      />
      <div className={styles.card__body}>
        <div>
          <Bar className={styles.card__bar} />
          <h2 className={styles.card__title}>{title}</h2>
        </div>
        <p className={styles.card__text}>{text}</p>
        {url && buttonText && (
          <Link href={url} passHref>
            <Button
              className={styles.card__button}
              size="sm"
              as="a"
              iconRight={<Chevron />}
              variant="light"
            >
              {buttonText}
            </Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Card;
