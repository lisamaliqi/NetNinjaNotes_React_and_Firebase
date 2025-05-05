// all react hooks start with "use"
// useState hooks is for components that can change over time or in a reaction to something
import { useState } from "react";

function App() {
    //This option changes the name in the console, but not the dom, this is because we need to use states
    /* let name = 'lisa';
    const handleClick = () => {
        name = 'tova';
        console.log(name);
    }; */


    const [name, setName] = useState('lisa');
    //first one is state value, aka 'lisa'
    //second is a function which is used to change that state value
    //second function should always be set+name of the first value, ex    discoMode, setDiscoMode

    const handleClick = () => {
        setName('tova'); //call the function and change its value to 'tova' when button is clicked
        console.log(name);
    };

    return ( 
        <div className="App"> 
            <h1>My name is {name}</h1>
            <button onClick={handleClick}>Change name</button>
        </div>
    )
};

export default App;
