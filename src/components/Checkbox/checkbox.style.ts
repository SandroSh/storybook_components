import { CheckboxProps } from "./checkbox.config";

export const checkboxBaseStyles =
  'transition duration-150 ease-in-out cursor-pointer select-none';

export const checkboxSizeStyles: Record<NonNullable<CheckboxProps['size']>, string> = {
  sm: 'w-4 h-4',
  md: 'w-5 h-5',
  lg: 'w-6 h-6',
};

export const checkboxVariantStyles: Record<NonNullable<CheckboxProps['variant']>, string> = {
  basic: 'border border-gray-400 bg-white',
  rounded: 'border border-gray-400 bg-white !rounded-full',
  outlined: 'border-2 border-blue-500 bg-white',
  filled: 'bg-gray-200 border border-gray-400',
};
