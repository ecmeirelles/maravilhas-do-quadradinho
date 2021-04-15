import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

import { colors, media } from '../variables';

export const NavBarSt = styled.nav`
  position: relative;
  display: block;
  width: 100%;
  padding: 24px 0;
  background-color: ${colors.aqua};

  ${media.lg(css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `)}
`;

export const LogoSt = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  margin-left: 24px;

  a {
    color: ${colors.snow};
    font-family: 'Crafty Girls', cursive;
    font-size: 16px;

    ${media.md(css`
      font-size: 28px;
    `)}

    ${media.xl(css`
      font-size: 32px;
    `)}
  }
`;

export const NavLinksWrapperSt = styled.div`
  display: none;
  flex-direction: column;
  width: 100%;
  padding-top: 24px;

  a:last-of-type {
    padding-bottom: 0;
    border-bottom: none;
  }

  ${media.lg(css`
    display: flex;
    flex-direction: row;
    flex: 1;
    justify-content: flex-end;
    margin-right: 24px;
    padding: 0;

    a:last-of-type {
      margin-right: 0;
    }
  `)}
`;

export const NavLinksSt = styled(Link)`
  margin-right: 24px;
  margin-left: 24px;
  padding: 16px 0;
  border-bottom: 0.3px solid ${colors.pearl};
  color: ${colors.snow};
  font-size: 16px;
  font-weight: 600;

  ${media.md(css`
    font-size: 20px;
  `)}

  ${media.lg(css`
    margin-left: 0;
    padding: 0;
    border-bottom: none;
  `)}
`;

export const MobileLinkIconButtonSt = styled.button`
  display: block;
  position: absolute;
  top: 24px;
  right: 20px;

  i {
    font-size: 24px;
    color: ${colors.snow};
  }

  ${media.lg(css`
    display: none;
  `)}
`;
