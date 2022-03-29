import React from 'react';
import { render, screen } from '@testing-library/react';
import App from 'app/app.page';
import { StoreWrapper } from 'core/testing';

describe('app page', () => {
  it('should be render', () => {
    render(
      <StoreWrapper>
        <App />
      </StoreWrapper>
    );

    const element = screen.getByTestId(/AppPage/i);
    expect(element).toBeInTheDocument();
  });
});
