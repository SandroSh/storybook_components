import React from 'react'
import { baseStyles, sizeStyles, variantStyles } from './modal.style'
import { ModalProps } from './modal.config'

const Modal = ({
  isOpen,
  onClose,
  children,
  size = 'md',
  variant = 'default',
  className,
}: ModalProps) => {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className={`${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}>
        {children}
        <button onClick={onClose} className="absolute top-2 right-2 text-gray-500 hover:text-gray-800">
          {/* &times; */}
          ❌
        </button>
      </div>
    </div>
  )
}

export default Modal
