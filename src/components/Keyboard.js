import React from "react";

export function Keyboard() {

    return (
        <div className="input-grid">
            {Array(30).fill().map((_, i) => (
                <input type="text" key={i} className="input-field" />
            ))}
        </div>
  );
};
