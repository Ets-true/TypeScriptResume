import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'core/state/store';

export const StoreWrapperComponent = (props: any) => {
  return (
    <BrowserRouter>
      <Provider store={store}>{props.children}</Provider>
    </BrowserRouter>
  );
};
