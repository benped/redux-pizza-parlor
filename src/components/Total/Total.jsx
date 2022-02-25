import { useSelector } from "react-redux";


function Total() {

    const cart = useSelector(store => store.pizzaReducer);
    
    
    let total = 0; 
    
    for (let pizza of cart){
        total+= Number(pizza.price);
    }

return (
    <>
    <h1>${total}</h1>
    </>
)



}

export default Total;