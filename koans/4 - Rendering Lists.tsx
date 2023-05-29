
/*
    TASK: Take the list of physicists and complete the `filterList` function to filter the list
    and fill in the `displayPhysicist` function to display the results
 */

const Physicists = ({bornAfter}) => {
    const physicists = [
        {id: 1, name:"Richard Feynman", birth:1918, death:1988},
        {id: 2, name:"Stephen Wolfram", birth:1959, death:null },
        {id: 3, name:"Paul Dirac", birth:1902, death:1984},
        {id: 4, name:"Enrico Fermi", birth:1901, death:1954},
        {id: 5, name:"Werner Heisenburg", birth:1901, death:1976 }
    ]

    const filterList = (physicist) => {
        return true
    }

    const displayPhysicist = (physicist) => {
        return null
    }

    return <ul>
        {physicists.filter(filterList).map(displayPhysicist)}
    </ul>

}

export default Physicists;
