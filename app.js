/* eslint-disable no-undef */

const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading1" }, "heading 1"),
    React.createElement("h2", { id: "heading2" }, "heading2"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading1" }, "heading 1"),
    React.createElement("h2", { id: "heading2" }, "heading2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
