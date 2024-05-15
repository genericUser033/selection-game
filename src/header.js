import {HeaderContainer, HeaderContents, Navbar, NavbarContents} from "./style";
import {useNavigate} from "react-router-dom";
export const Header = () => {
    const navigate = useNavigate();
    return (
        <HeaderContainer>
            <HeaderContents>
                Header
            </HeaderContents>
            <Navbar>
                <NavbarContents onClick={() => navigate("/main")}>
                    Game
                </NavbarContents>
                <NavbarContents onClick={() => navigate("/ranking")}>
                    Ranking
                </NavbarContents>
            </Navbar>
        </HeaderContainer>
    )
}