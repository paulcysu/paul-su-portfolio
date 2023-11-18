import 'vitest-canvas-mock'
import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'

import App from './App'

test('renders paul su', () => {
  render(<App />)
  const h1Element = screen.getByText(/Paul Su/i)
  expect(h1Element).toBeVisible()
})