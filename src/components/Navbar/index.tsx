import { Nav, NavContainer, Left, Menu, Logo, Right, Cart, Avatar } from "./Navbar.styles";
import menu from '../../images/icon-menu.svg';
import logo from '../../images/logo.svg';
import cart from '../../images/icon-cart.svg';
import avatar from '../../images/image-avatar.png';

export const Navbar = () => {
  return (
    <Nav>
      <NavContainer>
          <Left>
            <Menu src={menu} alt="hamburger-menu" />

            <Logo src={logo} alt='logo' />
          </Left>

          <Right>
            <Cart>
              <img src={cart} alt="cart" />
            </Cart>

            <Avatar>
              <img src={avatar} alt="avatar" />
            </Avatar>
          </Right>
      </NavContainer>
    </Nav>
  )
}
