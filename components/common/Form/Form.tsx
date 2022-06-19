import cn from 'classnames';
import { ComponentPropsWithRef, FC, forwardRef } from 'react';

import styles from './Form.module.scss';

type FormProps = {
  className?: string;
};

const Form: FC<ComponentPropsWithRef<'form'> & FormProps> = forwardRef<
  HTMLFormElement,
  FormProps
>(({ children, className, ...rest }, ref) => (
  <form ref={ref} className={cn(styles.form, className)} {...rest}>
    {children}
  </form>
));

Form.displayName = 'Form';

export default Form;
