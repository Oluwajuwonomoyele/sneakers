import { Nav, NavContainer, Left, Menu, Logo, Right, CartToast, Avatar, Toast, NavLinks, Link } from "./Navbar.styles";
import menu from '../../images/icon-menu.svg';
import logo from '../../images/logo.svg';
import cart from '../../images/icon-cart.svg';
import avatar from '../../images/image-avatar.png';
import { UseCartContext } from "../../hooks/UseCartContext";

type NavbarProps = {
  openNav: boolean,
  toggleOpenNav : () => void,
  toggleCart : () => void,
  isCartEmpty: boolean
}

export const Navbar = ({toggleOpenNav, toggleCart, isCartEmpty} : NavbarProps) => {
  const {state} = UseCartContext()

  return (
    <Nav>
      <NavContainer>
          <Left>
            <Menu src={menu} alt="hamburger-menu" onClick={() => toggleOpenNav()}/>
            <Logo src={logo} alt='logo' />

            <NavLinks>
              <Link>Collections</Link>
              <Link>Men</Link>
              <Link>Women</Link>
              <Link>About</Link>
              <Link>Contact</Link>
            </NavLinks>
          </Left>

          <Right>
            <CartToast onClick={() => toggleCart()}>
              <img src={cart} alt="cart" />
              {isCartEmpty ? '' : <Toast>{state?.addedQuantity}</Toast> }
            </CartToast>

            <Avatar>
              <img src={avatar} alt="avatar" />
            </Avatar>
          </Right>
      </NavContainer>
    </Nav>
  )
}
