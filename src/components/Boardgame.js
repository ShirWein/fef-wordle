import React from "react";
import { useEffect, useContext, useRef } from "react";
import { InputContext } from "../context/inputField";


export function Boardgame() {

    //* After page loaded, the focus at the first input
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    //* Allow user to enter only letters & only one
    const {inputValue, setInputValue} = useContext(InputContext);

    function handleChange(value, i) {
        const lettersRegex = /^[A-Za-z]+$/;

        if (lettersRegex.test(value[i])) {
            setInputValue(value[i]);
            console.log(value[i], value[i]);
        } 
    }

    return (
        <div className="input-grid">
            {Array(30).fill().map((_, i) => (
                i === 0 ? <input type="text" key={i} className="input-field" ref={inputRef} maxLength={1} value={inputValue} onChange={(e) => handleChange(e.target.value)} />:
                <input type="text" key={i} className="input-field" maxLength={1} value={inputValue} onChange={(e) => handleChange(e.target.value, _.key)} />
            ))}
        </div>
  );
};

