import React from "react";
import ReactDOM from "react-dom/client";

const title = (
    <h1 id="heading">
        Namaste React using JSX🚀
    </h1>
);

const HeadingComponent = () => (    
    <div id="container"> 
        {title}
        <h1>Namaste React Functional Component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);