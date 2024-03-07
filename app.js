import React from "react";
import ReactDom from "react-dom/client";

const AppLayout = () => {

    return (
        <div>
            Test
        </div>
    )
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)