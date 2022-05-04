import React from 'react';
import { render, screen } from '@testing-library/react';

import { Timeline } from '../';

describe('Component <Timeline />', () => {
  it('should be render', () => {
    render(<Timeline />);
    const element = screen.getByTestId(/Timeline/i);

    expect(element).toBeInTheDocument();
  });
});
