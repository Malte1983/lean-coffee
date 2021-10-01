import { render, screen } from "@testing-library/react";
import Card from './components/Card';

describe('Card', () => {
    it('Renders Card', () => {
        render(<Card author="Max M." text="What is Node.js?" />)
        const showCard = screen.getByText('What is Node.js?');
        
        expect(showCard).toBeInTheDocument();
    })
})