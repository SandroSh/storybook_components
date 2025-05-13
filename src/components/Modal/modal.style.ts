import { ModalProps } from './modal.config';

export const baseStyles =
  'relative rounded-2xl shadow-xl transition-all duration-300 ease-in-out p-6';

export const sizeStyles: Record<NonNullable<ModalProps['size']>, string> = {
  sm: 'w-[280px] h-auto text-sm px-4 py-3',
  md: 'w-[500px] h-auto text-base px-6 py-4',
  lg: 'w-[720px] h-auto text-lg px-8 py-6',
  xl: 'w-[960px] h-auto text-xl px-10 py-8',
};

export const variantStyles: Record<NonNullable<ModalProps['variant']>, string> = {
  default:
    'bg-white border border-gray-200 shadow-md',
    
  outlined:
    'bg-white border-4 border-[#f44571] shadow-md',

  filled:
    'bg-blue-100 text-blue-900 border border-blue-300 shadow-inner',

  ghost:
    'bg-white/70 border border-white/30 backdrop-blur-md shadow-md',

  unstyled:
    'bg-transparent border-none p-0 shadow-none',
};
