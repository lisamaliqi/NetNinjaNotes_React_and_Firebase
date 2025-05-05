// all react hooks start with "use"
// useState hooks is for components that can change over time or in a reaction to something
import { useState } from "react";

interface Event {
    title: string,
    id: number,
}

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

    const [events, setEvents] = useState([ //useState with an array 
        {title: 'Lisas birthday party', id: 1},
        {title: 'Tovas performance', id: 2},
        {title: 'Laundry', id: 3}
    ]);

    const handleClick = () => {
        setName('tova'); //call the function and change its value to 'tova' when button is clicked
        console.log(name);
    };

    return ( 
        <div className="App"> 
            <h1>My name is {name}</h1>
            <button onClick={handleClick}>Change name</button>

            {/*javascript when inside {} */events.map((event, index) => {
                return (
                    <div key={event.id}> {/* you need to give each item an uniqe key value (id) */}
                        <h2>{index} - {event.title}</h2>
                    </div>
                );
            })}
        </div>
    )
};

export default App;
