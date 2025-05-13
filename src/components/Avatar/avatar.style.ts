import { AvatarProps } from './avatar.config';

export const avatarBaseStyles = 'object-cover';

export const avatarSizeStyles: Record<NonNullable<AvatarProps['size']>, string> = {
  sm: 'w-8 h-8',
  md: 'w-10 h-10',
  lg: 'w-14 h-14',
  xl: 'w-20 h-20',
};

export const avatarVariantStyles: Record<NonNullable<AvatarProps['variant']>, string> = {
  default: 'rounded-full',
  rounded: 'rounded-lg',
  bordered: 'rounded-full border-2 border-gray-300',
  shadowed: 'rounded-full shadow-lg',
};

export const statusIndicatorStyles: Record<string, string> = {
  sm: 'w-2.5 h-2.5',
  md: 'w-3 h-3',
  lg: 'w-3.5 h-3.5',
  xl: 'w-4 h-4',
  online: 'bg-green-500',
  offline: 'bg-gray-400',
  busy: 'bg-red-500',
  away: 'bg-yellow-400',
};
