import { useState } from "react";
import Details from "../components/hero/details";
import MobileNav from "../components/nav/mobileNav";
import Navbar from "../components/nav/navbar";


const Home = () => {
    const [openNav, setOpenNav] = useState(false);

    return (  
        <>
            <Navbar setOpenNav={setOpenNav} />
            <MobileNav openNav={openNav} setOpenNav={setOpenNav} />
            <Details />
        </>
    );
}
 
export default Home;