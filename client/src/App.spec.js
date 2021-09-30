import { render, screen } from "@testing-library/react";
import Cards from './components/Cards';

describe('Card', () => {
    const exampleData = [
    {
        author: 'Max Muster',
        text: 'First example-text',
        id: 1,
    },

    {
        author: 'Tina Müller',
        text: 'second example-text',
        id: 2,
    },
    {
        author: 'Peter Schröder',
        text: 'third example-text',
        id: 3,
    },
    {
        author: 'Sabrina Wilde',
        text: 'fourth example-text',
        id: 4,
    },
    ]

    it('Renders Card', () => {
        render(
            <main>
            {exampleData.map(data => (
                <Cards author={data.author} text={data.text} key={data.id}/>
            ))}
            </main>
        )
        const showCards = screen.getByText('Tina Müller');
        
        expect(showCards).toBeInTheDocument();
    })
})