import {render} from '@testing-library/react'
import Physicists from "../koans/4 - Rendering Lists"

describe('4 - Rendering Lists', () => {
    test('Task 1', async () => {
        const {queryByText, getByText} = render(<Physicists bornAfter={1917} />)

        expect(getByText('Richard Feynman' as any)).toBeDefined()
        expect(getByText('Stephen Wolfram' as any)).toBeDefined()
        expect(queryByText('Paul Dirac' as any)).toBeNull()
        expect(queryByText('Enrico Fermi' as any)).toBeNull()
        expect(queryByText('Werner Heisenburg' as any)).toBeNull()
    })
})
