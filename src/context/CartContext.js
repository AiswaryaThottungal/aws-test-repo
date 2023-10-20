import { createContext, useContext,useEffect,useReducer } from "react";
import reducer from "../reducer/CartReducer";

const CartContext = createContext();

const getLocalCartData = () =>{
    let localCartData = localStorage.getItem("trayaCart");
    if(localCartData=== []){
        return [];
    }
    else{
        return JSON.parse(localCartData);
    }
}

const initialState = {
    cart: getLocalCartData(),
    total_item: "",
    total_amount:" "  

};

const CartContextProvider = ({children}) => {
    const [state,dispatch] =useReducer(reducer,initialState);

    //adding a product ti the cart
    const  addToCart = (id,size,quantity,product) =>{        
        return dispatch({type: "ADD_TO_CART", payload: {id,size,quantity,product}});
    }

    //remove an item from the cart
    const removeItem = (id) => {
        console.log("🚀 ~ file: CartContext.js:21 ~ removeItem ~ id:", id)
        return dispatch({type: "REMOVE_ITEM", payload:{id}});
    }

    //clear the cart
    const clearCart=() => {        
        return dispatch({type:"CLEAR_CART"});  
    }

    const setDecrease = (id) =>{
        return dispatch({type:"DECREASE_QUANTITY",payload:{id}})

    }
    const setIncrease = (id) =>{
        return dispatch({type:"INCREASE_QUANTITY",payload:{id}})
    }

    //adding and retrieving data to and from localstorage

    useEffect(() =>{       
        dispatch({ type: "CART_ITEM_PRICE_TOTAL" });
        localStorage.setItem("trayaCart",JSON.stringify(state.cart))
    },[state.cart]);
  
    return <CartContext.Provider value={{...state,addToCart,removeItem, clearCart,setDecrease,setIncrease}}>{children}</CartContext.Provider>
}

const useCartContext = () =>{
    return useContext(CartContext);
}

export {CartContextProvider, useCartContext};