import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import {
  LogoSt,
  MobileLinkIconButtonSt,
  NavBarSt,
  NavLinksSt,
  NavLinksWrapperSt,
} from './NavBar.css';

const NavBarCmp = ({ breakpoint }) => {
  const navLinksRef = useRef(null);

  const onMenuIconClick = () => {
    const linksDiv = navLinksRef.current;

    linksDiv.style.display =
      linksDiv.style.display === 'flex' ? 'none' : 'flex';
  };

  const onCloseMenu = () => {
    const linksDiv = navLinksRef.current;

    if (breakpoint === 'sm' || breakpoint === 'md') {
      linksDiv.style.display = 'none';
    }
  };

  useEffect(() => {
    if (navLinksRef?.current && (breakpoint === 'xl' || breakpoint === 'lg')) {
      const linksDiv = navLinksRef.current;
      linksDiv.style.display = 'flex';
    } else {
      onMenuIconClick();
    }
  }, [breakpoint]);

  return (
    <NavBarSt>
      <LogoSt>
        <Link to="/" onClick={onCloseMenu}>
          Maravilhas do Quadradinho
        </Link>
      </LogoSt>
      <NavLinksWrapperSt ref={navLinksRef}>
        <NavLinksSt to="/compras" onClick={onCloseMenu}>
          Lista de Compras
        </NavLinksSt>
        <NavLinksSt to="/biscoitos" onClick={onCloseMenu}>
          Biscoitos
        </NavLinksSt>
        <NavLinksSt to="/encomendas" onClick={onCloseMenu}>
          Encomendas
        </NavLinksSt>
      </NavLinksWrapperSt>
      <MobileLinkIconButtonSt type="button" onClick={onMenuIconClick}>
        <i className="fa fa-bars" />
      </MobileLinkIconButtonSt>
    </NavBarSt>
  );
};

export const NavBar = connect((state) => ({
  breakpoint: state.app.breakpoint,
}))(NavBarCmp);

NavBarCmp.propTypes = {
  breakpoint: PropTypes.string.isRequired,
};
