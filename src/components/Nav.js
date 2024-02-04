import React from 'react'
import { styled } from 'styled-components'

const Nav = ({ nav }) => {
  return (
    <Navbar nav={nav}>
      <div className='wrapper'>
        <img src="/assets/logo.svg" alt="logo" />
        <NavLinks>
          <li>Vehicles</li>
          <li>Energy</li>
          <li>Charging</li>
          <li>Discover</li>
          <li>Shop</li>
        </NavLinks>
        <Options>
          <i className="fa-regular fa-circle-question"></i>
          <i className="fa-solid fa-globe"></i>
          <i class="fa-regular fa-circle-user"></i>
        </Options>
      </div>
    </Navbar>
  )
}

const Navbar = styled.nav`
  position: fixed;
  z-index: 100;
  width: 100%;
  top: 0;
  color: ${props => props.nav ? '#000' : '#fff'};
  height: 50px;
  div.wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 2;
    max-width: 1400px;
    height: 100%;
    margin: auto;
    @media screen and (max-width: 567px){
      max-width: 90%;
    }
  }
  img {
    width: 140px;
    filter: drop-shadow(2px 2px 3px grey)
  }
`
const NavLinks = styled.ul`
  display: flex;
  gap: 25px;
  list-style: none;
  @media screen and (max-width: 567px){
    display: none;
  }
  a {
    filter: drop-shadow(2px 2px 3px grey)
  }
`
const Options = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
  font-size: 21px;
  width: 140px;
  i {
    cursor: pointer;
  }
`

export default Nav
