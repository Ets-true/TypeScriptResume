import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'core/state/store';
import { AuthProvider } from 'core/providers/auth.provider';

export const StoreWrapperComponent = (props: any) => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <AuthProvider>{props.children}</AuthProvider>
      </BrowserRouter>
    </Provider>
  );
};
