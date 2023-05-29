import {render, screen} from '@testing-library/react'
import Profile from "../koans/2 - Passing Props"
import data from "../data/test-props.json"

describe('2 - Passing Props', () => {
    test('Task 1', async () => {
        const {profileName, profileImage} = data['2 - Passing Props']
        render(<Profile profileName={profileName} profileImage={profileImage} />)
        const node = await screen.findByAltText(profileName as any)
        expect(node).not.toBe(null)
        expect(node).toHaveAttribute('src', profileImage)
    })
})

