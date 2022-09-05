import cn from 'classnames';
import useEmblaCarousel from 'embla-carousel-react';
import Link from 'next/link';
import { FC, useCallback, useEffect, useState } from 'react';

import ImageWithAspectRatio from '../ImageWithAspectRatio';
import styles from './Carousel.module.scss';

type SlideType = {
  image: string;
  title: string;
  href: string;
};

type CustomSlideProps = {
  slide: SlideType;
};
const CustomSlide: FC<CustomSlideProps> = ({ slide }) => {
  return (
    <div className={cn('embla__slide')}>
      <div className={cn('embla__slide__inner')}>
        <Link href={slide.href}>
          <div className={styles.slide}>
            <h2 className={styles.slide__title}>{slide.title}</h2>
            <ImageWithAspectRatio
              aspectRatio="148/81"
              priority
              wrapperClassName={styles.slide__image}
              alt={slide.title}
              src={slide.image}
            />
          </div>
        </Link>
      </div>
    </div>
  );
};

type CarouselProps = {
  slides: SlideType[];
};
const Carousel: FC<CarouselProps> = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [emblaRef, embla] = useEmblaCarousel({
    align: 'center',
    skipSnaps: false,
    loop: true,
    axis: 'x',
  });

  const scrollTo = useCallback(
    (index: number) => {
      if (!embla) return;
      setActiveSlide(index);
      embla.scrollTo(index);
    },
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setActiveSlide(embla.selectedScrollSnap());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on('select', onSelect);
  }, [embla, onSelect, setScrollSnaps]);

  return (
    <div className={cn(styles.root)} id="services">
      <nav className={cn(styles.slide__nav, 'container')}>
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            className={cn(styles.slide__nav__item, {
              [styles['slide__nav__item--active']]: index === activeSlide,
            })}
            onClick={() => scrollTo(index)}
          >
            {slide.title}
          </button>
        ))}
      </nav>
      <div className="embla">
        <div className="embla__viewport" ref={emblaRef}>
          <div className="embla__container">
            {slides.map((slide) => (
              <CustomSlide slide={slide} key={slide.title} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.dots}>
        {scrollSnaps.map((_, index) => (
          <button
            className={cn(styles.dot, {
              [styles['dot--active']]: index === activeSlide,
            })}
            type="button"
            key={index}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
