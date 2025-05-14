import { BadgeProps } from "./badge.config";

export const badgeBaseStyles =
  "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-150 ease-out hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400";

export const badgeSizeStyles: Record<
  NonNullable<BadgeProps["size"]>,
  string
> = {
  sm: "px-3 py-1 text-sm",
  md: "px-4 py-1.5 text-base",
  lg: "px-5 py-2 text-lg",
};

export const badgeVariantStyles: Record<
  NonNullable<BadgeProps["variant"]>,
  string
> = {
  solid: `
    bg-green-500 text-white 
    border border-transparent 
    shadow-sm 
    hover:bg-primary-600 hover:shadow-md 
    focus:ring-primary-500
    dark:bg-primary-600 dark:hover:bg-primary-500 dark:focus:ring-primary-400
  `,

  subtle: `
    bg-primary-100 text-primary-900 
    border border-primary-300 
    shadow-sm 
    hover:bg-primary-200 hover:shadow-md 
    focus:ring-primary-400
    dark:bg-primary-800 dark:text-primary-50 dark:border-primary-600 dark:hover:bg-primary-700
  `,

  outline: `
    border-2 border-green-500 text-black 
    bg-transparent 
    shadow-none 
    hover:bg-primary-50 hover:shadow-sm 
    focus:ring-primary-500
    dark:border-primary-400 dark:text-primary-200 dark:hover:bg-primary-900/50
  `,
};
