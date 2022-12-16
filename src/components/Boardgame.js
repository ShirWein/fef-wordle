import React from "react";
import { useEffect, useContext, useRef } from "react";
import { InputContext } from "../context/inputField";


export function Boardgame() {

    // //* After page loaded, the focus at the first input
    // const inputRef = useRef(null);

    // useEffect(() => {
    //     inputRef.current.focus();
    // }, []);

    const myRefs = useRef([]); 

    //* Allow user to enter only letters & only one
    const {inputValue, setInputValue} = useContext(InputContext);

    function handleChange(e, i) {
        const value = e.target.value;
        const lettersRegex = /^[A-Za-z]+$/;
        if (lettersRegex.test(value)) {
            setInputValue(value);

            
        } 
    }

    return (
        <div className="input-grid">
            {Array(30).fill().map((inp, i) => (
                <input type="text" key={i} className="input-field" ref={myRefs.current[i]} maxLength={1} value={inputValue} onChange={(e) => handleChange} />
            ))}
        </div>
  );
};

