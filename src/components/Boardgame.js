import React from "react";

export function Boardgame() {

    return (
        <div className="input-grid">
            {Array(30).fill().map((_, i) => (
                <input type="text" key={i} className="input-field" />
            ))}
        </div>
  );
};

