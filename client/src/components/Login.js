import styled from 'styled-components/macro'

export default function Login({ onHandleSubmitAuthor }) {
  return (
    <form onSubmit={onHandleSubmitAuthor}>
      <label htmlFor="name">Your Name:</label>
      <input
        type="text"
        name="author"
        placeholder="Enter your Name and press Enter"
        required
      />
    </form>
  )
}
