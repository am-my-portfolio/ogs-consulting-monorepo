import { Environment, StandardHeader, CustomHeader } from './headers';

export const cors_config = {
  [Environment.LOCAL]: '*',
  [Environment.DEV]: [
    'http://localhost:4000',
    'https://silolabs.co',
    /\.pr.silolabs\.dev$/,
    /\.a.run\.app$/,
    /\.us-central1.run.app$/,
  ],
  [Environment.PROD]: ['https://silolabs.co'],
};

export const cors_methods = ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'];
export const cors_allowed_headers = [
  ...Object.values(CustomHeader),
  ...Object.values(StandardHeader),
];
export const cors_max_age = 86400;
