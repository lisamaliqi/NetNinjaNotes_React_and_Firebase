
function App() {
    console.log('hello world!'); 

    const title: string = 'welcome to my website!';
    const subtitle: string = 'this is a website for learning react';
    const adress: string= 'https://react.dev/';

    const handleClick = (e: any) => { //handle + event is industry standard
        console.log('You clicked the button!');
        console.log('the sites title is: ', title);
        console.log(e);//get the event object for the button that was pressed
    };
    
    //i can write javascript before the return statement
    return ( //to make it work i NEED a return statement 
        //when returning JSX you can ONLY have one root element!!
        <div className="classname"> {/* class = className in JSX, there are more differences but this is the biggest one */}
            <h1>{title.toUpperCase()}</h1> {/* can use javascript methods in curly braces */}
            <p>{subtitle}</p>
            <p>Todays date is: {new Date().toDateString()}</p>
            <p>Random number: {Math.random() * 10}</p>
            <a href={adress}>Visit the react page!</a> <br></br>

            <button onClick={handleClick}>Click me!</button> {/* onClick is an javascript event, on + event for react */}
            <button onClick={() => {
                console.log('hello from function reference button!');
            }}>This is a function reference button</button>

            <p>Banner in react</p> 
        </div>
    )
};

export default App;
