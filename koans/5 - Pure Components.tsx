

/*
    TASK: Fix this component to make it pure, so that it no longer relies on the global guest variable
 */

let guest = 0

export const Guest = () => {
    guest = guest + 1
    return <h2>Guest number {guest} has arrived</h2>
}

const GuestList = () => {
    return <>
        <Guest />
        <Guest />
        <Guest />
        <Guest />
        <Guest />
    </>
}

export default GuestList
