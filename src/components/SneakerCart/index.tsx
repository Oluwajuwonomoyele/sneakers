import { CartSection, CartContainer, CartContent, Line } from './Cart.styles'

type CartProps = {
    isCartOpen: boolean
}

const Cart = ({isCartOpen} : CartProps) => {
    return ( 
        <CartSection isCartOpen={isCartOpen}>
            <CartContainer>
                <h1>Cart</h1>
                <Line></Line>

                <CartContent>
                    <p>Your cart is empty.</p>
                </CartContent>
            </CartContainer>
        </CartSection>
    );
}
 
export default Cart;