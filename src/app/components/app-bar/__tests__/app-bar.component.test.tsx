import React from 'react';
import { render, screen } from '@testing-library/react';

import { AppBar } from '../';
import { StoreWrapper } from 'core/testing';

describe('Component <AppBar />', () => {
  it('should be render', () => {
    render(
      <StoreWrapper>
        <AppBar />
      </StoreWrapper>
    );
    const element = screen.getByTestId(/AppBar/i);

    expect(element).toBeInTheDocument();
  });
});
