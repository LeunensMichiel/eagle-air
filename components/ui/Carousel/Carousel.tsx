import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import cn from 'classnames';
import { FC, useRef, useState } from 'react';
import Slider, { Settings } from 'react-slick';

import ImageWithAspectRatio from '../ImageWithAspectRatio';
import styles from './Carousel.module.scss';

type SlideType = {
  image: string;
  title: string;
};

type CustomSlideProps = {
  slide: SlideType;
};
const CustomSlide: FC<CustomSlideProps> = ({ slide }) => {
  return (
    <div className={styles.slide}>
      <h2 className={styles.slide__title}>{slide.title}</h2>
      <ImageWithAspectRatio
        aspectRatio="3/2"
        wrapperClassName={styles.slide__image}
        alt={slide.title}
        src={slide.image}
      />
    </div>
  );
};

type CarouselProps = {
  slides: SlideType[];
};
const Carousel: FC<CarouselProps> = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<Slider>(null);
  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    lazyLoad: 'ondemand',
    centerMode: true,
    centerPadding: '32px',
    dotsClass: styles.dots,
    beforeChange(_, nextSlide) {
      setActiveSlide(nextSlide);
    },
  };
  return (
    <div className={cn(styles.root)} id="services">
      <nav className={cn(styles.slide__nav, 'container')}>
        {slides.map((slide, index) => (
          <button
            key={slide.title}
            className={cn(styles.slide__nav__item, {
              [styles['slide__nav__item--active']]: index === activeSlide,
            })}
            onClick={() => sliderRef?.current?.slickGoTo(index)}
          >
            {slide.title}
          </button>
        ))}
      </nav>
      <Slider {...settings} ref={sliderRef}>
        {slides.map((slide) => (
          <CustomSlide slide={slide} key={slide.title} />
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
