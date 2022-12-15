import React from 'react';
import { Navbar } from '../components/Navbar';
import { Boardgame } from '../components/Boardgame';
import { Keyboard } from '../components/Keyboard';

export function Game () {
    return (
        <>
            <Navbar/>
                <Boardgame/>
                <Keyboard/>

        </>
    )
}