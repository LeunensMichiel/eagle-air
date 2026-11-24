import { Direction } from '@components/icons';
import { Button } from '@components/ui';
import { useUI } from '@lib/hooks';
import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

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

const LanguagePicker: FC<LanguagePickerProps> = ({
  outlined = true,
  size = 'md',
  ...props
}) => {
  const { lang } = useTranslation('common');
  const { openModal, setModalView } = useUI();

  const handleLanguageBtnClick = () => {
    setModalView('LANGUAGE_VIEW');
    openModal();
  };

  return (
    <Button
      type="button"
      iconLeft={<Direction />}
      onClick={handleLanguageBtnClick}
      variant={outlined ? 'outlined' : 'default'}
      size={size}
      {...props}
    >
      {LangCode[lang]}
    </Button>
  );
};

export default LanguagePicker;
