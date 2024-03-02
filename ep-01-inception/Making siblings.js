/*
To make siblings , pass 3rd argument of React.createElement() as an array
*/

const parent = React.createElement("div", {
  id: "parent"
}, React.createElement("div", {
  id: "div"
},
 [
   React.createElement("h1", {
  id: "heading"
}, "You are inside H1"),

 React.createElement("h2", {
  id: "heading2"
}, "You are inside H2")
 ]));


const heading = React.createElement("h1",
  {
    id: "heading"
  }, "Hello World From React ❤️🙌");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
root.render(parent);


