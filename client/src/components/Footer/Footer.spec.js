import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Footer from './Footer'

describe('CreateNewQuestion', () => {
  it('form works', () => {
    const mockOnCreateQuestion = jest.fn()
    render(<Footer onCreateQuestion={mockOnCreateQuestion} />)

    const questionInput = screen.getByPlaceholderText(
      'Enter your question here!'
    )
    userEvent.type(questionInput, 'What is Love')

    const button = screen.getByRole('button')
    userEvent.click(button)

    expect(mockOnCreateQuestion).toHaveBeenCalledWith({
      text: 'What is Love',
      author: 'Unbekannt',
    })
  })
})
