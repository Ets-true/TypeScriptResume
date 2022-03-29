---
to: <%= path %>/__tests__/<%= page_file_name %>.test.tsx
---
import React from 'react';
import { StoreWrapper } from 'core/testing';
import { render, screen } from '@testing-library/react';

import { <%= page_name %> } from '../'

describe('Page <<%= page_name %> />', () => {
  it('should be in the document', () => {
    render(
      <StoreWrapper>
        <<%= page_name %> />
      </StoreWrapper>
    );

    const element = screen.getByTestId(/<%= page_name %>/i);

    expect(element).toBeInTheDocument();
  });
})