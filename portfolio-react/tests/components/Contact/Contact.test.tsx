import { describe, it, expect, vi, beforeEach } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Contact } from '../../../src/components/Contact/Contact'

describe('Contact Component', () => {
  beforeEach(() => {
    vi.spyOn(window, 'scrollTo').mockImplementation(() => {})
  })

  describe('Behavior', () => {
    it('renders Contact section', () => {
      render(<Contact />)
      expect(screen.getByText('Contact')).toBeInTheDocument()
    })

    it('renders contact form', () => {
      render(<Contact />)
      expect(screen.getByRole('form')).toBeInTheDocument()
    })

    it('renders name input', () => {
      render(<Contact />)
      expect(screen.getByPlaceholderText('Your Name')).toBeInTheDocument()
    })

    it('renders email input', () => {
      render(<Contact />)
      expect(screen.getByPlaceholderText('Your Email')).toBeInTheDocument()
    })

    it('renders message textarea', () => {
      render(<Contact />)
      expect(screen.getByPlaceholderText('Your Message')).toBeInTheDocument()
    })

    it('renders submit button', () => {
      render(<Contact />)
      expect(screen.getByText('Send Message')).toBeInTheDocument()
    })

    it('renders social links', () => {
      render(<Contact />)
      expect(screen.getByText('GitHub')).toBeInTheDocument()
      expect(screen.getByText('LinkedIn')).toBeInTheDocument()
      expect(screen.getByText('Email')).toBeInTheDocument()
    })
  })

  describe('Scalability', () => {
    it('renders correctly after multiple re-renders', () => {
      const { rerender } = render(<Contact />)
      for (let i = 0; i < 10; i++) {
        rerender(<Contact />)
      }
      expect(screen.getByText('Contact')).toBeInTheDocument()
    })

    it('handles rapid form interactions', () => {
      render(<Contact />)
      const nameInput = screen.getByPlaceholderText('Your Name')
      fireEvent.change(nameInput, { target: { value: 'Test' } })
      fireEvent.change(nameInput, { target: { value: 'Test User' } })
      fireEvent.change(nameInput, { target: { value: '' } })
      expect(nameInput).toHaveValue('')
    })
  })

  describe('Maintainability', () => {
    it('uses semantic form element', () => {
      const { container } = render(<Contact />)
      expect(container.querySelector('form')).toBeInTheDocument()
    })

    it('form has proper labels', () => {
      const { container } = render(<Contact />)
      expect(container.querySelector('label')).toBeInTheDocument()
    })

    it('inputs have appropriate types', () => {
      render(<Contact />)
      const emailInput = screen.getByPlaceholderText('Your Email')
      expect(emailInput).toHaveAttribute('type', 'email')
    })
  })
})
