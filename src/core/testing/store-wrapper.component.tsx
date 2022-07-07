import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { reduxStore } from 'core/state/redux-store';
import { AuthProvider } from 'core/providers/auth.provider';

export const StoreWrapperComponent = (props: any) => {
  return (
    <Provider store={reduxStore}>
      <BrowserRouter>
        <AuthProvider>{props.children}</AuthProvider>
      </BrowserRouter>
    </Provider>
  );
};
