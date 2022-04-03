import React from 'react';
import { render, screen } from '@testing-library/react';

import { RainbowButton } from '../';

describe('Component <RainbowButton />', () => {
  it('should be render', () => {
    render(<RainbowButton />);
    const element = screen.getByTestId(/RainbowButton/i);

    expect(element).toBeInTheDocument();
  });
});
