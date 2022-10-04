export const viewports = ['macbook-15', 'iphone-xr'];

// Load the environment config according to NODE_ENV.
const env = Cypress.env('CYPRESS_ENV');

// eslint-disable-next-line no-unused-vars
const API_TOKENS = {
  dev: 'updater-api-token',
  staging: 'bf4a81c00bb711e5b9390800200c9a66',
  // production: Cypress.env('INVITE_TOKEN'),
};

export const environment = {
  apiToken: 'bf4a81c00bb711e5b9390800200c9a66',
  subdomain: env,
};
