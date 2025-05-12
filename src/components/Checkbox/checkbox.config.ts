export type CheckboxProps = {
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  id?: string;
};
