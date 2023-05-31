import {fireEvent, render, screen, waitForElementToBeRemoved} from '@testing-library/react'
import UseEffect from "../koans/19 - Introducing useEffect"

const physicists = [
    {id: 1, name:"Richard Feynman", birth:1918, death:1988},
    {id: 2, name:"Stephen Wolfram", birth:1959, death:null },
    {id: 3, name:"Paul Dirac", birth:1902, death:1984},
    {id: 4, name:"Enrico Fermi", birth:1901, death:1954},
    {id: 5, name:"Werner Heisenburg", birth:1901, death:1976 },
    {id: 6, name:`Albert Einstein`, birth: 1879, death: 1955 }
]

beforeAll(() => {
    global.fetch = () =>
        Promise.resolve({
            json: () => Promise.resolve(physicists),
        })
})

describe('19 - Introducing useEffect', () => {
    test('Task 1', async () => {
        render(<UseEffect />)

        await waitForElementToBeRemoved(() => screen.getByText(/loading/i as any))

        for(const physicist of physicists) {
            expect(screen.getByText(physicist.name as any)).toBeDefined()
        }
    })
})
