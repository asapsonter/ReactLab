import React, {useState} from 'react';
//React hook => Speacial function that allows functional components
                //to use React features without writting class components

//useState() => React hook that allows the creattion of statefull variables
                //and a setter function to update its value in the virtual DOM.
                //[name, setname] = useState(initialvalue)
function MyComponent(){
    const [name, setname] = useState("name change");
    const [age, setAge] = useState(0);
    const [counter, setCount] = useState(0);

    const updateName = () => {
        setname("sonter");
    }
    const updateAge = () => {
        setAge(age + 3);
    }
    const setCounter = () => {
        setCount(counter + 1);
    }
    const decrementCounter = () => {
        setCount(counter - 1);
    }
    const resetCounter = () => {
        setCount(0);
    }
    return(
        <>
    <button onClick={updateName}>Update Name</button> 
    <p>{name}</p> 

    <button onClick={updateAge}>Update age</button> 
    <p>{age}</p>
    <div>
        <h4>counter</h4>
        <p>{counter}</p>
        <button onClick={setCounter}>increse</button>
        <button onClick={decrementCounter}>decrease</button>
        <button onClick={resetCounter}>reset</button>
    </div>
     </> 
    
    );


};                
export default MyComponent;