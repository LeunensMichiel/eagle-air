import { Logo } from '@components/ui';
import cn from 'classnames';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { VFC } from 'react';

import LanguagePicker from '../LanguagePicker';
import styles from './Footer.module.scss';

const Footer: VFC = () => {
  const { t } = useTranslation();
  return (
    <footer className={cn(styles.footer, 'container')}>
      <nav className={styles.footerNavigation}>
        <div className={styles.linkGrid}>
          <div className={cn(styles.linkBlock)}>
            <span className={styles.title}>Services</span>
            <Link href="/import">Import</Link>
            <Link href="/export">Export</Link>
            <Link href="/avi">AVI</Link>
          </div>
          <div className={cn(styles.linkBlock)}>
            <span className={styles.title}>Contact</span>
            <Link href="/contact">Contact</Link>
          </div>
        </div>
        <div className={styles.linkGrid}>
          <div className={cn(styles.linkBlock)}>
            <span className={styles.title}>Legal</span>
            <Link href="/terms-and-conditions">Terms and conditions</Link>
            <Link href="/privacy-policy">Privacy policy</Link>
          </div>
          <div className={cn(styles.linkBlock)}>
            <span className={styles.title}>Resources</span>
            <Link href="/sitemap">Sitemap</Link>
          </div>
        </div>
      </nav>
      <div className={styles.footerBottom}>
        <LanguagePicker />
        <div className={styles.footerCopy}>
          <Logo variant="full" />
          <small>©Eagle Air Agencies 2022. All rights preserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
