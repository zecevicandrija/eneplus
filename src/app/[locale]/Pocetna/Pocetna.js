'use client';

import React from 'react';
import EneplusScroll from './EneplusScroll';
import Navbar from './Navbar';
import Services from './Services';
import About from './About';

export default function Pocetna() {
    return (
        <main>
            <Navbar />
            <EneplusScroll />
            <About />
            <Services />
        </main>
    );
}
