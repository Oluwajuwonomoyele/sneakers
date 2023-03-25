import { HeroSection, HeroContainer, SliderContainer, HeroContent, ContentHeader, Counter, Pricing, Price, Span1, Span2, Count, Minus, Plus, CartButton } from './Hero.styles';
import minus from '../../images/icon-minus.svg';
import plus from '../../images/icon-plus.svg';
import cart from '../../images/icon-cart2.svg';
import ImageSlider from '../Slider';
import { UseCartContext } from '../../hooks/UseCartContext';

const Hero = () => {
  const {state, dispatch} = UseCartContext()

  const removeItem = () => { 
    if(state?.itemQuantity !== 0){
      dispatch({type: 'REMOVE'})
    }
  }

  return ( 
    <HeroSection>
      <HeroContainer>
        <SliderContainer>
          <ImageSlider />
        </SliderContainer>
        

        <HeroContent>
          <ContentHeader>SNEAKER COMPANY</ContentHeader>
          <h1>Fall Limited Edition Sneakers</h1>
          <p>These low-profile sneakers are your perfect causal wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer.</p>

          <Counter>
            <Pricing>
                <Price><Span1>$125.00</Span1> <Span2>50%</Span2></Price>
                <p>$250.00</p>
            </Pricing>

            <Count>
              <Minus src={minus} alt='minus' onClick={() => removeItem()}/>
              <span>{state?.itemQuantity}</span>
              <Plus src={plus} alt='plus'  onClick={()=> dispatch({type: 'ADD'})}/>
            </Count>

            <CartButton><img src={cart} alt="cart"/>  <p>Add to cart</p></CartButton>
          </Counter>
        </HeroContent>
      </HeroContainer>
    </HeroSection>
  );
}
 
export default Hero;