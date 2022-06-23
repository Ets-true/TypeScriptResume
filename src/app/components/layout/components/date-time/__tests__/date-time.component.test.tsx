import React from 'react';
import { render, screen } from '@testing-library/react';

import { DateTime } from '../';

describe('Component <date-time />', () => {
  it('should be render', () => {
    render(<DateTime />);
    const element = screen.getByTestId(/date-time/i);

    expect(element).toBeInTheDocument();
  });
});
