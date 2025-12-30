/**
 * Performance optimization utilities
 */

/**
 * Throttle function calls to limit execution frequency
 * @param func - Function to throttle
 * @param limit - Time limit in milliseconds
 * @returns Throttled function
 */
export const throttle = <T extends (...args: unknown[]) => unknown>(
  func: T,
  limit: number
): ((...args: Parameters<T>) => void) => {
  let inThrottle: boolean;
  return function(this: unknown, ...args: Parameters<T>): void {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Debounce function calls to delay execution
 * @param func - Function to debounce
 * @param wait - Wait time in milliseconds
 * @returns Debounced function
 */
export const debounce = <T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout | null;
  return function executedFunction(this: unknown, ...args: Parameters<T>): void {
    const later = (): void => {
      if (timeout) clearTimeout(timeout);
      func(...args);
    };
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Optimized requestAnimationFrame wrapper
 * @param callback - Callback function
 * @returns Request ID
 */
export const optimizedRAF = (callback: () => void): number => {
  return requestAnimationFrame(() => {
    requestAnimationFrame(callback);
  });
};

/**
 * Check if user prefers reduced motion
 * @returns boolean
 */
export const prefersReducedMotion = (): boolean => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Batch state updates using React's automatic batching
 * @param callback - Callback with state updates
 */
export const batchUpdates = (callback: () => void): void => {
  // React 18+ automatically batches updates
  callback();
};

/**
 * Log performance metrics (development only)
 * @param label - Performance label
 * @param fn - Function to measure
 */
export const measurePerformance = <T,>(label: string, fn: () => T): T => {
  if (process.env.NODE_ENV === 'development') {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    console.log(`[Performance] ${label}: ${(end - start).toFixed(2)}ms`);
    return result;
  }
  return fn();
};




