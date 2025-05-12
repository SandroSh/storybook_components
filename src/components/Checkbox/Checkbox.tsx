import React from 'react';
import { CheckboxProps } from './checkbox.config';
import { checkboxBaseStyles, checkboxSizeStyles } from './checkbox.style';

const Checkbox = ({
  checked = false,
  onChange,
  label,
  size = 'md',
  className = '',
  id,
}: CheckboxProps) => {
  return (
    <label className={`inline-flex items-center gap-2 cursor-pointer ${className}`}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className={`${checkboxBaseStyles} ${checkboxSizeStyles[size]}`}
      />
      {label && <span className="select-none">{label}</span>}
    </label>
  );
};

export default Checkbox;
