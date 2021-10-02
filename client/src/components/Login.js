import styled from 'styled-components/macro'
import { useState } from 'react'

export default function Login({ onAddAuthor }) {
  //   const [author, setAuthor] = useState('')

  //   const addAuthorNameHandler = event => {
  //     setAuthor(event.target.value)
  //   }

  return (
    <form onSubmit={e => handleSubmit(e)}>
      <label htmlFor="name">Your Name:</label>
      <input
        type="text"
        name="author"
        placeholder="Enter your Name and press Enter"
        required
        // onChange={addAuthorNameHandler}
      />
    </form>
  )

  function handleSubmit(event) {
    event.preventDefault()
    const form = event.target
    const author = form.elements.author.value
    console.log(author)
    onAddAuthor({
      author: author,
    })
  }
}
