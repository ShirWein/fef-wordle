import React from "react";
import { useRef } from "react";
import { useEffect, useState } from "react";

export function Boardgame() {

    //* After page loaded, the focus at the first input
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    //* Allow user to enter Only letters & only one
    const [inputValue, setInputValue] = useState('');

    function handleChange(event) {
        const value = event.target.value;
        const letterRegex = /^[A-Z]$/;

        if (letterRegex.test(value)) {
            setInputValue(value);
        }
    }

    return (
        <div className="input-grid">
            {Array(30).fill().map((_, i) => (
                i === 0 ? <input type="text" key={i} className="input-field" ref={inputRef} value={inputValue} onChange={handleChange} /> :
                <input type="text" key={i} className="input-field" value={inputValue} onChange={handleChange} />
            ))}
        </div>
  );
};

