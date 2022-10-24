import randomColor from 'randomcolor';
import React, { useEffect, useState } from 'react'
import ChoreForms from './ChoreForms';

const Hook = () => {
    //Counter
    const [count, setCount] = useState(0);
    //useEffect always has a second parameter
    //Syntax: useEffect accepts two arguments
    //1st arg is a function, 2nd arg - dependencies (optional)
    //useEffect(Function, dependencies) SYNTAX
    //Timer
    const [seconds, setSeconds] = useState(0);
    const [colors, setColor] = useState("");
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        let interval = null;
        if(isActive){
            interval = setInterval(() => {
                setSeconds(seconds => seconds + 1);
                setColor(colors => colors = randomColor())
            }, 1000);
        } else if (!isActive && seconds !== 0){
            clearInterval(interval);
        }
        return () => clearInterval(interval); //Cleanup Function
        }, [isActive, seconds, colors])

    let toggle = () => {
        setIsActive(!isActive)
    }
    let reset = () => {
        setSeconds(0);
        setIsActive(false);   
    }
    //Forms
    const [itemName, setItemName] = useState("");
    const [items, setItems] = useState([]);
    let addItem = (e) => {
        e.preventDefault(); //stops form from submitting
        setItems([...items, {id: items.length, name: itemName}]);
        setItemName("");
    }
    
    const [ username, setUsername ] = useState("Hi, this is Dave")

    return(
        <div>
            <h2>Hooks Example</h2>
            <ChoreForms/>
            {/* Form */}
            <h2>List of Things</h2>
            <form onSubmit={addItem}>
                <label>My Things</label> <br/>
                <input type="text" name="item" value={itemName}
                onChange={e => setItemName(e.target.value)}></input>
            </form>
            <ul>
                {items.map(eva =>(<li key={eva.id}>{eva.name}</li>))}
            </ul>

            {/* Input and display immediately */}
            <h2> {username} </h2>
            <input type="text" name="username" value={username} onChange={
                (event) => {
                    setUsername(event.target.value);
                }}>
            </input>

            {/* Counter */}
            <p>Counter: {count}</p>
            <button onClick={() => setCount(count + 1)}>
                Add
            </button> 
            <button onClick={() => count > 0 ? setCount(count - 1) : setCount(count = 0)}>
                Minus
            </button> <br/>

            {/* Timer */}
            <h2>Timer Example:</h2>
            <div style={{color: `${colors}`}}> {seconds} </div>
            <div>
                <button onClick={toggle}>{!isActive?"Start":"Pause"}</button>
                <button onClick={reset}>Reset</button>
            </div>
        </div>
    )
}

export default Hook