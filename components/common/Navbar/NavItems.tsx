import cn from 'classnames';
import { AnimatePresence, motion } from 'framer-motion';
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
    <AnimatePresence>
      {navDrawerOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.33, type: 'spring' }}
          className={cn(styles.navMenuContainer, {
            [styles.navigationTransparent]: isTransparent,
          })}
        >
          <div className={cn(styles.navMenuList)}>
            <NavItem label="Home" link={{ href: '/' }} />
            <NavItem label="Import" link={{ href: '/import' }} />
            <NavItem label="Export" link={{ href: '/export' }} />
            <NavItem label="AVI" link={{ href: '/avi' }} />
            <NavItem label="Contact" link={{ href: '/contact' }} />
          </div>
          <LanguagePicker className={styles.languagePicker} />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavItems;
