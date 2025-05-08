import React from 'react'
import { ButtonProps } from './button.config'
import { buttonBaseStyles, buttonSizeStyles, buttonVariantStyles } from './button.style'

const Button = ({children, onClick, variant = 'default', size='md', className}:ButtonProps) => {
   
  return (
    <button
        onClick={onClick}
        className={`${buttonBaseStyles} ${buttonVariantStyles[variant]} ${buttonSizeStyles[size]} ${className}`}
    >
        {children}
    </button>
  )
}

export default Button