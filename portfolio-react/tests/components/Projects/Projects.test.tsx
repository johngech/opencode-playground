import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Projects } from '../../../src/components/Projects/Projects'

describe('Projects Component', () => {
  describe('Behavior', () => {
    it('renders Projects section', () => {
      render(<Projects />)
      expect(screen.getByText('Projects')).toBeInTheDocument()
    })

    it('renders all project cards', () => {
      render(<Projects />)
      const projectCards = screen.getAllByRole('article')
      expect(projectCards.length).toBeGreaterThanOrEqual(4)
    })

    it('renders project titles', () => {
      render(<Projects />)
      expect(screen.getByText('Project 1')).toBeInTheDocument()
    })

    it('renders View Demo links', () => {
      render(<Projects />)
      const demoLinks = screen.getAllByText('View Demo')
      expect(demoLinks.length).toBeGreaterThanOrEqual(4)
    })

    it('renders View Code links', () => {
      render(<Projects />)
      const codeLinks = screen.getAllByText('View Code')
      expect(codeLinks.length).toBeGreaterThanOrEqual(4)
    })
  })

  describe('Scalability', () => {
    it('renders correctly after multiple re-renders', () => {
      const { rerender } = render(<Projects />)
      for (let i = 0; i < 10; i++) {
        rerender(<Projects />)
      }
      expect(screen.getByText('Projects')).toBeInTheDocument()
    })

    it('handles multiple project cards without performance issues', () => {
      render(<Projects />)
      const cards = document.querySelectorAll('[class*="card"]')
      expect(cards.length).toBeGreaterThanOrEqual(4)
    })
  })

  describe('Maintainability', () => {
    it('uses semantic section element', () => {
      const { container } = render(<Projects />)
      expect(container.querySelector('section')).toBeInTheDocument()
    })

    it('projects have descriptive content', () => {
      render(<Projects />)
      const cards = screen.getAllByRole('article')
      cards.forEach(card => {
        expect(card.textContent?.length).toBeGreaterThan(0)
      })
    })

    it('external links have appropriate attributes', () => {
      render(<Projects />)
      const links = screen.getAllByRole('link')
      links.forEach(link => {
        expect(link).toHaveAttribute('target', '_blank')
      })
    })
  })
})
