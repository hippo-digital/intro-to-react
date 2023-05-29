import {render} from '@testing-library/react'
import SharedState from "../koans/14 - Sharing state"
import data from "../data/test-props.json"
import userEvent from "@testing-library/user-event";

describe('14 - Sharing state', () => {
    test('Task 1', async () => {
        const {getAllByRole} = render(<SharedState />)

        const inputs = getAllByRole("textbox" as any)
        await userEvent.type(inputs[0], "Test")

        expect(inputs[0].value).toBe("Test")
        expect(inputs[1].value).toBe("Test")
    })
})
