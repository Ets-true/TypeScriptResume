import React from 'react';
import { render, screen } from '@testing-library/react';
import { StoreWrapper } from 'core/testing';
import { App } from 'app';

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
