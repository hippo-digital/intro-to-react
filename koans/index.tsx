import HelloWorld from "./1 - Hello World"
import PassingProps from "./2 - Passing Props"
import ConditionalRender from "./3 - Conditional Rendering"
import RenderingLists from "./4 - Rendering Lists"
import PureComponents from "./5 - Pure Components"
import ReactChildren from "./6 - React Children"
import AddingSomeStyle from "./7 - Adding some style"
import AddingSomeStyleScss from "./8 - Adding some style with scss"
import RespondingToEvents from "./9 - Responding to Events"
import HandlingState from "./10 - Handling state"
import HandlingStateWithImmutability from "./11 - Handling state with immutability"
import HandlingForms from "./12 - Handling forms"
import HandlingForms2 from "./13 - Handling forms 2"
import SharingState from "./14 - Sharing state"
import PositionState from "./15 - Understanding Position and State"

let Components = {}

Components['1 - Hello World'] = (props) => <HelloWorld {...props} />
Components['2 - Passing Props'] = (props) => <PassingProps {...props} />
Components['3 - Conditional Rendering'] = (props) => <ConditionalRender {...props} />
Components['4 - Rendering Lists'] = (props) => <RenderingLists {...props} />
Components['5 - Pure Components'] = (props) => <PureComponents {...props} />
Components['6 - React Children'] = (props) => <ReactChildren {...props} />
Components['7 - Adding some style'] = (props) => <AddingSomeStyle {...props} />
Components['8 - Adding some style with scss'] = (props) => <AddingSomeStyleScss {...props} />
Components['9 - Responding to Events'] = (props) => <RespondingToEvents {...props} />
Components['10 - Handling state'] = (props) => <HandlingState {...props} />
Components['11 - Handling state with immutability'] = (props) => <HandlingStateWithImmutability {...props} />
Components['12 - Handling forms'] = (props) => <HandlingForms {...props} />
Components['13 - Handling forms 2'] = (props) => <HandlingForms2 {...props} />
Components['14 - Sharing state'] = (props) => <SharingState {...props} />
Components['15 - Understanding Position and State'] = (props) => <PositionState {...props} />


export default Components
