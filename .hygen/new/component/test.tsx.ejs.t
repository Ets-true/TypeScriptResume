---
to: "<%= generateTest ? `${path}/__tests__/${component_file_name}.test.tsx` : null %>"
---
import React from 'react'
import { render, screen } from '@testing-library/react'

import { <%= component_name %> } from '../'

describe('Component <<%= component_name %> />', () => {
  it('should be render', () => {
    render(<<%= component_name %> />)
    const element = screen.getByTestId(/<%= component_name %>/i)

    expect(element).toBeInTheDocument()
  })
})