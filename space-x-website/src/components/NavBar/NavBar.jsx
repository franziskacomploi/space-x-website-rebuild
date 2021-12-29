import React, { useRef } from 'react';
import { gql, useQuery } from '@apollo/client';
import useNavigation from '../../hooks/useNavigation';

import Error from './../Error/Error';
import Loader from './../Loader/Loader';
import TopMenu from './../TopMenu/TopMenu';
import SideMenu from './../SideMenu/SideMenu';

const GET_ROCKETS_NAMES = gql`
    {
        rockets {
            id
            name
        }
    }
`;
const NavBar = () => {
    const navRef = useRef(null);
    const { isMobileView, isMenuOpen, setIsMenuOpen } = useNavigation(navRef);

    const { data, loading, error } = useQuery(GET_ROCKETS_NAMES);

    if (loading) return <Loader />;
    if (error) return <Error />;

    return (
        <div className="container-fluid" ref={navRef}>
            <div className="row">
                <TopMenu
                    rockets={data.rockets}
                    isMenuOpen={isMenuOpen}
                    isMobileView={isMobileView}
                    toggleMenu={setIsMenuOpen}
                />
                <SideMenu
                    rockets={data.rockets}
                    isMenuOpen={isMenuOpen}
                    isMobileView={isMobileView}
                    toggleMenu={setIsMenuOpen}
                />
            </div>
        </div>
    );
};

export default NavBar;
