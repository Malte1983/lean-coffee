import './App.css'
import Cards from './components/Cards'
import { useState } from 'react'

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
    <div className="App">
      {data.map(data => (
        <Cards author={data.author} text={data.text} />
      ))}
    </div>
  )
}

export default App
