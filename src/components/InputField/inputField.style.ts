import { InputFieldProps } from "./inputField.config";

export const baseStyles =
  "rounded-lg transition-all duration-200 focus:ring-2 focus:ring-offset-1 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed shadow-sm";

export const variantStyles: Record<
  NonNullable<InputFieldProps["variant"]>,
  string
> = {
  default: "border border-gray-200 bg-white hover:border-gray-300 focus:border-primary-500 focus:ring-primary-500/20",
  outlined: "border-2 border-gray-300 bg-white hover:border-gray-400 focus:border-primary-500 focus:ring-primary-500/20",
  filled: "bg-primary-500 text-white hover:bg-primary-600 focus:ring-primary-500/30",
};

export const sizeStyles: Record<
  NonNullable<InputFieldProps["size"]>,
  string
> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-2.5 text-lg", 
  xl: "px-6 py-3.5 text-xl",
};