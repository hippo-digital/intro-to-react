import {fireEvent, render} from '@testing-library/react'
import IntroducingReducers from "../koans/16 - Introducing Reducers"
import userEvent from "@testing-library/user-event";


const physicists = [
    {id: 2, name:"Robert Boyle", birth:1959 },
    {id: 3, name:"Paul Dirac", birth:1902, death:1984},
    {id: 4, name:"Enrico Fermi", birth:1901, death:1954},
    {id: 5, name:"Werner Heisenburg", birth:1901, death:1976 }
]
describe('16 - Introducing Reducing', () => {
    test('Task 1', async () => {
        const {getByText, getAllByText, getByRole} = render(<IntroducingReducers />)

        const deleteButton = getAllByText("Delete" as any)
        fireEvent.click(deleteButton[0])

        const editButton = getAllByText("Edit" as any)
        fireEvent.click(editButton[0])

        const editTextBox = getByRole("textbox" as any)
        await userEvent.clear(editTextBox)
        await userEvent.type(editTextBox, "Robert Boyle")

        const saveButton = getByText("Save" as any)
        fireEvent.click(saveButton)

        for(const physicist of physicists) {
            expect(getByText(physicist.name as any)).toBeDefined()
        }
    })
})
