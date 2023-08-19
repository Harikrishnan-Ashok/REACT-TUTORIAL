import React from 'react' 
import styled,{css} from 'styled-components';
import {Link} from 'react-router-dom';
import { MenuData } from '../data/MenuData';
const Nav=styled.nav
`
  height: 60px;
  display:flex;
  justify-content:space-between;
  padding:1 rem 2 rem;
  z-index:100;
  position:fixed;
  width:100%;
  background: #000;
`;
const Logo = styled(Link)` 
  color:#fff;
  font-style:italic;

`;
const Menubars = styled.i``;
const Navmenu = styled.i``;
const NavMenuLinks = styled(Link)`:color:#fff;`;


const Navbar = () => {
  return (
    <Nav>
      <Logo to="/">ELIXER</Logo>
      <Menubars />
      <Navmenu>
        {MenuData.map((item,index)=>(
          <NavMenuLinks to={item.Link} key={index}>
            {item.title}
          </NavMenuLinks>
        ))}
      </Navmenu>
      <>Navbar</>
    </Nav>
  )
}

export default Navbar