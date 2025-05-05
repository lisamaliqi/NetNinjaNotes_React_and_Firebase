// all react hooks start with "use"
// useState hooks is for components that can change over time or in a reaction to something
import React, { useState } from "react";
import Title from "./components/Title";
import './app.css'
import Modal from "./components/Modal";

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

    const [showEvents, setShowEvents] = useState(true);
    console.log(showEvents);

    const subtitle = 'all the latest events in marioland' 

    const [showModal, setShowModal] = useState(true);
    console.log('showModal: ', showModal);
    
    const handleClose = () => {
        setShowModal(false);
        
    };
    

    const handleClick = (id: number) => { //id is not included in prt 1
        //1
        //setName('tova'); //call the function and change its value to 'tova' when button is clicked
        //console.log(name);

        //rule of thumb:
        //when state update depends on previous state, always use callback to access previous state first
        //then base state update on that previous value
        setEvents((prevEvents) => { 
            return prevEvents.filter((event) => {
                return id !== event.id;
            });
        });

        console.log(id);//log the id of the button pressed
    };










    return ( 
        <div className="App"> 
            <Title title="Events in your area" subtitle={subtitle}/> {/* Add the Title component from your folder at the top of this return state */}
            {/* title= is a prop */}

            <Title title="another title" subtitle="another subtitle" />
            
            {showEvents && (
                <div>
                    <button onClick={() => {setShowEvents(false)}}>Hide events</button>
                </div>
            )}
            {!showEvents && (
                <div>
                    <button onClick={() => {setShowEvents(true)}}>Show events</button>
                </div>
            )}

            <h1>My name is {name}</h1>
            {/* <button onClick={handleClick}>Change name</button> handleClick 1 */}

            {/*javascript when inside {} */showEvents && events.map((event, index) => { //run righthand of && if lefthand is true, called "logical and"
                return (
                    < React.Fragment key={event.id}> {/* you need to give each item an unique key value (id) */}
                        <h2>{index} - {event.title}</h2>
                        <button onClick={() => handleClick(event.id)}>Delete event</button> {/* handleClick 2 */}
                        {/* its an anonymous function, it wont be called directly, it will be called once the button is pressed */}
                    </React.Fragment>
                );
            })}

            {/* <Modal>
                <h2>10% off code!</h2>
                <p>Use code Lajsa for 10% off next purchase</p> 
            </Modal> */}

            {showModal && <Modal handleClose={handleClose}>
                <h2>Terms and conditions</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In totam quo molestiae ipsam saepe corporis officiis amet, officia expedita deserunt eligendi enim praesentium repudiandae, alias maxime fugit reiciendis minus perspiciatis.</p>
                <a href="#">Find our more...</a>
            </Modal>}
        </div>
    )
};

export default App;
