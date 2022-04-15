import React from 'react';
import { render, screen } from '@testing-library/react';

import { AppBar } from '../';

describe('Component <AppBar />', () => {
  it('should be render', () => {
    render(<AppBar />);
    const element = screen.getByTestId(/AppBar/i);

    expect(element).toBeInTheDocument();
  });
});
