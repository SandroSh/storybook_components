import { RadioButtonProps } from "./radio.config";


export const radioBaseStyles =
  'appearance-none rounded-full border cursor-pointer transition-all duration-200 relative checked:before:content-[""] checked:before:absolute checked:before:inset-1/4 checked:before:rounded-full checked:before:bg-current checked:before:w-1.5 checked:before:h-1.5';

export const radioSizeStyles: Record<NonNullable<RadioButtonProps['size']>, string> = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
};

export const radioVariantStyles: Record<NonNullable<RadioButtonProps['variant']>, string> = {
  default: 'border-gray-400 text-blue-600 hover:border-blue-500',
  filled: 'bg-blue-100 border-blue-400 text-blue-600 hover:bg-blue-200',
  outline: 'border-2 border-blue-500 text-blue-600 hover:border-blue-600',
};
