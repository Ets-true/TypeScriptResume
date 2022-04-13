import React from 'react';
import { render, screen } from '@testing-library/react';

import { StartLoader } from '../';

describe('Component <StartLoader />', () => {
  beforeAll(() => {
    jest.spyOn(console, 'error').mockImplementation(jest.fn());
  });

  it('should be render', () => {
    render(<StartLoader show={true} />);
    const element = screen.getByTestId(/StartLoader/i);

    expect(element).toBeInTheDocument();
  });
});
