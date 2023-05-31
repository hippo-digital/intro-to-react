import {createContext, ReducerState, useContext, useReducer, useState} from "react";

/*
    Task: In the same manner as Koan 16, use the logic in the reducer to handle creating, updating
    and deleting of physicists but this time do not pass the dispatch function instead use the context
 */

const physicistsReducer = (state, action) => {
    switch(action.type) {
        case 'create': {
            return [...state, {...action.data}]
        }
        case 'update': {
            return state.map((s) => {
                if (s.id === action.data.id) {
                    return action.data;
                } else {
                    return s;
                }
            });
        }
        case 'delete': {
            return state.filter((t) => t.id !== action.data.id)
        }
        default: {
            throw Error('Unknown action: ' + action.type);
        }
    }
}

const Physicist = ({physicist}) => {
    const dispatch = null as any
    const [isEdit, setIsEdit] = useState(false)
    const [name, setName] = useState<String>(physicist.name)

    const handleDelete = (e) => {
        dispatch({type:'delete', data: {...physicist, name: name}})
    }

    const handleSave = (e) => {
        dispatch({type:'update', data: {...physicist, name: name}});
        setIsEdit(false)
    }

    const handleEdit = (e) => {
        setIsEdit(true)
    }

    return <div>
        { isEdit ? <input type="text" value={name} onChange={e => setName(e.target.value)}  /> : physicist.name } &nbsp;
        <button onClick={handleDelete}>Delete</button> &nbsp;
        { !isEdit ? <button onClick={handleEdit}>Edit</button> : null }
        { isEdit ? <button onClick={handleSave}>Save</button> : null }
    </div>
}

const PhysicistList = ({physicists}) => {
    return physicists?.map(p =>
        <Physicist key={p.id} physicist={p} />
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
        <PhysicistList physicists={physicists} />
    </div>
}

export default App
