import React from "react";

function Container({ children }) {
    return (
        <div className="container mx-auto px-4 select-none pt-28">
            {children}
        </div>
    );
}

export default Container;
