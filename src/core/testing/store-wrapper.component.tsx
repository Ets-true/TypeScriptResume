import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { reduxStore } from 'core/state/redux.store';
import { AuthProvider } from 'core/providers/auth.provider';
import { MobxStoreProvider } from 'core/state/mobx.store';
import { I18nextProvider } from 'react-i18next';

import i18n from './i18next-test.config';

export const StoreWrapperComponent = (props: any) => {
  return (
    <Provider store={reduxStore}>
      <MobxStoreProvider>
        <I18nextProvider i18n={i18n}>
          <BrowserRouter>
            <AuthProvider>{props.children}</AuthProvider>
          </BrowserRouter>
        </I18nextProvider>
      </MobxStoreProvider>
    </Provider>
  );
};
