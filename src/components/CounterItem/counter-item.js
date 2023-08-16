import {useState, useEffect} from 'react';

const CounterItem = ({counterGenerate}) => {

    const [item, setItem] = useState([])

    useEffect(() => {
        const newItem = counterGenerate()
        setItem(newItem)
        console.log('render')
    }, [counterGenerate])


    return (
       <div className='container'>
           <div className='col-4'>
               <ul>
                   {item.map(iTem => (
                       <li key={iTem}>{iTem}</li>
                   ))}
               </ul>
           </div>
       </div>


    )

}

export default CounterItem