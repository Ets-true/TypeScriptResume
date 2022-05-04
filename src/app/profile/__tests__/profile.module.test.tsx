import React from 'react';
import { StoreWrapper } from 'core/testing';
import { render, screen } from '@testing-library/react';

import { Profile } from '../';

describe('Module <Profile />', () => {
  it('should be in the document', () => {
    render(
      <StoreWrapper>
        <Profile />
      </StoreWrapper>
    );

    const element = screen.getByTestId(/Profile/i);

    expect(element).toBeInTheDocument();
  });
});
