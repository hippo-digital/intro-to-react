import {render, screen} from '@testing-library/react'
import GuestList, {Guest} from "../koans/5 - Pure Components"

describe('5 - Pure Components', () => {
    test('Task 1', async () => {

        render(<div>
            <Guest />
            <Guest />
            <div data-testid="container">
                <GuestList />
            </div>
        </div>)

        const host = screen.getByTestId('container' as any)

        let index = 1;
        for(const c of host.children) {
            expect(c.textContent).toBe(`Guest number ${index} has arrived`)
            index++;
        }
    })
})
