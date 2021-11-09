import React, { useState } from 'react';
import './Header.scss';
import { Navbar, Container, Nav } from 'react-bootstrap';
import Image from '../UI/Image/Image';
import headerLogo from '../../assets/img/WhiteLogo.svg';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import { RiBarChartHorizontalFill } from 'react-icons/ri';

const Header = (props) => {
  let { id } = useParams();
  const [navExpanded, setNavExpanded] = useState(false);
  const closeNav = () => {
    setNavExpanded(false);
  };
  const openNav = () => {
    setNavExpanded(!navExpanded);
  };
  let route = useLocation();
  let exactpath = route.pathname;
  let splitLocation = exactpath.split('/');

  return (
    <div className='main-header-wrapper'>
      <Navbar
        collapseOnSelect
        expand='lg'
        bg='white'
        variant='dark'
        expanded={navExpanded}
        fixed='top'>
        <Container>
          <NavLink to='/' className='navbar-brand'>
            <div className='header-logo-wrapper'>
              <Image
                imgLink={headerLogo}
                imgClassess='img-fluid'
                imgAlt={'Header Logo'}
              />
            </div>
          </NavLink>
          <Navbar.Toggle aria-controls='responsive-navbar-nav'>
            <div className='open-nav-button' onClick={openNav}>
              <RiBarChartHorizontalFill />
            </div>
          </Navbar.Toggle>
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='ml-auto'>
              <NavLink
                exact
                to='/'
                activeClassName='selected'
                className='nav-link'
                onClick={closeNav}>
                Home
              </NavLink>
              <NavLink
                to='/about'
                activeClassName='selected'
                className='nav-link'
                onClick={closeNav}>
                About
              </NavLink>
              <NavLink
                to='/our-works'
                activeClassName='selected'
                className={`nav-link ${
                  exactpath === '/work-details/' + splitLocation[2] &&
                  'selected'
                }`}
                onClick={closeNav}>
                Our Works
              </NavLink>
              {/* <NavLink
                to='/work-process'
                activeClassName='selected'
                className={`nav-link ${
                  exactpath === '/work-process' && 'selected'
                }`}
                onClick={closeNav}>
                work process
              </NavLink> */}
              <NavLink
                to='/blog'
                activeClassName='selected'
                className={`nav-link`}
                onClick={closeNav}
                // eslint-disable-next-line react/jsx-no-duplicate-props
                className={`nav-link ${
                  exactpath === '/blog-details/' + splitLocation[2] &&
                  'selected'
                }`}>
                INSIGHTS
              </NavLink>
              <NavLink
                to='/Contact'
                activeClassName='selected'
                className='nav-link'
                onClick={closeNav}>
                Contact
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
