import React from 'react';
import Footer from './Footer';
import ResponsiveAppBar from './Header';
import Header from './Header';

const Layouts = ({children}) => {
    return (
        <div>
            <ResponsiveAppBar></ResponsiveAppBar>
            {children}
            <Footer></Footer>
        </div>
    );
};

export default Layouts;