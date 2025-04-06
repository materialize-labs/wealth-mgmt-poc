/**
 * App configuration for toggling between different industry modes (wealth management / REPE)
 * This file enables switching the app's focus without code changes via environment variables
 */

/**
 * The available application modes
 */
export type AppMode = 'wealth-management' | 'repe';

/**
 * The current app mode, determined by environment variable with fallback to wealth-management
 */
export const APP_MODE = (process.env.NEXT_PUBLIC_APP_MODE ||
  'wealth-management') as AppMode;

/**
 * Helper flags for conditional logic
 */
export const isWealthManagement = APP_MODE === 'wealth-management';
export const isREPE = APP_MODE === 'repe';
