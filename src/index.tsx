import React from 'react';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import { App } from './app';
import { reduxStore } from './core/state/redux-store';
import * as serviceWorker from './serviceWorker';

import { GlobalStyles } from 'core/ui/styles';

const container = document.getElementById('root');

if (!container) {
  throw new Error('Failed to find root element!');
}

const root = createRoot(container);

root.render(
  <Provider store={reduxStore}>
    <BrowserRouter>
      <GlobalStyles />

      <App />

      <ToastContainer
        position="bottom-right"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </BrowserRouter>
  </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
