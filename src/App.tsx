import './App.css';
import { ThemeProvider } from 'styled-components';
import { Navbar } from './components/Navbar';
import Hero from './components/Hero';
import Cart from './components/SneakerCart';
import MobileNav from './components/MobileNav';
import { useState } from 'react';

function App() {
  const [openNav, setOpenNav] = useState(false);
  const [ isCartOpen, setIsCartOpen ] = useState(false)

  const toggleOpenNav = ():void => {
    setOpenNav(!openNav)
  }

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen)
  }
  const theme = {
    colors: {
      primary: {
        orange: 'hsl(26, 100%, 55%)',
        paleOrange: 'hsl(25, 100%, 94%)'
      },
      neutral: {
          veryDarkBlue: 'hsl(220, 13%, 13%)',
          darkGrayishBlue: 'hsl(219, 9%, 45%)',
          grayishBlue: 'hsl(220, 14%, 75%)',
          lightGrayishBlue: 'hsl(223, 64%, 98%)',
          white: 'hsl(0, 0%, 100%)',
          black75: 'hsl(0, 0%, 0%)'
      }
    }
  }

  return (
    <ThemeProvider theme={theme}>
      <MobileNav openNav={openNav} toggleOpenNav={toggleOpenNav}/>
      <Navbar openNav={openNav} toggleOpenNav={toggleOpenNav} toggleCart={toggleCart}/>
      <Hero />
      <Cart isCartOpen={isCartOpen} />
    </ThemeProvider>
  );
}

export default App;
