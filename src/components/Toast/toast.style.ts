import { ToastProps } from './toast.config';

export const toastBaseStyles =
  'flex items-center justify-between gap-4 px-5 py-3 rounded-tl-none rounded-tr-[10px] rounded-br-[10px] rounded-bl-none shadow-md  text-sm transition-all duration-300 bg-white';

export const toastVariantStyles: Record<NonNullable<ToastProps['variant']>, string> = {
  success: 'border-l-8 border-green-500 text-green-800',
  error: 'border-l-8 border-red-500 text-red-800',
  info: 'border-l-8 border-blue-500 text-blue-800',
  warning: 'border-l-8 border-yellow-500 text-yellow-800',
};
