import { CheckboxProps } from './checkbox.config';

export const checkboxBaseStyles = 'form-checkbox text-blue-600 transition duration-150 ease-in-out';

export const checkboxSizeStyles: Record<NonNullable<CheckboxProps['size']>, string> = {
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
};
