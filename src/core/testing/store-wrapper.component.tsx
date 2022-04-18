import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'core/state/store';
import { AuthProvider } from 'core/providers/auth.provider';

export const StoreWrapperComponent = (props: any) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AuthProvider>{props.children}</AuthProvider>
      </Provider>
    </BrowserRouter>
  );
};
