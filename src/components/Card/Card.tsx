import React from 'react';
import { CardProps } from './card.config';
import { cardBaseStyles, cardSizeStyles, cardVariantStyles } from './card.style';

const Card = ({
  children,
  variant = 'basic',
  size = 'md',
  className,
  onClick,
}: CardProps) => {
  return (
    <div
      onClick={onClick}
      className={`${cardBaseStyles} ${cardVariantStyles[variant]} ${cardSizeStyles[size]} ${className}`}
    >
      {children}
    </div>
  );
};

export default Card;
