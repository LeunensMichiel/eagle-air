import cn from 'classnames';
import Image, { ImageProps } from 'next/image';
import { CSSProperties, FC } from 'react';

import styles from './ImageWithAspectRatio.module.scss';

type Props = Omit<ImageProps, 'width' | 'height' | 'fill'> & {
  aspectRatio: string;
  wrapperClassName?: string;
  alt: string;
  objectFit?: CSSProperties['objectFit'];
  objectPosition?: CSSProperties['objectPosition'];
};

const ImageWithAspectRatio: FC<Props> = ({
  aspectRatio,
  src,
  objectFit = 'cover',
  objectPosition = '50% 50%',
  wrapperClassName,
  alt,
  style,
  ...rest
}) => {
  const [width, height] = aspectRatio.split('/');

  const containerStyle: CSSProperties = {
    paddingTop: `${100 / (Number(width) / Number(height))}%` || 0,
  };

  return (
    <div
      className={cn(styles.imgContainer, wrapperClassName)}
      style={containerStyle}
    >
      <Image
        fill
        sizes="100vw"
        src={src}
        alt={alt}
        style={{ objectFit, objectPosition, ...style }}
        {...rest}
      />
    </div>
  );
};

export default ImageWithAspectRatio;
