import React from 'react';
import { render, screen } from '@testing-library/react';

import { TopBar } from '..';
import { StoreWrapper } from 'core/testing';

describe('Component <TopBar />', () => {
  it('should be render', () => {
    render(
      <StoreWrapper>
        <TopBar />
      </StoreWrapper>
    );
    const element = screen.getByTestId(/TopBar/i);

    expect(element).toBeInTheDocument();
  });
});
