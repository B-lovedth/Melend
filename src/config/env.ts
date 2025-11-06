/**
 * Environment configuration with validation
 * Centralized management of all environment variables
 */

const getEnvVar = (key: string, defaultValue?: string): string => {
  const value = process.env[key] || defaultValue;
  
  if (!value) {
    throw new Error(`Missing required environment variable: ${key}`);
  }
  
  return value;
};

export const env = {
  // API Configuration
  apiBaseUrl: getEnvVar(
    'NEXT_PUBLIC_API_BASE_URL',
    'https://688beb07cd9d22dda5cba641.mockapi.io'
  ),
  
  // Application Configuration
  appName: getEnvVar('NEXT_PUBLIC_APP_NAME', 'Melend'),
  appUrl: getEnvVar('NEXT_PUBLIC_APP_URL', 'http://localhost:3000'),
  
  // Environment
  nodeEnv: getEnvVar('NODE_ENV', 'development'),
  
  // Computed values
  isDevelopment: process.env.NODE_ENV === 'development',
  isProduction: process.env.NODE_ENV === 'production',
  isTest: process.env.NODE_ENV === 'test',
} as const;

// Validate environment variables on startup
if (typeof window === 'undefined') {
  console.log('✓ Environment variables validated successfully');
}
