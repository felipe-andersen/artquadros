import { render, screen } from "@testing-library/react"
import '@testing-library/jest-dom'
import MainComponent from "."

describe('MainComponent', () => {

    it('should render correctly', () => {
        render(<MainComponent/>)
        expect(screen.getByTestId('main')).toBeInTheDocument
    })

    it('should render correctly', () => {
        render(<MainComponent/>)
        expect(screen.getByRole('img')).toHaveAttribute('alt', 'url')
    })

})