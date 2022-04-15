import React from 'react';
import { StoreWrapper } from 'core/testing';
import { render, screen } from '@testing-library/react';

import { Home } from '../';

describe('Page <Home />', () => {
  it('should be in the document', () => {
    render(
      <StoreWrapper>
        <Home />
      </StoreWrapper>
    );

    const element = screen.getByTestId(/Home/i);

    expect(element).toBeInTheDocument();
  });
});
