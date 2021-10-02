import Card from './components/Card'
import { useState } from 'react'
import styled from 'styled-components/macro'
import Footer from './components/Footer/Footer'
import { nanoid } from 'nanoid'

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
    </Main>
  )
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
