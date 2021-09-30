import { render, screen } from "@testing-library/react";
import Cards from './Cards'

describe('Card', () => {
    const author = 'Peter Doe'
    const text = 'Klingt komisch, ist aber so!'

    it('Renders Card', () => {
        render(
            <Cards author={author} text={text}/>
        )
        const showCards = screen.getByRole('article');
        
        expect(showCards).toBeInTheDocument();
    })
})