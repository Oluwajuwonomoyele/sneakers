import { CartContext } from "../CartContext";
import {useContext} from 'react';

export const UseCartContext = () => {
    const context = useContext(CartContext)

    if(!context){
        throw new Error('useCardContext must be inside and AuthContextProvider')
    }

    return context
}