'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface AppImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  quality?: number;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
  fill?: boolean;
  sizes?: string;
  onClick?: () => void;
  fallbackSrc?: string;
  [key: string]: unknown;
}

function AppImage({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  quality = 75,
  placeholder = 'empty',
  blurDataURL,
  fill = false,
  sizes,
  onClick,
  fallbackSrc = '/icon',
  ...props
}: AppImageProps) {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleError = () => {
    if (!hasError && imageSrc !== fallbackSrc) {
      setImageSrc(fallbackSrc);
      setHasError(true);
    }
    setIsLoading(false);
  };

  const handleLoad = () => {
    setIsLoading(false);
    setHasError(false);
  };

  const isDataUrl = imageSrc.startsWith('data:');

  const commonClassName = `${className} ${isLoading ? 'bg-gray-200' : ''} ${
    onClick ? 'cursor-pointer hover:opacity-90 transition-opacity' : ''
  }`;

  const imageProps = {
    src: imageSrc,
    alt,
    className: commonClassName,
    priority,
    quality,
    placeholder,
    blurDataURL,
    unoptimized: isDataUrl,
    onError: handleError,
    onLoad: handleLoad,
    onClick,
    ...props,
  };

  if (fill) {
    return (
      <div
        className={`relative ${className}`}
        style={{ width: width || '100%', height: height || '100%' }}
      >
        <Image {...imageProps} fill sizes={sizes || '100vw'} style={{ objectFit: 'cover' }} />
      </div>
    );
  }

  return <Image {...imageProps} width={width || 400} height={height || 300} />;
}

export default AppImage;