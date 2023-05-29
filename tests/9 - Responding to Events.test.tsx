import {fireEvent, render} from '@testing-library/react'
import SimpleButton from "../koans/9 - Responding to Events"
import data from "../data/test-props.json"

describe('9 - Responding to Events', () => {
    test('Task 1', async () => {
        const alertMock = jest.spyOn(window,'alert').mockImplementation();
        const {getByText} = render(<SimpleButton />)
        const node = getByText("Click me!" as any)
        fireEvent.click(node)
        expect(alertMock).toHaveBeenCalledTimes(1)
        jest.clearAllMocks();
    })

    test('Task 2', async () => {
        const {message} = data['9 - Responding to Events']
        const alertMock = jest.spyOn(window,'alert').mockImplementation();
        const {getByText} = render(<SimpleButton message={message} />)
        const node = getByText("Click me!" as any)
        fireEvent.click(node)
        expect(alertMock).toHaveBeenCalledWith(message)
        jest.clearAllMocks();
    })
})

