


import React from 'react';

import Header from "../Header";
import Intro from '../Layout/Intro';
import About from "../Layout/About";
import Skills from "../Layout/Skills"
import Expreince from "../Layout/Expreience"
import Work from "../Layout/Work"
import Feedbacks from "../Layout/Feedbacks"
import Footer from "../Footer";

const Layout = () => {
    return (
        <div>
            <main>
                <Header />
                <Intro/>
                <About/>
                <Skills/>
                <Expreince/>
                <Work/>
                <Feedbacks/>
                <Footer />
            </main>



        </div>
    );
};

export default Layout;