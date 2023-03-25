import { Nav, NavContainer, Left, Menu, Logo, Right, CartToast, Avatar, Toast } from "./Navbar.styles";
import menu from '../../images/icon-menu.svg';
import logo from '../../images/logo.svg';
import cart from '../../images/icon-cart.svg';
import avatar from '../../images/image-avatar.png';

type NavbarProps = {
  openNav: boolean,
  toggleOpenNav : () => void,
  toggleCart : () => void
}

export const Navbar = ({toggleOpenNav, toggleCart} : NavbarProps) => {
  return (
    <Nav>
      <NavContainer>
          <Left>
            <Menu src={menu} alt="hamburger-menu" onClick={() => toggleOpenNav()}/>

            <Logo src={logo} alt='logo' />
          </Left>

          <Right>
            <CartToast onClick={() => toggleCart()}>
              <img src={cart} alt="cart" />
              <Toast>3</Toast>
            </CartToast>

            <Avatar>
              <img src={avatar} alt="avatar" />
            </Avatar>
          </Right>
      </NavContainer>
    </Nav>
  )
}
