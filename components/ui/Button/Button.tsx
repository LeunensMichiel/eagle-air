import { Spinner } from '@components/ui';
import cn from 'classnames';
import {
  ComponentPropsWithoutRef,
  ComponentPropsWithRef,
  ElementType,
  ReactNode,
} from 'react';

import styles from './Button.module.scss';

// Inspired by
// https://www.benmvp.com/blog/polymorphic-react-components-typescript/
interface ButtonCustomProps<C extends React.ElementType> {
  as?: C;
  children?: ReactNode;
  variant?:
    | 'default'
    | 'light'
    | 'lighter'
    | 'outlined'
    | 'minimal'
    | 'minimal-bright'
    | 'minimal-dark'
    | 'transparent';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  outlined?: boolean;
  circular?: boolean;
  squared?: boolean;
  loading?: boolean;
  disabled?: boolean;
  stretched?: boolean;
  iconLeft?: ComponentPropsWithoutRef<'svg'> | string;
  iconRight?: ComponentPropsWithoutRef<'svg'> | string;
}

export type ButtonProps<C extends ElementType> = ButtonCustomProps<C> &
  Omit<ComponentPropsWithRef<C>, keyof ButtonCustomProps<C>>;

const Button = <C extends React.ElementType = 'button'>({
  as,
  className,
  children,
  disabled = false,
  iconLeft,
  iconRight,
  loading = false,
  size = 'md',
  stretched = false,
  variant = 'default',
  onClick,
  squared,
  ...props
}: ButtonProps<C>) => {
  const Component = as || 'button';
  const rootClassName = cn(styles.buttonBase, styles[`button-${variant}`], {
    [styles.loading]: loading,
    [styles.disabled]: disabled,
    [styles[`button-${size}`]]: true,
    [styles.stretched]: stretched,
    [styles['button-squared']]: squared && !children,
    [`${className}`]: className,
  });

  return (
    <Component
      className={rootClassName}
      data-variant={variant}
      aria-disabled={disabled}
      disabled={disabled}
      tabIndex={disabled ? -1 : 0}
      onClick={(e) => {
        e.currentTarget.blur();
        onClick?.(e);
      }}
      {...props}
    >
      <>
        {(loading || iconLeft) && (
          <span
            className={cn({
              [styles[`button-icon-left`]]: (!!iconLeft || loading) && children,
            })}
          >
            {loading ? <Spinner /> : iconLeft}
          </span>
        )}
        {children}
        {iconRight && (
          <span
            className={cn({
              [styles[`button-icon-right`]]: !!iconRight && children,
            })}
          >
            {iconRight}
          </span>
        )}
      </>
    </Component>
  );
};

export default Button;
