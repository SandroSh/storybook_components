import React from 'react';
import { badgeBaseStyles, badgeVariantStyles, badgeSizeStyles } from './badge.style';
import { BadgeProps } from './badge.config';

const Badge = ({
  text,
  size = 'md',
  variant = 'solid',
  className = '',
}: BadgeProps) => {
  return (
    <span className={`${badgeBaseStyles} ${badgeVariantStyles[variant]} ${badgeSizeStyles[size]} ${className}`}>
      {text}
    </span>
  );
};

export default Badge;
