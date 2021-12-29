import React from 'react';
// style
import './style.scss';
// components
import SpaceXSvgLogo from './../Logo/Logo';
import MenuLinks from './../MenuLinks/MenuLinks';
import MenuButton from './../MenuButton/MenuButton';

const TopMenu = ({ rockets, isMenuOpen, isMobileView, toggleMenu }) => (
    <div className="nav col d-flex justify-content-between align-items-center position-absolute">
        <MenuButton isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        {!isMobileView && <MenuLinks rockets={rockets} toggleMenu={toggleMenu} />}
        <SpaceXSvgLogo />
    </div>
);

export default TopMenu;
