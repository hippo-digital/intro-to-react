import React from "react";

/*
    Task: The current implementation is broken. Your task is to fix it so that
    when the button is clicked it adds the given Physicist.
    If you have time make it so the physicist can only be added once
 */

const Physicist = ({physicist}) => {
    return <dl>
        <dt>{physicist.name}</dt>
        <dd><strong>Born: </strong>{physicist.birth}</dd>
        <dd><strong>Death: </strong>{physicist.death}</dd>
    </dl>
}


const Physicists = () => {
    const physicists = [
        {id: 1, name:"Richard Feynman", birth:1918, death:1988},
        {id: 2, name:"Stephen Wolfram", birth:1959, death:null },
        {id: 3, name:"Paul Dirac", birth:1902, death:1984},
        {id: 4, name:"Enrico Fermi", birth:1901, death:1954},
        {id: 5, name:"Werner Heisenburg", birth:1901, death:1976 }
    ]

    const handleClick = () => {
        const toAdd = {id: 6, name:`Albert Einstein`, birth: 1879, death: 1955  }
        physicists.push(toAdd)
    }

    return <div>
        <button onClick={handleClick}>Add Physicist</button>
        <div style={{display: 'flex', flexDirection: 'row', gap: '2rem'}}>
            { physicists.map(p => <Physicist key={p.id} physicist={p} />) }
        </div>
    </div>
}

export default Physicists
