import React from "react";

export function Keyboard() {

    const keys = [
        'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P',
        'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L',
        'Z', 'X', 'C', 'V', 'B', 'N', 'M', 
        'Enter', 'Random Guess'
      ];
    
      return (
        <div className="keyboard" style={{display: 'inline-block'}}>
          {keys.map((key, i) => (
            key === 'Random Guess' ? <button key={i} className="key" style={{width: '187px'}}>{key}</button> :
            <button key={i} className="key">{key}</button>

          ))}
        </div>
      );
    };

   
