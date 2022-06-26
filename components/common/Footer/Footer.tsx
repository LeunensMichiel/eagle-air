import { Logo } from '@components/ui';
import cn from 'classnames';
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';
import { VFC } from 'react';

import LanguagePicker from '../LanguagePicker';
import styles from './Footer.module.scss';

const Footer: VFC = () => {
  const { t } = useTranslation('common');
  return (
    <footer className={cn(styles.footer, 'container')}>
      <nav className={styles.footerNavigation}>
        <div className={styles.linkGrid}>
          <div className={cn(styles.linkBlock)}>
            <span className={styles.title}>{t('links.services')}</span>
            <Link href="/import">{t('links.import')}</Link>
            <Link href="/export">{t('links.export')}</Link>
            <Link href="/avi">{t('links.avi')}</Link>
          </div>
          <div className={cn(styles.linkBlock)}>
            <span className={styles.title}>{t('links.contact')}</span>
            <Link href="/contact">{t('links.contact')}</Link>
          </div>
        </div>
        <div className={styles.linkGrid}>
          <div className={cn(styles.linkBlock)}>
            <span className={styles.title}>{t('links.legal')}</span>
            <Link href="/terms-and-conditions">
              {t('links.terms-and-conditions')}
            </Link>
            <Link href="/privacy-policy">{t('links.privacy-policy')}</Link>
          </div>
          <div className={cn(styles.linkBlock)}>
            <span className={styles.title}>{t('links.resources')}</span>
            <Link locale={false} href="/sitemap-0.xml">
              {t('links.sitemap')}
            </Link>
          </div>
        </div>
      </nav>
      <div className={styles.footerBottom}>
        <LanguagePicker size="sm" />
        <div className={styles.footerCopy}>
          <Logo variant="full" />
          <small>
            {t('links.copyright', { date: new Date().getFullYear() })}
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
