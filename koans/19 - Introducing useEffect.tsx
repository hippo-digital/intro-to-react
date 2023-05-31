
/*
    Task: Fetch the remote data from http://localhost:3000/data and render it using the `Physicist` component
 */

import {useEffect, useState} from "react";

const Physicist = ({physicist}) => {
    return <dl>
        <dt>{physicist.name}</dt>
        <dd><strong>Born: </strong>{physicist.birth}</dd>
        <dd><strong>Death: </strong>{physicist.death}</dd>
    </dl>
}

const UseEffect = () => {
    const [physicists, setPhysicists] = useState([])

    //TODO! Implement useEffect

    if(physicists.length === 0) {
        return <div>Loading..</div>
    } else {
        return (
            <div style={{display: 'flex', flexDirection: 'row', gap: '2rem'}}>
                {physicists.map(p => <Physicist key={p.id} physicist={p}/>)}
            </div>
        )
    }

}

export default UseEffect
