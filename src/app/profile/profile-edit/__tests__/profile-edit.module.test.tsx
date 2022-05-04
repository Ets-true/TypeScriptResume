import React from 'react';
import { StoreWrapper } from 'core/testing';
import { render, screen } from '@testing-library/react';

import { ProfileEdit } from '../';

describe('Module <ProfileEdit />', () => {
  it('should be in the document', () => {
    render(
      <StoreWrapper>
        <ProfileEdit />
      </StoreWrapper>
    );

    const element = screen.getByTestId(/ProfileEdit/i);

    expect(element).toBeInTheDocument();
  });
});
