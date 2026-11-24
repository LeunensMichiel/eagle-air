import { Dropdown } from '@components/ui';
import cn from 'classnames';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import {
  FC,
  LiHTMLAttributes,
  PropsWithChildren,
  useEffect,
  useState,
} from 'react';

import styles from './NavItem.module.scss';

type NavItemProps = {
  label: string;
  link?: LinkProps;
  className?: string;
  hasTransparentBackground?: boolean;
} & LiHTMLAttributes<HTMLLIElement>;

const NavItem: FC<PropsWithChildren<NavItemProps>> = ({
  children,
  label,
  link,
  className,
  hasTransparentBackground,
}) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (router.asPath) {
      setOpen(false);
    }
  }, [router.asPath]);

  return (
    <>
      {!children && link ? (
        <Link
          {...link}
          role="menuitem"
          className={cn(styles.navItemContainer, styles.link, className, {
            [styles['link--active']]: router.pathname === link?.href,
            [styles['link--transparent-background']]: hasTransparentBackground,
          })}
        >
          {label}
        </Link>
      ) : (
        <Dropdown
          label={label}
          role="menu"
          willFloat
          willOpenOnHover
          startOpen={open}
          buttonClassName={cn(styles.subMenuButton, 'parentSubMenuButton')}
          listClassName={styles.subMenuList}
          containerOpenClassName={styles.subMenuOpen}
          containerClassName={cn(styles.navItemContainer, className)}
        >
          {children}
        </Dropdown>
      )}
    </>
  );
};

export default NavItem;
