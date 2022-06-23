import { Layout } from '@components/common';
import cn from 'classnames';

import styles from './styles/export.module.scss';

const ExportPage = () => {
  return (
    <section className="py-container--sm">
      <div className={cn('container')}></div>
    </section>
  );
};

export default ExportPage;
ExportPage.Layout = Layout;
