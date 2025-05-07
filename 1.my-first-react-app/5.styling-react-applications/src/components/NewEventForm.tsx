import { useState } from 'react';
import './NewEventForm.css'

export default function NewEventForm({addEvent}: any) {

    const [ title, setTitle ] = useState('');
    const [ date, setDate ] = useState('');
    const [ location, setLocation ] = useState('Malmö');
 
    // const handleChange = (e: any) => {
    //     setTitle(e.target.value);
    // };

    const resetForm = () => {
        setTitle('');
        setDate('');
        setLocation('Malmö');
    };

    const handelSubmit = (e: any) => {
        e.preventDefault();

        const event = {
            title: title,
            date: date, 
            location: location,
            id: Math.floor(Math.random() * 10000),  //generate a random int between 1-10000 (not recomendet, works for now)
        };

        console.log('the event: ', event);

        addEvent(event);

        resetForm();
    };

    return (
        <form className='new-event-form' onSubmit={handelSubmit}>
            <label>
                <span>Event Title:</span>
                <input 
                    type="text" 
                    onChange={(e) => {setTitle(e.target.value)}} 
                    value={title} 
                />
                {/* onChange shows regular changes being done by the user */}
            </label>

            <label>
                <span>Event Date:</span>
                <input 
                    type="date" 
                    onChange={(e) => {setDate(e.target.value)}} 
                    value={date}
                />
            </label>

            <label>
                <span>Event location:</span>
                <select onChange={(e) => {setLocation(e.target.value)}}>{/* target the value of the option you choose */}
                    <option value="malmö">Malmö</option>
                    <option value="göteborg">Göteborg</option>
                    <option value="stockholm">Stockholm</option>
                </select>
            </label>

            <button>Submit</button>
            <p>title - {title}, date - {date}</p>
            <p onClick={resetForm}>Reset the form</p>
        </form>
    )
};
