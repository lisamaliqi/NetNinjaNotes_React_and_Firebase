import { useState } from "react";


export default function TripList() {
    const [ trips, setTrips ] = useState([]);

    // console.log('the trips: ', trips);
    

    //fetch data
    fetch('http://localhost:3000/trips') //async, therefore we can use then method
        .then(res => res.json())
        .then(json => setTrips(json));

    return (
        <div>
            <h2>Trip List</h2>
        </div>
    )
}
