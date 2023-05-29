import {render, screen} from '@testing-library/react'
import App from "../koans/6 - React Children"
import data from "../data/test-props.json"

describe('6 - React Children', () => {
    test('Task 1', async () => {
        const {getByText} = render(<App />)
        expect(getByText('First element' as any)).toBeDefined()
        expect(getByText('Second element' as any)).toBeDefined()
        expect(getByText('Third element' as any)).toBeDefined()
    })
})

