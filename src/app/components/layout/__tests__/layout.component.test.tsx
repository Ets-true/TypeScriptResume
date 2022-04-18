import React from 'react';
import { render, screen } from '@testing-library/react';

import { Layout } from '../';
import { StoreWrapper } from 'core/testing';

describe('Component <Layout />', () => {
  it('should be render', () => {
    render(
      <StoreWrapper>
        <Layout />
      </StoreWrapper>
    );
    const element = screen.getByTestId(/Layout/i);

    expect(element).toBeInTheDocument();
  });
});
