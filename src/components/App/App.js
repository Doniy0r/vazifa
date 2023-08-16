import './App.css';
import React, {useCallback, useMemo} from "react";


import {useState} from 'react'
// import CounterItem from "../CounterItem/counter-item";


const counterPlus= num=>{
    let i = 0;
    while (i < 10000000) i++

}
const bigCounter = number => {
    return number + 2;
}


const User = () => {

    const [counter, setCount] = useState(0);

    const [active, setActive] = useState(true);


    const onIncrement = () => {
        setCount(counter+1);
    }

    const onToggle = () => {
        setActive(!active);
    }
    //

    const counterGenerate = useCallback(() => {
        return new Array(counter).fill('').map((_, indx) => `Counter number ${indx + 1}`)
    }, [counter])


    // () => {
    //     return new Array(counter).fill('').map((_, indx) => `Counter number ${indx + 1}`)
    // }
    // console.log(counterGenerate())


    const colors = {
        fontWeight: 'bold',
        color: active ? 'green' : 'red',
    }

    const number = useMemo(()=>bigCounter(counter), [counter]);
    // const number = bigCounter(counter);
    const num2=counterPlus(counter)

    return (
        <div className="propTest container mt-4 border border-dark bg-info">
            <div>
                <p className='text-center' style={colors}>User activated: {number}</p>
                <button type="button" className='btn btn-success' onClick={onIncrement}>+</button>
                <button type="button" className='btn btn-warning' onClick={onToggle}>Toogle</button>

            </div>

            {<CounterItem counterGenerate={counterGenerate}/>}

        </div>


    )

}


function App() {


    return (
        <div className='App'>

            <User firsName='Islomjon' lastName="Azimjonov" link="youtube.com"/>

        </div>
    );
}

export default App;
