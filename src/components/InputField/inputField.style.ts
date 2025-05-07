import { InputFieldProps } from "./inputField.config";


export const baseStyles =
  "rounded-md focus:outline-none focus:ring transition disabled:opacity-50 disabled:cursor-not-allowed";

export const variantStyles: Record<NonNullable<InputFieldProps["variant"]>, string> = {
  default: "border border-gray-300 focus:ring-blue-500 focus:border-blue-500",
  outlined:
    "border-2 border-gray-500 focus:ring-blue-500 focus:border-blue-500",
  filled:
    "bg-gray-100 border border-gray-300 focus:bg-white focus:ring-blue-500 focus:border-blue-500",
};

export const sizeStyles: Record<NonNullable<InputFieldProps["size"]>, string> = {
  sm: "px-2 py-1 text-sm",
  md: "px-3 py-2 text-base",
  lg: "px-4 py-2 text-lg",
  xl: "px-5 py-3 text-xl",
};
