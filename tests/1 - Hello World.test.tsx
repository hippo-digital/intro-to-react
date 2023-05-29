import {render, screen} from '@testing-library/react'
import HelloWorld from "../koans/1 - Hello World"

describe('1 - Hello World', () => {
    test('Task 1', async () => {
        render(<HelloWorld />)
        const node = await screen.findByText('Hello World!' as any)
        expect(node).not.toBe(null)
    })
})

