import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '../app/page'

// Test suite for the Home component

describe('Home Component', () => {
    it('renders a button with the correct text', () => {
        render(<Home />)
        const buttonElement = screen.getByText(/Click me/i)
        expect(buttonElement).toBeInTheDocument()
    })
})
