export type ToastProps = {
  message: string;
  variant?: 'success' | 'error' | 'info' | 'warning';
  className?: string;
  onClose?: () => void;
};
