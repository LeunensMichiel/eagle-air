import { CloseButton } from '@components/common';
import { useClickOutside, useIsClient } from '@lib/hooks';
import {
  BodyScrollOptions,
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from 'body-scroll-lock';
import cn from 'classnames';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import {
  FC,
  MutableRefObject,
  PropsWithChildren,
  useCallback,
  useEffect,
  useRef,
} from 'react';
import { createPortal } from 'react-dom';
import FocusLock from 'react-focus-lock';

import styles from './Modal.module.scss';

type ModalProps = {
  className?: string;
  open?: boolean;
  title?: string;
  container?: 'container' | 'page' | 'small';
  onClose(): void;
};

const BODY_SCROLL_OPTIONS: BodyScrollOptions = {
  reserveScrollBarGap: true,
};

const Modal: FC<PropsWithChildren<ModalProps>> = ({
  children,
  className,
  container = 'page',
  onClose,
  open,
  title,
}) => {
  const ref = useRef(null) as unknown as MutableRefObject<HTMLDivElement>;
  const shouldReduceMotion = useReducedMotion();
  const closedY = shouldReduceMotion ? 0 : 200;
  const duration = 0.3;
  const isClient = useIsClient();
  useClickOutside(ref, () => onClose());

  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  const clearBodyScroll = useCallback(() => {
    enableBodyScroll(ref.current);
    clearAllBodyScrollLocks();
  }, []);

  useEffect(() => {
    if (ref.current) {
      if (open) {
        disableBodyScroll(ref.current, BODY_SCROLL_OPTIONS);
        window.addEventListener('keydown', handleKey);
      }
    }
    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  }, [open, handleKey]);

  if (!isClient) return null;

  return createPortal(
    <AnimatePresence onExitComplete={clearBodyScroll}>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration }}
          className={cn(styles.overlay)}
        >
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={{
              open: { opacity: 1, y: 0 },
              closed: { opacity: 0, y: closedY },
            }}
            transition={{
              duration,
              type: 'spring',
            }}
            aria-modal
            aria-labelledby={title}
            tabIndex={-1}
            ref={ref}
            role="dialog"
            className={cn(
              styles.modal,
              {
                container: container === 'container',
                'container-page': container === 'page',
                [styles.container__small]: container === 'small',
              },
              className
            )}
          >
            <header
              className={cn(styles.modalHeader, {
                [styles.noTitle]: !title,
              })}
            >
              {title && <span className={cn(styles.modalTitle)}>{title}</span>}
              <CloseButton
                className={cn(styles.modalCloseButton, {
                  [styles.noTitle]: !title,
                })}
                onClick={() => onClose()}
              />
            </header>
            <FocusLock className={cn(styles.modalBody)}>{children}</FocusLock>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Modal;
