import { CartSection, CartContainer, CartContent, Line } from './Cart.styles'

const Cart = () => {
    return ( 
        <CartSection>
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