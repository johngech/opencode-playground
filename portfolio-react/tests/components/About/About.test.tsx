import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { About } from '../../../src/components/About/About'

describe('About Component', () => {
  describe('Behavior', () => {
    it('renders About section', () => {
      render(<About />)
      expect(screen.getByText('About')).toBeInTheDocument()
    })

    it('renders bio text', () => {
      render(<About />)
      expect(screen.getByText(/I\'m an AI-Native/i)).toBeInTheDocument()
    })

    it('renders main paragraph', () => {
      render(<About />)
      expect(screen.getByText(/I\'m an AI-Native Full-Stack Developer/i)).toBeInTheDocument()
    })

    it('renders section with id for navigation', () => {
      const { container } = render(<About />)
      expect(container.querySelector('#about')).toBeInTheDocument()
    })
  })

  describe('Scalability', () => {
    it('renders correctly after multiple re-renders', () => {
      const { rerender } = render(<About />)
      for (let i = 0; i < 10; i++) {
        rerender(<About />)
      }
      expect(screen.getByText('About')).toBeInTheDocument()
    })

    it('handles long bio text without issues', () => {
      render(<About />)
      const bioText = screen.getByText(/I\'m an AI-Native Full-Stack Developer/i)
      expect(bioText.textContent?.length).toBeGreaterThan(0)
    })
  })

  describe('Maintainability', () => {
    it('uses semantic section element', () => {
      const { container } = render(<About />)
      expect(container.querySelector('section')).toBeInTheDocument()
    })

    it('has appropriate heading structure', () => {
      const { container } = render(<About />)
      expect(container.querySelector('h2')).toBeInTheDocument()
    })

    it('content is readable and accessible', () => {
      render(<About />)
      const paragraphs = screen.getAllByRole('paragraph')
      expect(paragraphs.length).toBeGreaterThan(0)
    })
  })
})
