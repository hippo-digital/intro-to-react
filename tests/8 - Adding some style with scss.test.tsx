import {render, screen} from '@testing-library/react'
import "../koans/8 - Adding some style with scss.module.scss"
import Profile from "../koans/8 - Adding some style with scss"
import data from "../data/test-props.json"

describe('8 - Adding some style with scss', () => {
    test('Task 1', async () => {
        const {profileName, profileImage} = data['8 - Adding some style with scss']
        const { container } = render(<Profile profileName={profileName} profileImage={profileImage} />)
        const node = container.querySelector('img')
        expect(node).not.toBe(null)
    })
})

