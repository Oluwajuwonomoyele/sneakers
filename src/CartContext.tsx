import { createContext, useReducer } from "react";

type ContextType = {
    dispatch : React.Dispatch<CartAction>
    state: CartState | null

}

export const CartContext = createContext<ContextType | null>(null)

const initState = {
    name: 'Fall Limited Edition Sneakers',
    itemQuantity: 0,
    addedQuantity: 0,
    price: 125,
    totalPrice: 0
}

type CartState = {
    name: string,
    itemQuantity: number,
    addedQuantity: number
    price: number,
    totalPrice: number
}

type AddToCartAction = {
    type: 'ADD TO CART' | 'REMOVE FROM CART',
    payload?: number
}

type OtherActions = {
    type: 'ADD' | 'REMOVE'
}

type CartAction = AddToCartAction | OtherActions

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
        // case 'ADD TO CART': 
        //     return {
        //         ...state,
        //         addedQuantity: action.payload
        //     }
        case 'REMOVE FROM CART':
            return {
                ...state
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
 