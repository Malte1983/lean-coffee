import Cards from './components/Cards'
import { useState } from 'react'
import styled from 'styled-components'

const exampleData = [
  {
    author: 'Max Muster',
    text: 'First example-text',
  },

  {
    author: 'Tina Müller',
    text: 'second example-text',
  },
  {
    author: 'Peter Schröder',
    text: 'third example-text',
  },
  {
    author: 'Sabrina Wilde',
    text: 'fourth example-text',
  },
]

function App() {
  const [data, setData] = useState(exampleData)
  return (
    <MainSection>
      {data.map(data => (
        <Cards author={data.author} text={data.text} />
      ))}
    </MainSection>
  )
}

export default App

const MainSection = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  gap: 10px;
  padding: 10px;
`
