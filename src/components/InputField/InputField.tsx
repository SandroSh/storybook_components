import React from 'react'
import { baseStyles, variantStyles, sizeStyles } from './inputField.style'
import { InputFieldProps } from './inputField.config'




const InputField = ({ value, onChange, placeholder, type, disabled, size = 'md', variant = 'default', id, name }: InputFieldProps) => {


  return (
    <input
      id={id}
      name={name}
      type={type}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      disabled={disabled}
      placeholder={placeholder}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} `}
    />
  )
}

export default InputField