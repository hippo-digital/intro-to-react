import {createContext, useContext, useState} from "react";

/*
    Task: Implement the themeable button below using a React context. So that when the checkbox is
    checked if changes the button to green (#00ff00)
 */


const ThemeableButton = ({label}) => {
    return <button>
        {label}
    </button>
}

const App = () => {
    const [theme, setTheme] = useState({buttonColor: '#ff0000'});

    const handleSelect = (event) => {
        event.target.checked
           ? setTheme({buttonColor: '#00ff00'})
           : setTheme({buttonColor: '#ff0000'})
    }

    return <main>
        <div>
            <label>
                Use other theme
                <input type="checkbox" onChange={handleSelect}/>
            </label>
        </div>
        <ThemeableButton label={'A button'}/>
    </main>
}

export default App

