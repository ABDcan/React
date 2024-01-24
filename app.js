
// const heading = React.createElement("h1", {id:"heading",className :"c1" }, "hello world from react");
// this heading is not any element but its a object 
const parent = React.createElement("div",{id:"parent"},React.createElement("div", {id:"child"},React.createElement("h1",{},"I am h1 tag")));
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);