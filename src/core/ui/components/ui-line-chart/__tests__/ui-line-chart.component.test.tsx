import React from 'react';
import { render, screen } from '@testing-library/react';

import { UiLineChart } from '../';

describe('Component <UiLineChart />', () => {
  it('should be render', () => {
    render(<UiLineChart />);
    const element = screen.getByTestId(/UiLineChart/i);

    expect(element).toBeInTheDocument();
  });
});
