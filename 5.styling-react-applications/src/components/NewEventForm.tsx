import { useState } from 'react';
import './NewEventForm.css'

export default function NewEventForm({addEvent}: any) {

    const [ title, setTitle ] = useState('');
    const [ date, setDate ] = useState('');
 
    // const handleChange = (e: any) => {
    //     setTitle(e.target.value);
    // };

    const resetForm = () => {
        setTitle('');
        setDate('');
    };

    const handelSubmit = (e: any) => {
        e.preventDefault();

        const event = {
            title: title,
            date: date, 
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

            <button>Submit</button>
            <p>title - {title}, date - {date}</p>
            <p onClick={resetForm}>Reset the form</p>
        </form>
    )
}
