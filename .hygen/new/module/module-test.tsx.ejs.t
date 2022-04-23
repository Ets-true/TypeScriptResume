---
to: <%= path %>/__tests__/<%= module_file_name %>.test.tsx
---
import React from 'react';
import { StoreWrapper } from 'core/testing';
import { render, screen } from '@testing-library/react';

import { <%= module_name %> } from '../';

describe('Module <<%= module_name %> />', () => {
  it('should be in the document', () => {
    render(
      <StoreWrapper>
        <<%= module_name %> />
      </StoreWrapper>
    );

    const element = screen.getByTestId(/<%= module_name %>/i);

    expect(element).toBeInTheDocument();
  });
});
