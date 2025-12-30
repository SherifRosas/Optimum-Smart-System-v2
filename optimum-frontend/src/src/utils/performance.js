/**
 * Performance optimization utilities
 */

/**
 * Throttle function calls to limit execution frequency
 * @param {Function} func - Function to throttle
 * @param {number} limit - Time limit in milliseconds
 * @returns {Function} Throttled function
 */
export const throttle = (func, limit) => {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
};

/**
 * Debounce function calls to delay execution
 * @param {Function} func - Function to debounce
 * @param {number} wait - Wait time in milliseconds
 * @returns {Function} Debounced function
 */
export const debounce = (func, wait) => {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

/**
 * Optimized requestAnimationFrame wrapper
 * @param {Function} callback - Callback function
 * @returns {number} Request ID
 */
export const optimizedRAF = (callback) => {
  return requestAnimationFrame(() => {
    requestAnimationFrame(callback);
  });
};

/**
 * Check if user prefers reduced motion
 * @returns {boolean}
 */
export const prefersReducedMotion = () => {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
};

/**
 * Batch state updates using React's automatic batching
 * @param {Function} callback - Callback with state updates
 */
export const batchUpdates = (callback) => {
  // React 18+ automatically batches updates
  callback();
};

/**
 * Log performance metrics (development only)
 * @param {string} label - Performance label
 * @param {Function} fn - Function to measure
 */
export const measurePerformance = (label, fn) => {
  if (process.env.NODE_ENV === 'development') {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    console.log(`[Performance] ${label}: ${(end - start).toFixed(2)}ms`);
    return result;
  }
  return fn();
};



