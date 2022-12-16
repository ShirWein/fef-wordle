import React, { useContext } from "react";
import { useState } from "react";
import { InputContext } from "../context/inputField";

export function Keyboard() {

    const {inputValue, setInputValue} = useContext(InputContext);

    const keys = [
        'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
        'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
        'Z', 'X', 'C', 'V', 'B', 'N', 'M', 
        'Enter', 'Random Guess'
      ];

      function handleOnClickLetter(event) {
          const letter = event.target.value;
          console.log(letter);
          if (event.target.value === 'Enter') {
              return "";
          }
          setInputValue(letter);
          
          
      }
    
      return (
        <div className="keyboard" style={{display: 'inline-block'}}>
          {keys.map((key, i) => (
            key === 'Random Guess' ? <button key={i.toString()} className="key" style={{width: '187px'}}>{key}</button> :
            <button key={i} className="key" value= {key} onClick={handleOnClickLetter}>{key}</button>

          ))}
        </div>
      );
    };

   
