
function App() {
    console.log('hello world!'); 

    const title: string = 'welcome to my website!';
    const subtitle: string = 'this is a website for learning react';
    const adress: string= 'https://react.dev/';
    
    //i can write javascript before the return statement
    return ( //to make it work i NEED a return statement 
        //when returning JSX you can ONLY have one root element!!
        <div className="classname"> {/* class = className in JSX, there are more differences but this is the biggest one */}
            <h1>{title.toUpperCase()}</h1> {/* can use javascript methods in curly braces */}
            <p>{subtitle}</p>
            <p>Todays date is: {new Date().toDateString()}</p>
            <p>Random number: {Math.random() * 10}</p>
            <a href={adress}>Visit the react page!</a>

            <p>Banner in react</p> 
        </div>
    )
};

export default App;
