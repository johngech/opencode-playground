import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Footer } from '../../../src/components/Footer/Footer'

describe('Footer Component', () => {
  describe('Behavior', () => {
    it('renders copyright text', () => {
      render(<Footer />)
      expect(screen.getByText(/© \d{4} Yohannes Getachew/i)).toBeInTheDocument()
    })

    it('renders current year', () => {
      render(<Footer />)
      const currentYear = new Date().getFullYear()
      expect(screen.getByText(new RegExp(currentYear.toString()))).toBeInTheDocument()
    })
  })

  describe('Scalability', () => {
    it('renders correctly after multiple re-renders', () => {
      const { rerender } = render(<Footer />)
      for (let i = 0; i < 10; i++) {
        rerender(<Footer />)
      }
      expect(screen.getByText(/© \d{4} Yohannes Getachew/i)).toBeInTheDocument()
    })

    it('handles year changes without issues', () => {
      render(<Footer />)
      expect(screen.getByText(/© \d{4} Yohannes Getachew/i)).toBeInTheDocument()
    })
  })

  describe('Maintainability', () => {
    it('uses semantic footer element', () => {
      const { container } = render(<Footer />)
      expect(container.querySelector('footer')).toBeInTheDocument()
    })

    it('copyright text is readable', () => {
      render(<Footer />)
      const footer = document.querySelector('footer')
      expect(footer?.textContent?.length).toBeGreaterThan(0)
    })

    it('content is accessible', () => {
      render(<Footer />)
      const footer = screen.getByRole('contentinfo')
      expect(footer).toBeInTheDocument()
    })
  })
})
