module.exports = {
  FEATURE_STATES: ['Redux', 'Default Mobx', 'Mobx with decorators'],
  paths: {
    fromRoot: {
      rootSaga: 'src/core/state/saga.ts',
      reduxStore: 'src/core/state/redux.store.ts',
    },
    fromHome: {
      rootSaga: 'core/state/saga',
      reduxStore: 'core/state/redux.store',
    },
  },
};
