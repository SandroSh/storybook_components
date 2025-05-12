import React from 'react';
import { CheckboxProps } from './checkbox.config';
import { checkboxBaseStyles, checkboxSizeStyles, checkboxVariantStyles } from './checkbox.style';

const Checkbox = ({
  checked = false,
  onChange,
  size = 'md',
  variant = 'basic',
  className = '',
  id,
}: CheckboxProps) => {
  return (
    <input
      id={id}
      type="checkbox"
      checked={checked}
      onChange={onChange}
      className={`
        ${checkboxBaseStyles} 
        ${checkboxSizeStyles[size]} 
        ${checkboxVariantStyles[variant]} 
        ${className}
      `}
    />
  );
};

export default Checkbox;
