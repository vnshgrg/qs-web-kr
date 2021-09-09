import React from 'react';
import Header from '../Header';
import Footer from '../Footer';
import { Hero } from '../../components';

const MainLayout = ({ children }) => {
    return (
        <>
            <Header>
                <Hero />
            </Header>
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default MainLayout;
