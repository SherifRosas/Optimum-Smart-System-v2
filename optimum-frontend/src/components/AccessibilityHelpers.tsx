/**
 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};




 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};




 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};







 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};




 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};




 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};


 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};

 * Accessibility helper utilities
 * Provides ARIA attributes and keyboard navigation support
 */

export const getAriaLabel = (label: string, context?: string) => {
  return context ? `${label}, ${context}` : label;
};

export const getRole = (element: 'button' | 'link' | 'navigation' | 'main' | 'region') => {
  const roles = {
    button: 'button',
    link: 'link',
    navigation: 'navigation',
    main: 'main',
    region: 'region',
  };
  return roles[element];
};

export const handleKeyPress = (
  event: React.KeyboardEvent,
  callback: () => void,
  keys: string[] = ['Enter', ' ']
) => {
  if (keys.includes(event.key)) {
    event.preventDefault();
    callback();
  }
};

export const getFocusableElements = (container: HTMLElement) => {
  return container.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
  );
};

export const trapFocus = (container: HTMLElement) => {
  const focusableElements = getFocusableElements(container);
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  const handleTabKey = (e: KeyboardEvent) => {
    if (e.key !== 'Tab') return;

    if (e.shiftKey) {
      if (document.activeElement === firstElement) {
        lastElement?.focus();
        e.preventDefault();
      }
    } else {
      if (document.activeElement === lastElement) {
        firstElement?.focus();
        e.preventDefault();
      }
    }
  };

  container.addEventListener('keydown', handleTabKey);
  return () => container.removeEventListener('keydown', handleTabKey);
};








