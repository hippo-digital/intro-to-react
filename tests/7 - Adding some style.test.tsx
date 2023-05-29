import {render, screen} from '@testing-library/react'
import Profile from "../koans/7 - Adding some style"
import data from "../data/test-props.json"

describe('7 - Adding some style', () => {
    test('Task 1', async () => {
        const {profileName, profileImage} = data['7 - Adding some style']
        render(<Profile profileName={profileName} profileImage={profileImage} />)
        const node = await screen.getByRole('img')
        expect(node).not.toBe(null)
        expect(node).toHaveStyle({'border-radius': '50%', 'margin':'20px'})
    })
})

