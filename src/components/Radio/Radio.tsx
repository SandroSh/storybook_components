import React from 'react';
import { RadioButtonProps } from './radio.config';
import {
  radioBaseStyles,
  radioSizeStyles,
  radioVariantStyles
} from './radio.style';

const RadioButton = ({
  checked = false,
  onChange,
  size = 'md',
  variant = 'default',
  name,
  id,
  value,
  className = ''
}: RadioButtonProps) => {
  return (
    <input
      type="radio"
      id={id}
      name={name}
      value={value}
      checked={checked}
      onChange={onChange}
      className={`
        ${radioBaseStyles}
        ${radioSizeStyles[size]}
        ${radioVariantStyles[variant]}
        ${className}
      `}
    />
  );
};

export default RadioButton;
