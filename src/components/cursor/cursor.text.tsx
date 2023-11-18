import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Cursor from './Cursor'

test('renders the cursor', () => {
  render(<Cursor />)
  const cursorElement = screen.getByTestId('.cursor')
  expect(cursorElement).toBeInTheDocument()
})