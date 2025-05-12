export type CheckboxProps = {
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'basic' | 'rounded' | 'outlined' | 'filled';
  className?: string;
  id?: string;
};
