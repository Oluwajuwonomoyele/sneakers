import { Nav, NavContainer, Left, Menu, Logo, Right, CartToast, Avatar } from "./Navbar.styles";
import menu from '../../images/icon-menu.svg';
import logo from '../../images/logo.svg';
import cart from '../../images/icon-cart.svg';
import avatar from '../../images/image-avatar.png';
import MobileNav from "../MobileNav";

export const Navbar = ({toggleOpenNav} : React.ComponentProps<typeof MobileNav >) => {
  return (
    <Nav>
      <NavContainer>
          <Left>
            <Menu src={menu} alt="hamburger-menu" onClick={() => toggleOpenNav()}/>

            <Logo src={logo} alt='logo' />
          </Left>

          <Right>
            <CartToast>
              <img src={cart} alt="cart" />
            </CartToast>

            <Avatar>
              <img src={avatar} alt="avatar" />
            </Avatar>
          </Right>
      </NavContainer>
    </Nav>
  )
}
