import React,{useState} from "react";

/*
    Task: The current implementation is broken. Your task is to fix it so that
    when the button is clicked it cycles around the list of physicists
 */

const Physicist = ({physicist}) => {
    return <dl>
        <dt>{physicist.name}</dt>
        <dd><strong>Born: </strong>{physicist.birth}</dd>
        <dd><strong>Death: </strong>{physicist.death}</dd>
    </dl>
}


const Physicists = () => {
    let index = 0
    const physicists = [
        {id: 1, name:"Richard Feynman", birth:1918, death:1988},
        {id: 2, name:"Stephen Wolfram", birth:1959, death:null },
        {id: 3, name:"Paul Dirac", birth:1902, death:1984},
        {id: 4, name:"Enrico Fermi", birth:1901, death:1954},
        {id: 5, name:"Werner Heisenburg", birth:1901, death:1976 }
    ]

    const handleClick = () => {
        index = index + 1
    }

    return <div>
        <button onClick={handleClick}>Next</button>
        <Physicist physicist={physicists[index]} />
    </div>
}

export default Physicists
