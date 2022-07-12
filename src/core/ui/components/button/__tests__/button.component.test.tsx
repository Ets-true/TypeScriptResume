import React from 'react';
import { render, screen } from '@testing-library/react';

import { Button } from '../';

describe('Component <Button />', () => {
  it('should be render', () => {
    render(<Button />);
    const element = screen.getByTestId(/Button/i);

    expect(element).toBeInTheDocument();
  });
});
