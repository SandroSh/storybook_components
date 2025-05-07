import React, { CSSProperties } from 'react'
import { ButtonProps } from './button.config'

const Button = ({children, onClick, variant = 'primary', size='md',}:ButtonProps) => {
    const variantStyles: Record<ButtonProps['variant'], CSSProperties> = {
        primary:{
            backgroundColor:'blue',
        },
        secondary:{
            backgroundColor:'gray',
        },
        transparent:{
            backgroundColor:'transparent',
        },
        
    }
    const sizeStyles: Record<ButtonProps['size'], CSSProperties> = {
        sm:{
            padding:'0.5rem',
        },
        md:{
            padding:'0.75rem',
        },
        lg:{
            padding:'1.5rem',
        },
        xl:{
            padding:'2rem',
        },
        
    }
  return (
    <button
        style={{
            outline:'none',
            border:'none',
            cursor:'pointer',
            borderRadius:10,
            ...variantStyles[variant],
            ...sizeStyles[size]
        }}
        onClick={onClick}
        className='text-red-950'
    >
        {children}
    </button>
  )
}

export default Button