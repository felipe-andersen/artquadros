import HomeTemplate from "."
import { fireEvent, render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ChatButtonOrganism from "@/components/organisms/ChatButtonComponent"


describe("HomeTamplate", () => {
    render(<ChatButtonOrganism />)

    it("should render correctly", () => {
        expect(screen.getByTestId("BtnSC"))
      
    })
})

