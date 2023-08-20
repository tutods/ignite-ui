import type { Dispatch, ReactNode, SetStateAction } from 'react';
import { useEffect, useRef } from 'react';

import * as RadixToast from '@radix-ui/react-toast';
import { X } from 'phosphor-react';

import {
  ToastAction,
  ToastContainer,
  ToastDescription,
  ToastHeaderContainer,
  ToastTitle,
  ToastViewport,
} from '@/components/Toast/styles';

export type ToastProps = {
  /**
   * Element will trigger the open of the toast
   */
  children: ReactNode;

  /**
   * Toast title content
   */
  title: ReactNode;

  /**
   * Toast description content
   */
  description: ReactNode;

  /**
   * Timeout to close the toast
   * @default undefined
   */
  timeout?: number;

  /**
   * State of toast - open or not
   * @defaylt false
   */
  isOpen?: boolean;

  /**
   * Function to change toast state
   */
  setIsOpen: Dispatch<SetStateAction<boolean>>;

  /**
   * Show button to close toast
   * @default true
   */
  showClose?: boolean;
};

export const Toast = ({
  children,
  title,
  description,
  timeout,
  setIsOpen,
  isOpen = false,
  showClose = true,
}: ToastProps) => {
  const timerRef = useRef<NodeJS.Timeout | undefined>();

  useEffect(() => {
    const currentTimerRef = timerRef.current;

    return () => {
      clearTimeout(currentTimerRef);
    };
  }, []);

  useEffect(() => {
    if (!!timeout && isOpen) {
      timerRef.current = setTimeout(() => setIsOpen(false), timeout);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen, timeout]);

  console.log('timeout', timeout);

  return (
    <RadixToast.Provider swipeDirection="right">
      {children}

      <ToastContainer onOpenChange={setIsOpen} open={isOpen}>
        <ToastHeaderContainer>
          <ToastTitle>{title}</ToastTitle>

          {showClose && (
            <ToastAction asChild altText="Close toast">
              <X size={20} />
            </ToastAction>
          )}
        </ToastHeaderContainer>
        <ToastDescription>{description}</ToastDescription>
      </ToastContainer>
      <ToastViewport />
    </RadixToast.Provider>
  );
};

Toast.displayName = 'Toast';
