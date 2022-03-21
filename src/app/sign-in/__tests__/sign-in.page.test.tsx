import React from 'react'
import { render, screen } from '@testing-library/react'

import { SignIn } from '../'

describe('Page <SignIn />', () => {
  render(<SignIn />)
  const element = screen.getByTestId(/SignIn/i)

  expect(element).toBeInTheDocument()
})