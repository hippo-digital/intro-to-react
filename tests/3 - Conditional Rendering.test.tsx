import {render} from '@testing-library/react'
import ToDoList from "../koans/3 - Conditional Rendering"

describe('3 - Conditional Rendering', () => {
    test('Task 1', async () => {
        const {getByText} = render(<ToDoList />)

        expect(getByText('Item 1 complete' as any)).toBeDefined()
        expect(getByText('Item 2' as any)).toBeDefined()
        expect(getByText('Item 3 complete' as any)).toBeDefined()
        expect(getByText('Item 4' as any)).toBeDefined()
    })
})

