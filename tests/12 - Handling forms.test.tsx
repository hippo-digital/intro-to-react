import {fireEvent, render} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Physicists from "../koans/12 - Handling forms"
import data from "../data/test-props.json"

const physicists = [
    {id: 1, name:"Richard Feynman", birth:1918, death:1988},
    {id: 2, name:"Stephen Wolfram", birth:1959, death:null },
    {id: 3, name:"Paul Dirac", birth:1902, death:1984},
    {id: 4, name:"Enrico Fermi", birth:1901, death:1954},
    {id: 5, name:"Werner Heisenburg", birth:1901, death:1976 },
    {id: 6, name:"Albert Einstein", birth:1879, death:1955 }
]

describe('12 - Handling forms', () => {
    test('Task 1', async () => {
        const {getByText, getByLabelText} = render(<Physicists />)

        const nameInput = getByLabelText("Name" as any)
        const birthInput = getByLabelText("Birth" as any)
        const deathInput = getByLabelText("Death" as any)

        await userEvent.type(nameInput, "Albert Einstein")
        await userEvent.type(birthInput, "1879")
        await userEvent.type(deathInput, "1955")

        const button = getByText("Add" as any)
        fireEvent.click(button)

        for(const physicist of physicists) {
            expect(getByText(physicist.name as any)).toBeDefined()
        }
    })
})

