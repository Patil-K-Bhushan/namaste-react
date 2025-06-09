// To create the Structure 

// <div id = 'parent'>
//     <div id = 'child1'>
//         <h1>I am heading 1</h1>
//         <h2>I am heading 2</h2>
//     </div>
//     <div id = 'child2'>
//         <h1>I am heading 1</h1>
//         <h2>I am heading 2</h2>
//     </div>
// </div>


const heading = React.createElement("div",{id:parent},
    [React.createElement("div",{id: "child1"},[
        React.createElement("h1",{},"I am h1 Tag"),
        React.createElement("h2",{},"I am h2 Tag")
    ]),
React.createElement("div",{id: "child2"},[
        React.createElement("h1",{},"I am h1 Tag"),
        React.createElement("h2",{},"I am h2 Tag")
    ])]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
