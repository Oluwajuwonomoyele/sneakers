import { createContext, useReducer } from "react";

type ContextType = {
    dispatch : React.Dispatch<CartAction>
    state: CartState | null

}

export const CartContext = createContext<ContextType | null>(null)

const initState = {
    itemQuantity: 0,
    item: {
        name: 'Fall Limited Edition Sneakers',
        price: 125,
        total: 0
    }
}

type CartState = {
    itemQuantity: number,
    item: {
        name: string,
        price: number,
        total: number
    }
}

type CartAction = {
    type: string,
    payload?: number
}

export const cartReducer = (state : CartState, action: CartAction) => {
    switch(action.type){
        case 'ADD':
            return {
                ...state,
                itemQuantity: state.itemQuantity + 1
            }
        case 'REMOVE':
            return {
                ...state,
                itemQuantity: state.itemQuantity - 1
            }
        case 'ADD TO CART': 
            return {
                ...state,
            }
        default:
            return state
    }
}

type CardContextProviderProps = {
    children: React.ReactNode
}

export const CardContextProvider = ({children} : CardContextProviderProps) => {
    const [state, dispatch] = useReducer(cartReducer, initState)

    return ( 
        <CartContext.Provider value={{state, dispatch}}>
            {children}
        </CartContext.Provider>
    );
}
 