import React from 'react';
import { render, screen } from '@testing-library/react';

import { SignIn } from '../';
import { StoreWrapper } from 'core/testing';

describe('Page <SignIn />', () => {
  it('should be in the document', () => {
    render(
      <StoreWrapper>
        <SignIn />
      </StoreWrapper>
    );
    const element = screen.getByTestId(/SignIn/i);

    expect(element).toBeInTheDocument();
  });
});
