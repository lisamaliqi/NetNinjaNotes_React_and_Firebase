

export default function TripList() {

    //fetch data
    fetch('http://localhost:3000/trips') //async, therefore we can use then method
        .then(res => res.json())
        .then(json => console.log(json));

    return (
        <div>
            <h2>Trip List</h2>
        </div>
    )
}
