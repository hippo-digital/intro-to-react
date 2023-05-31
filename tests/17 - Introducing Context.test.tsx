import {fireEvent, render} from '@testing-library/react'
import IntroducingContext from "../koans/17 - Introducing Context"
import userEvent from "@testing-library/user-event";

describe('17 - Introducing Context', () => {
    test('Task 1', async () => {
        const {getByText, getByLabelText, getByRole} = render(<IntroducingContext />)

        const checkbox = getByLabelText("Use other theme" as any)

        expect(true).toBe(true)
    })
})
