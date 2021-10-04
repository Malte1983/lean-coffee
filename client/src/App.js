import Card from './components/Card'
import { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import Footer from './components/Footer/Footer'
import Login from './components/Login'
import { Route, Switch, Redirect } from 'react-router-dom'
import getCards from './services/getCards'

function App() {
  // const [data, setData] = useState(() => {
  //   if (localStorage.getItem('data')) {
  //     return JSON.parse(localStorage.getItem('data'))
  //   } else {
  //     return exampleData
  //   }
  // })

  const [authorName, setAuthorName] = useState('')
  const [cards, setCards] = useState([])
  useEffect(() => {
    getCards()
      .then(data => setCards(data))
      .catch(error => console.error(error))
  }, [])

  return (
    <Main>
      <Switch>
        <Route exact path="/">
          {localStorage.getItem('author') ? (
            <Redirect to="board" />
          ) : (
            <Login onHandleSubmitAuthor={handleSubmitAuthor} />
          )}
        </Route>
        <Route exact path="/board">
          {cards.map(card => (
            <Card
              author={card.author}
              text={card.text}
              key={card._id}
              onDeleteButtonClick={handleDeleteButton}
              id={card._id}
            />
          ))}
          <Footer
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
      ...cards,
      {
        text: text,
        author: author,
      },
    ]
    // const stringifiedValue = JSON.stringify(newQuestion)
    // localStorage.setItem('data', stringifiedValue)
    setCards(newQuestion)
  }
  function handleDeleteButton(id) {
    const filteredData = cards.filter(card => card.id !== id)
    const stringifiedValue = JSON.stringify(filteredData)
    localStorage.setItem('data', stringifiedValue)
    setCards(filteredData)
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
