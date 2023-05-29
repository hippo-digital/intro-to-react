import {fireEvent, render} from '@testing-library/react'
import PositionAndState from "../koans/15 - Understanding Position and State"

describe('15 - Understanding Position and State', () => {
    test('Task 1', async () => {
        const {getByText, getByRole} = render(<PositionAndState />)

        const button = getByText("Add one" as any)
        const checkbox = getByRole("checkbox" as any)
        const heading = getByRole("heading" as any)

        fireEvent.click(button)
        fireEvent.click(button)
        fireEvent.click(checkbox)
        fireEvent.click(button)
        fireEvent.click(button)

        expect(heading).toHaveTextContent("4")
    })
})
