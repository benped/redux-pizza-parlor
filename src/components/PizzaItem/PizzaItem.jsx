import {useDispatch} from 'react-redux';
import { useState} from 'react'; 


function PizzaItem ({pizza}) {
    console.log("In PizzaItem");

    const dispatch = useDispatch();
    const [select, setSelect] = useState('false');

    const addPizza = () => {
            setSelect(!select);
            dispatch({
                type:'ADD_PIZZA',
                payload: pizza
            })
    }

    const removePizza = () => {
        setSelect(!select);
        dispatch({
            type:'REMOVE_PIZZA',
            payload: pizza
        })
}

  

    return (
        <>
        <div>
            <img src={pizza.image_path}/>
            {pizza.name}<br></br>
            {pizza.description}<br></br>
            Price: {pizza.price}<br></br>
            {select?  <button onClick={addPizza}>ADD</button> : <button onClick={removePizza}>REMOVE</button>}
        </div>
            
        </>
    )
}

export default PizzaItem;
