import cn from 'classnames';
import { motion } from 'framer-motion';
import useTranslation from 'next-translate/useTranslation';
import { VFC } from 'react';

import LanguagePicker from '../LanguagePicker';
import NavItem from './NavItem';
import styles from './NavItems.module.scss';

type NavItemsProps = {
  navDrawerOpen?: boolean;
  isTransparent?: boolean;
};

const NavItems: VFC<NavItemsProps> = ({
  navDrawerOpen = false,
  isTransparent = false,
}) => {
  const { t } = useTranslation('common');
  return (
    <motion.div
      initial={false}
      layout
      className={cn(styles.navMenuContainer, {
        [styles.navContainerOpen]: navDrawerOpen,
        [styles.navigationTransparent]: isTransparent,
      })}
    >
      <div className={cn(styles.navMenuList)}>
        <NavItem
          hasTransparentBackground={isTransparent}
          label={t('links.import')}
          link={{ href: '/import' }}
        />
        <NavItem
          hasTransparentBackground={isTransparent}
          label={t('links.export')}
          link={{ href: '/export' }}
        />
        <NavItem
          hasTransparentBackground={isTransparent}
          label={t('links.avi')}
          link={{ href: '/avi' }}
        />
        <NavItem
          hasTransparentBackground={isTransparent}
          label={t('links.contact')}
          link={{ href: '/contact' }}
        />
      </div>
      <LanguagePicker className={styles.languagePicker} size="sm" />
    </motion.div>
  );
};

export default NavItems;
