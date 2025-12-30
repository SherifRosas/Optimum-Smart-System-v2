import React from 'react';
import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};




import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};




import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};







import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};




import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};




import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};


import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};

import { handleKeyPress } from './AccessibilityHelpers';

interface AccessibleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  'aria-label'?: string;
  'aria-describedby'?: string;
  children: React.ReactNode;
}

/**
 * Accessible button component with proper ARIA attributes
 */
export const AccessibleButton: React.FC<AccessibleButtonProps> = ({
  onClick,
  'aria-label': ariaLabel,
  'aria-describedby': ariaDescribedBy,
  children,
  className = '',
  ...props
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    handleKeyPress(e, () => onClick?.(e as any));
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={className}
      {...props}
    >
      {children}
    </button>
  );
};








