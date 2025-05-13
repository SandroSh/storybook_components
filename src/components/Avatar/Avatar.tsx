import React from 'react';
import { avatarBaseStyles, avatarSizeStyles, avatarVariantStyles, statusIndicatorStyles } from './avatar.style';
import { AvatarProps } from './avatar.config';


const Avatar = ({ src, alt, size = 'md', variant = 'default', status, className }: AvatarProps) => {
  return (
    <div className={`relative inline-block ${avatarSizeStyles[size]}`}>
      <img
        src={src}
        alt={alt}
        className={`${avatarBaseStyles} ${avatarSizeStyles[size]} ${avatarVariantStyles[variant]} ${className}`}
      />
      {status && (
        <span
          className={`absolute bottom-0 right-0 rounded-full border-2 border-white ${statusIndicatorStyles[size]} ${statusIndicatorStyles[status]}`}
        />
      )}
    </div>
  );
};

export default Avatar;
