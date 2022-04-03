import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
  verbose: true,

  testMatch: ['<rootDir>/e2e/**/*.steps.{js,jsx,ts,tsx}'],

  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest',
  },

  preset: './e2e/jest-puppeteer-preset.ts',

  testTimeout: 60000,
};

export default config;
