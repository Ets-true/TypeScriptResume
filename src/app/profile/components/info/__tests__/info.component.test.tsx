import React from 'react';
import { render, screen } from '@testing-library/react';

import { Info } from '../';

describe('Component <Info />', () => {
  it('should be render', () => {
    render(<Info />);
    const element = screen.getByTestId(/Info/i);

    expect(element).toBeInTheDocument();
  });
});
