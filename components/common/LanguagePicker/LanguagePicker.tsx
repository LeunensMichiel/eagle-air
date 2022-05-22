import { Direction } from '@components/icons';
import { Button } from '@components/ui';
import { useUI } from '@lib/hooks';
import useTranslation from 'next-translate/useTranslation';
import { VFC } from 'react';

export const LangCode: Record<string, string> = {
  nl: 'Nederlands',
  fr: 'Français',
  en: 'English',
};

type LanguagePickerProps = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  outlined?: boolean;
  className?: string;
};

const LanguagePicker: VFC<LanguagePickerProps> = ({
  outlined = true,
  size = 'sm',
  ...props
}) => {
  const { t, lang } = useTranslation('common');
  const { openModal, setModalView } = useUI();

  const handleLanguageBtnClick = () => {
    setModalView('LANGUAGE_VIEW', t('i18n.select'));
    openModal();
  };

  return (
    <Button
      type="button"
      iconLeft={<Direction />}
      onClick={handleLanguageBtnClick}
      variant="outlined"
      size={size}
      outlined={outlined}
      {...props}
    >
      {LangCode[lang]}
    </Button>
  );
};

export default LanguagePicker;
