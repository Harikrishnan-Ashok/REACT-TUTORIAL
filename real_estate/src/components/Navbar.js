import React from 'react' 
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import { MenuData } from '../data/MenuData';
import { Button } from './Button';
import {MdOutlineSegment} from 'react-icons/md'

const Nav = styled.nav`
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2rem;
  z-index: 100;
  position: fixed;
  width: 100%;
  background: red;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1); /* Add a subtle shadow */
`;

const Logo = styled(Link)`
  color: #fff;
  font-style: italic;
  font-size: 1.5rem; /* Adjust font size */
  text-decoration: none;

  &:hover {
    color: #ff9900; /* Change color on hover */
  }
`;

const Menubars = styled(MdOutlineSegment)`
  font-size: 2rem;
  display none;
  color: #000;
  cursor: pointer;
  
  @media screen and(max-width:768px){display:block;}
`;

const Navmenu = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
  padding: 0;

  @media screen and (max-width:768px){display:none;}
`;

const NavMenuLinks = styled.li`
  margin: 0 1rem;
  font-size: 1rem;
  color: #fff;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    color: #ff9900; /* Change color on hover */
  }
`;
const NavBtn = styled.div`
  display:flex;
  align-items:center;
  margin-right:24px;

  @media screen and (max-width:768px){display:none;}

`;


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
      <NavBtn>
        <Button to="/contact" primary = 'true'>Contact us</Button>
      </NavBtn>
    </Nav>
  )
}

export default Navbar