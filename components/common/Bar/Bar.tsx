import cn from 'classnames';
import { FC } from 'react';

import styles from './Bar.module.scss';

type BarProps = {
  className?: string;
};

export const Bar: FC<BarProps> = ({ className }) => {
  return <div className={cn(styles.bar, className)} />;
};
