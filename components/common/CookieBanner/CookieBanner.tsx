import { Banner } from '@components/ui';
import { useAcceptCookies, useIsClient } from '@lib/hooks';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

const CookieBanner: FC = () => {
  const isClient = useIsClient();
  const { t } = useTranslation('common');
  const { shouldAskForCookies, onAcceptCookies } = useAcceptCookies();

  return (
    <Banner
      title={t('cookies.title')}
      description={t('cookies.text')}
      open={shouldAskForCookies && isClient}
      onClickConfirmingAction={() => onAcceptCookies(true)}
      onClickDismissiveAction={() => onAcceptCookies(false)}
    />
  );
};

export default CookieBanner;
