import React from 'react';
import { render, screen } from '@testing-library/react';
import { StoreWrapper } from 'core/testing';
import { App } from 'app';

describe('app page', () => {
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(jest.fn());
    // jest.spyOn(console, 'debug').mockImplementation(jest.fn());
  });

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
