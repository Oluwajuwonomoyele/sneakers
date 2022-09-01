import { useState } from "react";
import Details from "../components/hero/details";
import Slider from "../components/hero/slider";
import MobileNav from "../components/nav/mobileNav";
import Navbar from "../components/nav/navbar";


const Home = ({slides}) => {
    const [openNav, setOpenNav] = useState(false);

    return (  
        <>
            <Navbar setOpenNav={setOpenNav} />
            <MobileNav openNav={openNav} setOpenNav={setOpenNav} />
            <Slider slides={slides}/>
            <Details />
        </>
    );
}
 
export default Home;