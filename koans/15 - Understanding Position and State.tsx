import {useState} from "react";

/*
    Task: There is a subtle bug that is causing the state to reset in the Koan. Can you find and fix it.
 */

const App = () => {
    const [isRed, setIsRed] = useState(false);
    return (
        <div>
            { isRed ? (<div><Counter isRed={true} /></div>)
                : (<section><Counter isRed={false} /></section>)}
            <label>
                <input
                    type="checkbox"
                    checked={isRed}
                    onChange={e => {
                        setIsRed(e.target.checked)
                    }}
                />
                Make button red
            </label>
        </div>
    );
}

const Counter = ({isRed}) => {
    const [score, setScore] = useState(0);

    return (
        <div>
            <h1>{score}</h1>
            <button onClick={() => setScore(score + 1)} style={{backgroundColor: (isRed ? "red" : ''), color: "black"}}>
                Add one
            </button>
        </div>
    );
}

export default App
