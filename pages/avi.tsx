import { Layout } from '@components/common';
import cn from 'classnames';

import styles from './styles/avi.module.scss';

const AVIPage = () => {
  return (
    <section className="py-container--sm">
      <div className={cn('container')}></div>
    </section>
  );
};

export default AVIPage;
AVIPage.Layout = Layout;
