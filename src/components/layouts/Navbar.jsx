import React, { useState } from 'react';
import useMediaQuery from '../../custom-hooks/useMediaQuery';
const Navbar = ({ selectedPage, setSelectedPage }) => {
    const [isMenuToggled, setIsMenuToggled] = useState(false);
    const isAboveMediumScreens = useMediaQuery('(min-width: 768px)');
    return (
        <nav className={`z-40 w-full fixed top-0 right-0 py-6`}>
            <div className="flex items-center justify-between mx-auto w-5/6">
                <h4 className="text-3xl"></h4>
            </div>
        </nav>
    );
};

export default Navbar;
