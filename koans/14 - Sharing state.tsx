/*
    Task: Currently the two inputs are dependant, you need to make them in sync
    so one input should update the other and vice versa
 */

import {useState} from "react";

const Input = ({label}) => {
    const [text, setText] = useState('');
    return (<>
            <label>{label}</label>
            <input value={text} onChange={e => setText(e.target.value)} />
    </>);
}

const InSyncInputs = () => {
    return (
        <>
            <Input label="First input" />
            <Input label="Second input" />
        </>
    );
}

export default InSyncInputs
