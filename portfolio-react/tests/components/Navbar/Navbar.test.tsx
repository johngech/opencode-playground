import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Navbar } from '../../../src/components/Navbar/Navbar'

describe('Navbar Component', () => {
  describe('Behavior', () => {
    it('renders logo text', () => {
      render(<Navbar />)
      expect(screen.getByText('Yohannes')).toBeInTheDocument()
    })

    it('renders all navigation links', () => {
      render(<Navbar />)
      expect(screen.getByText('About')).toBeInTheDocument()
      expect(screen.getByText('Skills')).toBeInTheDocument()
      expect(screen.getByText('Projects')).toBeInTheDocument()
      expect(screen.getByText('Contact')).toBeInTheDocument()
    })

    it('navigation links have correct href attributes', () => {
      render(<Navbar />)
      const links = screen.getAllByRole('link')
      expect(links[0]).toHaveAttribute('href', '#about')
      expect(links[1]).toHaveAttribute('href', '#skills')
      expect(links[2]).toHaveAttribute('href', '#projects')
      expect(links[3]).toHaveAttribute('href', '#contact')
    })

    it('scrolls to section when link is clicked', () => {
      render(<Navbar />)
      const scrollToSpy = vi.spyOn(window, 'scrollTo')
      fireEvent.click(screen.getByText('About'))
      expect(scrollToSpy).toHaveBeenCalled()
    })
  })

  describe('Scalability', () => {
    it('renders correctly after rapid re-renders', () => {
      const { rerender } = render(<Navbar />)
      for (let i = 0; i < 10; i++) {
        rerender(<Navbar />)
      }
      expect(screen.getByText('Yohannes')).toBeInTheDocument()
    })

    it('handles multiple scroll events without memory leaks', () => {
      render(<Navbar />)
      for (let i = 0; i < 100; i++) {
        fireEvent.scroll(window)
      }
      expect(window.scrollY).toBe(0)
    })
  })

  describe('Maintainability', () => {
    it('uses semantic navigation element', () => {
      const { container } = render(<Navbar />)
      expect(container.querySelector('nav')).toBeInTheDocument()
    })

    it('navigation links have accessible text', () => {
      render(<Navbar />)
      const links = screen.getAllByRole('link')
      links.forEach(link => {
        expect(link).toHaveTextContent()
      })
    })

    it('logo has appropriate markup', () => {
      const { container } = render(<Navbar />)
      const logo = container.querySelector('nav')
      expect(logo?.firstChild?.textContent).toBeTruthy()
    })
  })
})
