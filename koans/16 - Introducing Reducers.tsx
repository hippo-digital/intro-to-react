import {ReducerState, useReducer, useState} from "react";

/*
    Task: Implement the logic in the reducer to handle creating, updating, and deleting of physicists
 */

const physicistsReducer = (state, action) => {
    //TODO: implement this implementation
    return state
}

const Physicist = ({physicist, dispatch}) => {
    const [isEdit, setIsEdit] = useState(false)
    const [name, setName] = useState<String>(physicist.name)

    return <div>
        { isEdit ? <input type="text" value={name} onChange={e => setName(e.target.value)}  /> : physicist.name } &nbsp;
        <button onClick={e => dispatch({type:'delete', data: {...physicist, name: name}})}>Delete</button> &nbsp;
        { !isEdit ? <button onClick={e => setIsEdit(true)}>Edit</button> : null }
        { isEdit ? <button onClick={e => {
            dispatch({type:'update', data: {...physicist, name: name}});
            setIsEdit(false)
        }}>Save</button> : null }
    </div>
}

const PhysicistList = ({physicists, dispatch}) => {
    return physicists?.map(p =>
            <Physicist key={p.id} physicist={p} dispatch={dispatch} />
        )
}

const initialState = [
    {id: 1, name:"Richard Feynman", birth:1918, death:1988},
    {id: 2, name:"Stephen Wolfram", birth:1959 },
    {id: 3, name:"Paul Dirac", birth:1902, death:1984},
    {id: 4, name:"Enrico Fermi", birth:1901, death:1954},
    {id: 5, name:"Werner Heisenburg", birth:1901, death:1976 }
]

const App = () => {
    const [physicists, dispatch] = useReducer(physicistsReducer, initialState as ReducerState<any>)
    return <div>
        <PhysicistList physicists={physicists} dispatch={dispatch} />
    </div>
}

export default App
