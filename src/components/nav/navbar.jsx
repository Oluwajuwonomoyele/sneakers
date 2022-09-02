import hamburger from '../../images/icon-menu.svg';
import logo from '../../images/logo.svg';
import cart from '../../images/icon-cart.svg';
import profileImage from '../../images/image-avatar.png';

const Navbar = ({setOpenNav, openCart, setOpenCart}) => {
    return ( 
        <header>
            <div className="container mx-auto p-4 flex justify-between items-center">
                <div className='flex items-center gap-4' onClick={() => setOpenNav(true)}>
                    <div className='cursor-pointer lg:hidden'>
                        <img src={hamburger} alt="menu" />
                    </div>

                    <div className='cursor-pointer' >
                        <img src={logo} alt="logo" />
                    </div>
                </div>

                <div className='flex items-center gap-4' onClick={() => setOpenCart(!openCart)}>
                    <div className='cursor-pointer relative'>
                        <img src={cart} alt="cart" />
                        <div className='absolute -top-2 -right-2 text-[12px] font-bold bg-primary-orange py-[1px] px-1 rounded-full text-white'>3</div>
                    </div>

                    <div className='w-10 h-10'>
                        <img src={profileImage} alt="profile" />
                    </div>
                </div>
            </div>
        </header>
    );
}
 
export default Navbar;