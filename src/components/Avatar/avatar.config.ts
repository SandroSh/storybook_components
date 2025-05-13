export type AvatarProps = {
  src: string;
  alt?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'rounded' | 'bordered' | 'shadowed';
  status?: 'online' | 'offline' | 'busy' | 'away';
  className?: string;
};
