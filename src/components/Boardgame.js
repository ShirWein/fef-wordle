import React from "react";
import { useEffect, useContext, useRef } from "react";
import { InputContext } from "../context/inputField";


export function Boardgame() {

    // //* After page loaded, the focus at the first input
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const myRefs = useRef([]); 

    const countRef = useRef(0);

    //* Allow user to enter only letters & only one
    const {inputValue, setInputValue} = useContext(InputContext);

    function handleChange(e, i) {
        if(countRef.current === 5) {
            alert('You reached the limit!')
            return;
        }
        const value = e.target.value;
        const lettersRegex = /^[A-Za-z]+$/;
        if (lettersRegex.test(value.i)) {
            console.log(countRef);
            setInputValue(value.i);
            countRef.current += 1; 
        }
    }

    return (
        <div className="input-grid">
            {Array(30).fill().map((_, i) => (
                i===0 ? <input type="text" key={i} className="input-field" ref={inputRef} maxLength={1} value={inputValue} onChange={(e) => handleChange(e, i)} /> :
                <input type="text" key={i} className="input-field" ref={i} maxLength={1} value={inputValue} onChange={(e) => handleChange} />
            ))}
        </div>
  );
};

