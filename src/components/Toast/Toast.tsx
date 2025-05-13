import React from 'react';
import { toastBaseStyles, toastVariantStyles } from './toast.style';
import { ToastProps } from './toast.config';

const Toast = ({ message, variant = 'info', className = '', onClose }: ToastProps) => {
  return (
    <div className={`${toastBaseStyles} ${toastVariantStyles[variant]} ${className}`}>
      <span className="flex-1">{message}</span>
      {onClose && (
        <button
          onClick={onClose}
          className="ml-4 text-xl font-semibold leading-none text-gray-600 hover:text-gray-900 focus:outline-none"
          aria-label="Close"
        >
          &times;
        </button>
      )}
    </div>
  );
};

export default Toast;
