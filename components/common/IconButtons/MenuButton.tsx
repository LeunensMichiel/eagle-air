import { Bars, Close } from '@components/icons';
import { Button } from '@components/ui';
import { ButtonProps } from '@components/ui/Button/Button';
import { MouseEventHandler, VFC } from 'react';

type MenuButtonProps = {
  className?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  navBarOpen?: boolean;
} & Pick<
  ButtonProps<'button'>,
  'size' | 'loading' | 'disabled' | 'variant' | 'squared'
>;

const MenuButton: VFC<MenuButtonProps> = ({
  onClick,
  size = 'sm',
  variant = 'minimal',
  squared = true,
  navBarOpen,
  ...props
}) => (
  <Button
    aria-haspopup="true"
    aria-label="Navigation menu button"
    iconLeft={navBarOpen ? <Close /> : <Bars />}
    onClick={onClick}
    type="button"
    variant={variant}
    size={size}
    squared={squared}
    {...props}
  />
);

export default MenuButton;
