import close from '../../images/icon-close.svg';

const MobileNav = ({openNav, setOpenNav}) => {
    return (  
        <div className={ openNav ? "fixed w-full h-full inset-0 z-50 bg-black bg-opacity-70" : "fixed w-0 h-0 inset-0 z-50 bg-black bg-opacity-70"}>
            <div className={ openNav ? "fixed left-0 w-3/4 h-full bg-white p-6 flex-col flex gap-12 transition-all ease-linear duration-300" : "fixed -left-[100%] w-3/4 h-full bg-white p-6 flex-col flex gap-12 transition-all ease-linear duration-300"}>
                <div onClick={() => setOpenNav(false)}>
                    <img src={close} alt="Close" />
                </div>

                <ul className='flex flex-col gap-4 font-bold'>
                    <li>Collections</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </div>
        </div>
    );
}
 
export default MobileNav;