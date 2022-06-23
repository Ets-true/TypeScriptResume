import React from 'react';
import { render, screen } from '@testing-library/react';

import { Sidebar } from '../';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from 'core/state';

describe('Component <Sidebar />', () => {
  it('should be render', () => {
    render(
      <BrowserRouter>
        <Provider store={store}>
          <Sidebar />
        </Provider>
      </BrowserRouter>
    );
    const element = screen.getByTestId(/Sidebar/i);

    expect(element).toBeInTheDocument();
  });
});
