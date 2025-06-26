import React from "react";
import ReactDOM from "react-dom/client";

// Create a Nested header Element using React.createElement(h1,h2,h3 inside a div with class “title”)

const HeaderElement =React.createElement("div",{className:"title"},[
    React.createElement("h1",{},"This is H1 tag"),
    React.createElement("h2",{},"This is H2 Tag"),
    React.createElement("h3",{},"This is H3 Tag")
]);

//Create the same element using JSX

const jsxHeader =(
    <div className="title">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
    </div>
);

//Create a functional component of the same with JSX

const FunctionalHeader = () =>(
    <div className="title">
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
    </div>
);

//Pass attributes into the tag in JSX

const Title = ()=>{
    <div className="title">
        <h1 style={{color:"red"}}>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
    </div>
}

//Composition of Component(Add a component inside another)

const Headings = ()=>{
    return(
        <div className="Headings">
            <h1>Heading 1</h1>
            <h2>Heading 2</h2>
            <h3>Heading 3</h3>
        </div>
    )
}

const Page = ()=>{
    <div className="title">
        <Headings />
        <p>This is Page</p>
    </div>
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(HeaderElement);