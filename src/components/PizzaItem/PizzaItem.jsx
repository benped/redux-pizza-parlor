import {useDispatch} from 'react-redux';
import { useState, useEffect } from 'react'; 

function PizzaItem ({pizza, setPizzaOrder}) {
    console.log("In PizzaItem");
    const dispatch = useDispatch();
    const [select, setSelect] = useState('false');

    const addPizza = () => {
            dispatch({
                type:'ADD_PIZZA',
                payload: pizza
            })
    }

    const removePizza = () => {
        dispatch({
            type:'REMOVE_PIZZA',
            payload: pizza
        })
}

  

    return (
        <div>
        
            <img src={pizza.image_path}/>
            {pizza.name}
            {pizza.description}
            {pizza.price}
            <button onClick={addPizza}>ADD</button>
            <button onClick={removePizza}>REMOVE</button>
           
        </div>
    )
}

export default PizzaItem;