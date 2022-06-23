import React from 'react';
import { store } from 'core/state';
import { Provider } from 'react-redux';
import { GlobalStyles } from 'core/ui/styles';
import { BrowserRouter } from 'react-router-dom';

export const StoreWrapperComponent = (props: any) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <GlobalStyles />
        {props.children}
      </Provider>
    </BrowserRouter>
  );
};
