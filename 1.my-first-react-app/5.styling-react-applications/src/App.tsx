// all react hooks start with "use"
// useState hooks is for components that can change over time or in a reaction to something
import { useState } from "react";
import Title from "./components/Title";
import './app.css'
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import NewEventForm from "./components/NewEventForm";

function App() {
    //This option changes the name in the console, but not the dom, this is because we need to use states
    /* let name = 'lisa';
    const handleClick = () => {
        name = 'tova';
        console.log(name);
    }; */


    const [name] = useState('lisa');
    // const [name, setName] = useState('lisa');
    //first one is state value, aka 'lisa'
    //second is a function which is used to change that state value
    //second function should always be set+name of the first value, ex    discoMode, setDiscoMode

    const [events, setEvents] = useState([ //useState with an array 
        {title: 'Lisas birthday party', id: 1},
        {title: 'Tovas performance', id: 2},
        {title: 'Laundry', id: 3}
    ]);

    const addEvent = (event: any) => {
        setEvents((prevEvents) => {
            return [...prevEvents, event]
        });

        //hide the form when submitting the form
        setShowForm(false);
    };

    const [showEvents, setShowEvents] = useState(true);
    console.log(showEvents);

    const subtitle = 'all the latest events in marioland' 

    const [showModal, setShowModal] = useState(false);
    console.log('showModal: ', showModal);
    
    const toggleModal = () => {
        console.log('showmodal in togglemodal: ', showModal);
        
        showModal 
            ? setShowModal(false)
            : setShowModal(true)
        
    };


    const [showForm, setShowForm] = useState(false);
    console.log('showForm: ', showForm);

    const toggleForm = () => {
        console.log('showForm in toggleform: ', showForm);
        
        showForm 
            ? setShowForm(false)
            : setShowForm(true)
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

            {/*javascript when inside {} */showEvents && <EventList events={events} handleClick={handleClick} />}

            {/* <Modal>
                <h2>10% off code!</h2>
                <p>Use code Lajsa for 10% off next purchase</p> 
            </Modal> */}

            <br />
            <div>
                <button onClick={toggleForm}>Add new event</button>
            </div>

            <div>
                <button onClick={toggleModal}>Show modal!!</button>
            </div>

            {showForm && <Modal toggleForm={toggleForm} isSalesModal={false}>
                <NewEventForm addEvent={addEvent}/>
            </Modal>}

            {showModal && <Modal toggleModal={toggleModal} isSalesModal={false}>
                <h2>Terms and conditions</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In totam quo molestiae ipsam saepe corporis officiis amet, officia expedita deserunt eligendi enim praesentium repudiandae, alias maxime fugit reiciendis minus perspiciatis.</p>
                <a href="#">Find our more...</a>
            </Modal>}
        </div>
    )
};

export default App;
