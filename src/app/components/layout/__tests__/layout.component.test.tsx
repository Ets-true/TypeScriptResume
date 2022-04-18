import React from 'react';
import { render, screen } from '@testing-library/react';

import { Layout } from '../';

describe('Component <Layout />', () => {
  it('should be render', () => {
    render(<Layout />);
    const element = screen.getByTestId(/Layout/i);

    expect(element).toBeInTheDocument();
  });
});
