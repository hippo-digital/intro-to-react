import {fireEvent, render} from '@testing-library/react'
import Physicists from "../koans/11 - Handling state with immutability"
import data from "../data/test-props.json"

const physicists = [
    {id: 1, name:"Richard Feynman", birth:1918, death:1988},
    {id: 2, name:"Stephen Wolfram", birth:1959, death:null },
    {id: 3, name:"Paul Dirac", birth:1902, death:1984},
    {id: 4, name:"Enrico Fermi", birth:1901, death:1954},
    {id: 5, name:"Werner Heisenburg", birth:1901, death:1976 },
    {id: 6, name:`Albert Einstein`, birth: 1879, death: 1955 }
]

describe('11 - Handling state with immutability', () => {
    test('Task 1', async () => {
        const {getByText} = render(<Physicists />)

        const button = getByText("Add Physicist" as any)
        fireEvent.click(button)

        for(const physicist of physicists) {
            expect(getByText(physicist.name as any)).toBeDefined()

        }
    })
})

