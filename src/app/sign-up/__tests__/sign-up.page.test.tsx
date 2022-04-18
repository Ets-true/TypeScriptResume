import React from 'react';
import { render, screen } from '@testing-library/react';

import { SignUp } from '..';
import { StoreWrapper } from 'core/testing';

describe('Page <SignUp />', () => {
  it('shoud be in the document', () => {
    render(
      <StoreWrapper>
        <SignUp />
      </StoreWrapper>
    );
    const element = screen.getByTestId(/SignUp/i);

    expect(element).toBeInTheDocument();
  });
});
