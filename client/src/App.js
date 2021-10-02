import Card from './components/Card'
import { useState } from 'react'
import styled from 'styled-components/macro'
import Footer from './components/Footer/Footer'
import { nanoid } from 'nanoid'
import { Route, Switch } from 'react-router-dom'
import Login from './components/Login'

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

  return (
    <Main>
      <Switch>
        <Route exact path="/">
          <Login />
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
          <Footer onCreateQuestion={handleCreateQuestion} />
        </Route>
      </Switch>
    </Main>
  )

  // function addAuthor() {
  //   const author = newAuthor
  //   return newAuthor
  // }

  function handleCreateQuestion({ text, author }) {
    const newQuestion = [
      ...data,
      {
        id: nanoid(),
        text: text,
        author: addAuthor(author),
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
