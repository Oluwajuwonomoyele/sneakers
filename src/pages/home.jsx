import { useState } from "react";
import Details from "../components/hero/details";
import Slider from "../components/hero/slider";
import Cart from "../components/nav/cart";
import MobileNav from "../components/nav/mobileNav";
import Navbar from "../components/nav/navbar";


const Home = ({slides}) => {
    const [openNav, setOpenNav] = useState(false);
    const [openCart, setOpenCart] = useState(false);
    const [counter, setCounter] = useState(0)

    return (  
        <>
            <Navbar setOpenNav={setOpenNav} setOpenCart={setOpenCart} openCart={openCart} />
            <Cart openCart={openCart}/>
            <MobileNav openNav={openNav} setOpenNav={setOpenNav} />
            <Slider slides={slides}/>
            <Details counter={counter} setCounter={setCounter} />
        </>
    );
}
 
export default Home;