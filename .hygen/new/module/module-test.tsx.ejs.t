---
to: <%= path %>/__tests__/<%= moduleFileName %>.test.tsx
---
import React from 'react';
import { StoreWrapper } from 'core/testing';
import { render, screen } from '@testing-library/react';

import { <%= moduleName %> } from '../';

describe('Module <<%= moduleName %> />', () => {
  it('should be in the document', () => {
    render(
      <StoreWrapper>
        <<%= moduleName %> />
      </StoreWrapper>
    );

    const element = screen.getByTestId(/<%= moduleName %>/i);

    expect(element).toBeInTheDocument();
  });
});
