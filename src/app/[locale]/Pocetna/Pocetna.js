'use client';

import React from 'react';
import EneplusScroll from './EneplusScroll';
import Services from './Services';
import About from './About';
import Team from './Team';
import FAQ from './FAQ';

export default function Pocetna() {
    return (
        <main>
            <EneplusScroll />
            <About />
            <Team />
            <Services />
            <FAQ />
        </main>
    );
}
