import { ButtonProps } from "./button.config";

export const buttonBaseStyles =
  "rounded-lg transition-all duration-200 focus:ring-2 focus:ring-offset-1 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed shadow-sm font-medium";

export const buttonVariantStyles: Record<ButtonProps["variant"], string> = {
  default:
    "bg-primary-600 text-blackhover:bg-primary-700 focus:ring-primary-500/20",
  outlined:
    "bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-400/20",
  transparent:
    "bg-transparent text-primary-600 hover:bg-primary-50 focus:ring-primary-500/20",
  filled: "bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-700/20",
  link: "bg-transparent text-primary-600 underline hover:text-primary-700 focus:ring-0 focus:outline-none",
  danger: "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500/20",
  success: "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500/20",
  warning:
    "bg-yellow-500 text-black hover:bg-yellow-600 focus:ring-yellow-400/20",
  unstyled:
    "bg-transparent text-inherit p-0 m-0 border-0 shadow-none focus:outline-none",
};

export const buttonSizeStyles: Record<ButtonProps["size"], string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-base",
  lg: "px-5 py-2.5 text-lg",
  xl: "px-6 py-3.5 text-xl",
};
