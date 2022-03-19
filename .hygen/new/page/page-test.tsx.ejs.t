---
to: <%= path %>/__tests__/<%= page_file_name %>.test.tsx
---
import React from 'react'
import { render, screen } from '@testing-library/react'

import { <%= page_name %> } from '../'

describe('Page <<%= page_name %> />', () => {
  render(<<%= page_name %> />)
  const element = screen.getByTestId(/<%= page_name %>/i)

  expect(element).toBeInTheDocument()
})