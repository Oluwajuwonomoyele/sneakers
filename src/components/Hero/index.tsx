import { HeroSection, HeroContainer, SliderContainer, HeroContent, ContentHeader, Counter, Pricing, Price, Span1, Span2, CountandButton, Count, Minus, Plus, CartButton, ImgContainer, DisplayImg, Shoes, Shoe } from './Hero.styles';
import minus from '../../images/icon-minus.svg';
import plus from '../../images/icon-plus.svg';
import cart from '../../images/icon-cart2.svg';
import shoeOne from '../../images/image-product-1.jpg';
import shoeTwo from '../../images/image-product-2.jpg';
import shoeThree from '../../images/image-product-3.jpg';
import shoeFour from '../../images/image-product-4.jpg';
import ImageSlider from '../Slider';
import { UseCartContext } from '../../hooks/UseCartContext';

type HeroProps = {
  setIsCartEmpty: React.Dispatch<React.SetStateAction<boolean>>
  isCartEmpty: boolean
}

const Hero = ({setIsCartEmpty, isCartEmpty} : HeroProps) => {
  const {state, dispatch} = UseCartContext()
  
  const removeItem = ():void => { 
    if(state?.itemQuantity !== 0){
      dispatch({type: 'REMOVE'})
    }
  }

  const addToCart = ():void => {
    setIsCartEmpty(false)
    // dispatch({type: 'ADD TO CART', payload: state?.itemQuantity })
  }

  return ( 
    <HeroSection>
      <HeroContainer>
        <SliderContainer>
          <ImageSlider />
        </SliderContainer>

        <ImgContainer>
          <DisplayImg>
            <img src={shoeOne} alt="shoe" />
          </DisplayImg>

          <Shoes>
            <Shoe>
              <img src={shoeOne} alt="shoe" />
            </Shoe>
            <Shoe>
              <img src={shoeTwo} alt="shoe" />
            </Shoe>
            <Shoe>
              <img src={shoeThree} alt="shoe" />
            </Shoe>
            <Shoe>
              <img src={shoeFour} alt="shoe" />
            </Shoe>
          </Shoes>
        </ImgContainer>
        

        <HeroContent>
          <ContentHeader>SNEAKER COMPANY</ContentHeader>
          <h1>{state?.name}</h1>
          <p>These low-profile sneakers are your perfect causal wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>

          <Counter>
            <Pricing>
                <Price><Span1>${state?.price.toFixed(2)}</Span1> <Span2>50%</Span2></Price>
                <p>$250.00</p>
            </Pricing>

            <CountandButton>
              <Count>
                <Minus src={minus} alt='minus' onClick={() => removeItem()}/>
                <span>{state?.itemQuantity}</span>
                <Plus src={plus} alt='plus'  onClick={()=> dispatch({type: 'ADD'})}/>
              </Count>

              <CartButton><img src={cart} alt="cart"/>  <p>Add to cart</p></CartButton>
            </CountandButton>
          </Counter>
        </HeroContent>
      </HeroContainer>
    </HeroSection>
  );
}
 
export default Hero;