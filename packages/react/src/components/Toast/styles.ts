import * as Toast from '@radix-ui/react-toast';

import { keyframes, styled } from '@/styles';

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 },
});

const slideIn = keyframes({
  from: { transform: 'translateX(-100%)' },
  to: { transform: 'translateX(0)' },
});

const swipeOut = keyframes({
  from: { transform: 'translateX(0)' },
  to: { transform: `translateX(-100%)` },
});

const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: '0 $8 $8 0',
  gap: '$2',
  minWidth: 360,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 999,
  outline: 'none',
});

const ToastContainer = styled(Toast.Root, {
  backgroundColor: '$gray800',
  border: '1px solid $colors$gray600',
  borderRadius: '$sm',
  boxShadow: 'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  padding: '$3 $5',
  display: 'flex',
  flexDirection: 'column',
  gap: '$1',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1)`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 100ms ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateX(var(--radix-toast-swipe-move-x))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateX(0)',
    transition: 'transform 200ms ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 100ms ease-out`,
  },
});

const ToastHeaderContainer = styled('header', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '$2',
});

const ToastTitle = styled(Toast.Title, {
  fontWeight: '$bold',
  color: '$white',
  fontSize: '$xl',
  lineHeight: '$base',
});

const ToastDescription = styled(Toast.Description, {
  margin: 0,
  color: '$gray200',
  fontSize: '$sm',
  fontWeight: '$regular',
  lineHeight: '$base',
});

const ToastAction = styled(Toast.Action, {
  color: '$gray200',
  cursor: 'pointer',
  transition: 'color 300ms ease-in-out',

  '&:hover': {
    color: '$white',
  },
});

export {
  ToastAction,
  ToastContainer,
  ToastDescription,
  ToastHeaderContainer,
  ToastTitle,
  ToastViewport,
};
