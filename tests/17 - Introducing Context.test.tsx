import {fireEvent, render} from '@testing-library/react'
import IntroducingContext from "../koans/17 - Introducing Context"

describe('17 - Introducing Context', () => {
    test('Task 1', async () => {
        const {getByText, getByLabelText} = render(<IntroducingContext />)

        const button = getByText("A button" as any)
        const checkbox = getByLabelText("Use other theme" as any)

        const firstStyle = window.getComputedStyle(button)
        expect(firstStyle.backgroundColor).toBe("rgb(255, 0, 0)")

        fireEvent.click(checkbox)

        const secondStyle = window.getComputedStyle(button)
        expect(secondStyle.backgroundColor).toBe("rgb(0, 255, 0)")
    })
})
