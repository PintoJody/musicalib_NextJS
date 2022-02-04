import Link from 'next/link';
import styled from 'styled-components';

const NavHeader = styled.div`
    width = 100%;
    background-color: grey;
`

const NavLogo = styled.a`
    font-size: 4rem;
    padding: 2rem 0 2rem 2rem
`

const Navbar = () => (
    <NavHeader>
        <Link href="/">
             <NavLogo>Musicalib</NavLogo>
        </Link>
    </NavHeader>
)

export default Navbar;