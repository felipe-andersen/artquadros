import HomeTemplate from "."
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ChatButtonOrganism from "@/components/organisms/ChatButtonComponent"



describe("HomeTamplate", () => {
    
    it('should render corretly', () => {
        render(<HomeTemplate/>)
        expect(screen.getAllByTestId('HeadComponent'))
    })


   
})



