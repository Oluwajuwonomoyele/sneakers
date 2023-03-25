import { CartSection, CartContainer, CartContent, Line, Item, ItemImgDiv, ItemDets, Remove, CheckOut } from './Cart.styles';

import shoe from '../../images/image-product-1-thumbnail.jpg';

import deleteIcon from '../../images/icon-delete.svg';

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
                    <Item>
                        <ItemImgDiv>
                            <img src={shoe} alt="shoe" />
                        </ItemImgDiv>
                        <ItemDets>
                            <div>
                                <h3>Fall Limited Edition Sneakers</h3>
                                <p>$125.00 x 3 <span>$375.00</span></p>
                            </div>
                            <Remove src={deleteIcon} alt='delete'/>
                        </ItemDets>
                    </Item>
                    <CheckOut>Checkout</CheckOut>
                </CartContent>
            </CartContainer>
        </CartSection>
    );
}
 
export default Cart;