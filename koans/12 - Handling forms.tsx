import {ChangeEvent, FormEvent, useState} from "react";

/*
    Task: Complete the code below, by handling the `onChange` events from each input field
    and then use the form submit event `onSubmit` to add the form values to the physicist array.
 */

const Physicist = ({physicist}) => {
    return <div>
        <dl>
            <dt>{physicist.name}</dt>
            <dd><strong>Born: </strong>{physicist.birth}</dd>
            <dd><strong>Death: </strong>{physicist.death}</dd>
        </dl>
    </div>
}

const Physicists = () => {
    const [formValues, setFormValues] = useState({})
    const [physicists, setPhysicists] = useState([
        {id: 1, name:"Richard Feynman", birth:1918, death:1988},
        {id: 2, name:"Stephen Wolfram", birth:1959, death:null },
        {id: 3, name:"Paul Dirac", birth:1902, death:1984},
        {id: 4, name:"Enrico Fermi", birth:1901, death:1954},
        {id: 5, name:"Werner Heisenburg", birth:1901, death:1976 }
    ])

    const handleChange = (event:ChangeEvent) => {
        event.preventDefault()
        //TODO!
    }

    const handleSubmit = (event:FormEvent) => {
        event.preventDefault()
        //TODO!
    }

    return <div>
        <form>
            <div>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
            </div>
            <div>
                <label htmlFor="birth">Birth</label>
                <input type="number" id="birth" name="birth" />
            </div>
            <div>
                <label htmlFor="death">Death</label>
                <input type="number" id="death" name="death" />
            </div>
            <input type="submit" value="Add" />
        </form>
        <div style={{display: 'flex', flexDirection: 'row', gap: '2rem'}}>
            { physicists.map(p => <Physicist key={p.id} physicist={p} />) }
        </div>
    </div>
}

export default Physicists
