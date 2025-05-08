export type CardProps = {
    children: React.ReactNode;
    variant?: 'basic' | 'outlined' | 'elevated' | 'clickable';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    onClick?: () => void;
  };