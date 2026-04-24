import { describe, it, expect, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Callout } from '../../../src/components/Callout/Callout'

describe('Callout Component', () => {
  describe('Behavior', () => {
    it('renders callout heading', () => {
      render(<Callout />)
      expect(screen.getByText('Let\'s Build Something Great Together')).toBeInTheDocument()
    })

    it('renders callout text', () => {
      render(<Callout />)
      expect(screen.getByText(/I\'m always open/i)).toBeInTheDocument()
    })

    it('renders CTA button', () => {
      render(<Callout />)
      expect(screen.getByText('Start a Conversation')).toBeInTheDocument()
    })

    it('CTA button scrolls to contact section', () => {
      render(<Callout />)
      const scrollToSpy = vi.spyOn(window, 'scrollTo')
      fireEvent.click(screen.getByText('Start a Conversation'))
      expect(scrollToSpy).toHaveBeenCalled()
    })
  })

  describe('Scalability', () => {
    it('renders correctly after multiple re-renders', () => {
      const { rerender } = render(<Callout />)
      for (let i = 0; i < 10; i++) {
        rerender(<Callout />)
      }
      expect(screen.getByText('Let\'s Build Something Great Together')).toBeInTheDocument()
    })

    it('handles rapid button clicks', () => {
      render(<Callout />)
      for (let i = 0; i < 50; i++) {
        fireEvent.click(screen.getByText('Start a Conversation'))
      }
      expect(screen.getByText('Start a Conversation')).toBeInTheDocument()
    })
  })

  describe('Maintainability', () => {
    it('uses semantic section element', () => {
      const { container } = render(<Callout />)
      expect(container.querySelector('section')).toBeInTheDocument()
    })

    it('has appropriate heading structure', () => {
      const { container } = render(<Callout />)
      expect(container.querySelector('h2')).toBeInTheDocument()
    })

    it('button has descriptive text', () => {
      render(<Callout />)
      const button = screen.getByRole('button')
      expect(button.textContent).toBeTruthy()
    })
  })
})
