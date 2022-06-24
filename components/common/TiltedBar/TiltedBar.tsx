import cn from 'classnames';
import React, { FC } from 'react';

import styles from './TiltedBar.module.scss';

type Props = {
  className?: string;
};

export const TiltedBar: FC<Props> = ({ className }) => {
  return <div className={cn(styles['tilted-bar'], className)} />;
};
