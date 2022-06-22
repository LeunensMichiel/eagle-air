import { Layout } from '@components/common';
import { Chevron } from '@components/icons';
import { Button } from '@components/ui';
import cn from 'classnames';
import useTranslation from 'next-translate/useTranslation';

import styles from './styles/404.module.scss';

const Custom404 = () => {
  const { t } = useTranslation('common');
  return (
    <div className={cn('container', 'py-container', styles.custom404)}>
      <img
        alt="kidnapped eagle by aliens joke"
        src="/assets/404.svg"
        className={styles.image__404}
      />
      <div>
        <h1>
          <span className={cn(styles.errCode)}>404</span>
          {t('notFound.title')}
        </h1>
        <Button as="a" href="/" iconRight={<Chevron />} size="sm">
          {t('notFound.description')}
        </Button>
      </div>
    </div>
  );
};

export default Custom404;

Custom404.Layout = Layout;
