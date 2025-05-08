import React from 'react'
import { baseStyles, variantStyles, sizeStyles } from './inputField.style'
import { InputFieldProps } from './inputField.config'




const InputField = ({placeholder, type, disabled, size = 'md', variant = 'default', id, name, className }: InputFieldProps) => {


  return (
    <input
      id={id}
      name={name}
      type={type}
      disabled={disabled}
      placeholder={placeholder}
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    />
  )
}

export default InputField