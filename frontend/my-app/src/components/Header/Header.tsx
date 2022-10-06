import { HeaderContainer, Logo } from "./Header.style";


const Header = () => {
    return (
        <HeaderContainer>
            <Logo src="/images/myteacher.png"></Logo>
            <p>Encontre o professor perfeito</p>
        </HeaderContainer>
    );
}

export default Header