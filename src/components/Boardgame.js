import React from "react";
import { useRef } from "react";
import { useEffect, useState } from "react";

export function Boardgame() {

    //* After page loaded, the focus at the first input
    // const inputRef = useRef(null);

    // useEffect(() => {
    //     inputRef.current.focus();
    // }, []);

    //* Allow user to enter only letters & only one
    const [inputValue, setInputValue] = useState('');

    function handleChange(value) {
        const lettersRegex = /^[A-Za-z]+$/;

        if (lettersRegex.test(value)) {
            setInputValue(value.i);
            console.log(value, value.i);
        } 
    }

    return (
        <div className="input-grid">
            {Array(30).fill().map((_, i) => (
                <input type="text" key={i} className="input-field" maxLength={1} value={inputValue} onChange={(e) => handleChange(e.target.value)} />
                
            ))}
        </div>
  );
};

