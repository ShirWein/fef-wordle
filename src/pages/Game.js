import React from 'react';
import { useState } from 'react';
import { Navbar } from '../components/Navbar';
import { Boardgame } from '../components/Boardgame';
import { Keyboard } from '../components/Keyboard';
import { InputContext } from '../context/inputField';

export function Game () {

    const [inputValue, setInputValue] = useState('');
    const inputApi = {inputValue, setInputValue};

    return (
        
        <InputContext.Provider value={inputApi}>
            <Navbar/>
                <Boardgame/>
                <Keyboard/>
        </InputContext.Provider>

    )
}