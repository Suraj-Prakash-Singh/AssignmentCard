import React from "react";
import ReactDom from "react-dom/client";
import CardContainer from "./src/components/CardContainer";

const AppLayout = () => {

    return (
        <CardContainer></CardContainer>
    )
}

const root = ReactDom.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)