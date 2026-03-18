'use client';
import React from 'react';
import * as HeroIcons from '@heroicons/react/24/outline';
import * as HeroIconsSolid from '@heroicons/react/24/solid';
import { QuestionMarkCircleIcon } from '@heroicons/react/24/outline';

type IconVariant = 'outline' | 'solid';
type HeroIconComponent = React.ComponentType<React.SVGProps<SVGSVGElement>>;

interface IconProps {
  name: string;
  variant?: IconVariant;
  size?: number;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  [key: string]: unknown;
}

function Icon({
  name,
  variant = 'outline',
  size = 24,
  className = '',
  onClick,
  disabled = false,
  ...props
}: IconProps) {
  const iconSet = variant === 'solid' ? HeroIconsSolid : HeroIcons;
  const IconComponent = iconSet[name as keyof typeof iconSet] as HeroIconComponent | undefined;
  const clickable = Boolean(onClick) && !disabled;
  const stateClass = disabled ? 'opacity-50 cursor-not-allowed' : clickable ? 'cursor-pointer hover:opacity-80' : '';

  if (!IconComponent) {
    return (
      <QuestionMarkCircleIcon
        width={size}
        height={size}
        className={`text-gray-400 ${stateClass} ${className}`}
        onClick={clickable ? onClick : undefined}
        {...(props as React.SVGProps<SVGSVGElement>)}
      />
    );
  }

  return (
    <IconComponent
      width={size}
      height={size}
      className={`${stateClass} ${className}`}
      onClick={clickable ? onClick : undefined}
      {...(props as React.SVGProps<SVGSVGElement>)}
    />
  );
}

export default Icon;