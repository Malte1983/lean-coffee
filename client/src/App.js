import './App.css'
import Cards from './components/Cards'

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
  return (
    <div className="App">
      <Cards />
    </div>
  )
}

export default App
