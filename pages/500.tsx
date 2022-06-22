import { Layout } from '@components/common';
import cn from 'classnames';
import useTranslation from 'next-translate/useTranslation';

import styles from './styles/500.module.scss';

const Custom500Page = () => {
  const { t } = useTranslation('common');
  return (
    <div className={cn('container', 'py-container', styles.custom500)}>
      <span className={styles.oops}>{t('errorPage.oops')}</span>
      <h1>{t('errorPage.title')}</h1>
      <p>{t('errorPage.description')}</p>
    </div>
  );
};

export default Custom500Page;

Custom500Page.Layout = Layout;
