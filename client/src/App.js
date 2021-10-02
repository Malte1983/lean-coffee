import Card from './components/Card'
import { useState } from 'react'
import styled from 'styled-components/macro'
import Footer from './components/Footer/Footer'
import { nanoid } from 'nanoid'
import Login from './components/Login'
import { Route, Switch } from 'react-router-dom'

const exampleData = [
  {
    author: 'Malte S.',
    text: 'Wie lernt man Node.js?',
    id: 1,
  },

  {
    author: 'Mareike B.',
    text: 'What is Error-Handling?',
    id: 2,
  },
  {
    author: 'Fabian H.',
    text: 'What is MongoDB?',
    id: 3,
  },
  {
    author: 'Sabrina W.',
    text: 'What is Node?',
    id: 4,
  },
]

function App() {
  const [data, setData] = useState(() => {
    if (localStorage.getItem('data')) {
      return JSON.parse(localStorage.getItem('data'))
    } else {
      return exampleData
    }
  })

  const [authorName, setAuthorName] = useState('')
  console.log(authorName)

  return (
    <Main>
      <Switch>
        <Route exact path="/">
          <Login onHandleSubmitAuthor={handleSubmitAuthor} />
        </Route>
        <Route exact path="/board">
          {data.map(data => (
            <Card
              author={data.author}
              text={data.text}
              key={data.id}
              onDeleteButtonClick={handleDeleteButton}
              id={data.id}
            />
          ))}
          <Footer
            // authorName={authorName}
            onCreateQuestion={handleCreateQuestion}
            onHandleAuthorLocalStorage={handleAuthorLocalStorage}
          />
        </Route>
      </Switch>
    </Main>
  )

  function handleSubmitAuthor(event) {
    event.preventDefault()
    const form = event.target
    const author = form.elements.author.value
    const stringifiedValue = JSON.stringify(author)
    localStorage.setItem('author', stringifiedValue)
    setAuthorName(author)
  }

  function handleAuthorLocalStorage() {
    if (localStorage.getItem('author')) {
      const newAuthor = JSON.parse(localStorage.getItem('author'))
      return newAuthor
    }
  }
  function handleCreateQuestion({ text, author }) {
    const newQuestion = [
      ...data,
      {
        id: nanoid(),
        text: text,
        author: author,
      },
    ]
    const stringifiedValue = JSON.stringify(newQuestion)
    localStorage.setItem('data', stringifiedValue)
    setData(newQuestion)
  }
  function handleDeleteButton(id) {
    const filteredData = data.filter(card => card.id !== id)
    const stringifiedValue = JSON.stringify(filteredData)
    localStorage.setItem('data', stringifiedValue)
    setData(filteredData)
  }
}

export default App

const Main = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 10px;
  padding: 10px;
`
