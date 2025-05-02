
function App() {
    console.log('hello world!'); 
    
    //i can write javascript before the return statement
    return ( //to make it work i NEED a return statement 
        //when returning JSX you can ONLY have one root element!!
        <div className="classname"> {/* class = className in JSX, there are more differences but this is the biggest one */}
            <p>Banner in react</p> 
        </div>
    )
};

export default App;
