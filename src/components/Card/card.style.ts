import { CardProps } from "./card.config";

export const cardBaseStyles =
  'rounded-lg transition-all duration-200 shadow-sm focus:outline-none';

export const cardVariantStyles: Record<NonNullable<CardProps['variant']>, string> = {
  basic: 'border bg-white',
  outlined: 'border-2 border-gray-300 bg-white',
  elevated: 'shadow-md hover:shadow-lg',
  clickable: 'cursor-pointer hover:shadow-lg active:scale-95 transition',
};

export const cardSizeStyles: Record<NonNullable<CardProps['size']>, string> = {
  sm: 'p-2',
  md: 'p-4',
  lg: 'p-6',
};