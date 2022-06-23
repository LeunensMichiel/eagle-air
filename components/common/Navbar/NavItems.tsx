import cn from 'classnames';
import { motion } from 'framer-motion';
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
          label="Import"
          link={{ href: '/import' }}
        />
        <NavItem
          hasTransparentBackground={isTransparent}
          label="Export"
          link={{ href: '/export' }}
        />
        <NavItem
          hasTransparentBackground={isTransparent}
          label="AVI"
          link={{ href: '/avi' }}
        />
        <NavItem
          hasTransparentBackground={isTransparent}
          label="Contact"
          link={{ href: '/contact' }}
        />
      </div>
      <LanguagePicker className={styles.languagePicker} size="sm" />
    </motion.div>
  );
};

export default NavItems;
