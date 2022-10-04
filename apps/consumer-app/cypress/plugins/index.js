module.exports = (on, config) => {
  if (config.testingType === 'component') {
    // eslint-disable-next-line global-require
    require('@cypress/react/plugins/react-scripts')(on, config);
  }

  return config;
};
