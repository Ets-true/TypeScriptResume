import React from 'react';
import { render, screen } from '@testing-library/react';

import { Way } from '../';

describe('Component <Way />', () => {
  it('should be render', () => {
    render(<Way />);
    const element = screen.getByTestId(/Way/i);

    expect(element).toBeInTheDocument();
  });
});
