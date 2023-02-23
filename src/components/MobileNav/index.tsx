import { MobileNavSection, BG, MobileNavContainer, Close, Links} from './MobileNav.styles';
import exit from '../../images/icon-close.svg'

type MobileNavProps = {
    openNav: boolean
    toggleOpenNav: () => void
}

const MobileNav = ({openNav, toggleOpenNav} : MobileNavProps) => {
    return ( 
        <MobileNavSection>
            <BG openNav={openNav}></BG>
            <MobileNavContainer openNav={openNav}>
                <Close src={exit} alt='exit' onClick={() => toggleOpenNav()}/>

                <Links>
                    <p>Collections</p>
                    <p>Men</p>
                    <p>Women</p>
                    <p>About</p>
                    <p>Contact</p>
                </Links>
            </MobileNavContainer>
        </MobileNavSection>
    );
}
 
export default MobileNav;