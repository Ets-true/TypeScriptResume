import React from 'react';
import { render, screen } from '@testing-library/react';

import { Sidebar } from '../';
import { StoreWrapper } from 'core/testing';

describe('Component <Sidebar />', () => {
  it('should be render', () => {
    render(
      <StoreWrapper>
        <Sidebar />
      </StoreWrapper>
    );
    const element = screen.getByTestId(/Sidebar/i);

    expect(element).toBeInTheDocument();
  });
});
