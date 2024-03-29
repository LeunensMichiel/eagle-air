import { Footer, Navbar } from '@components/common';
import { LanguageModalView } from '@components/common/LanguagePicker';
import { Modal } from '@components/ui';
import { useUI } from '@lib/hooks';
import cn from 'classnames';
import { useRouter } from 'next/router';
import { FC, ReactNode } from 'react';

import CookieBanner from '../CookieBanner/CookieBanner';
import styles from './Layout.module.scss';

type Props = {
  children: ReactNode;
};

const transparentRoutes = ['/'];

const Layout: FC<Props> = ({ children }: Props) => {
  const { displayModal, closeModal, modalView, modalTitle } = useUI();
  const router = useRouter();

  const isTransparentRoute = transparentRoutes.includes(router?.pathname);

  return (
    <>
      <Navbar isTransparent={isTransparentRoute} />
      <main
        className={cn(styles.mainContainer, {
          [styles['has-transparent-navbar']]: isTransparentRoute,
        })}
      >
        {children}
      </main>
      <Footer />

      <Modal
        open={displayModal}
        onClose={closeModal}
        title={modalTitle}
        container="small"
      >
        {modalView === 'LANGUAGE_VIEW' && <LanguageModalView />}
      </Modal>
      <CookieBanner />
    </>
  );
};

export default Layout;
