import React from "react";
import ReactDOM from "react-dom";
import ColourList from "./ColourList";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ColourList />, div);
  ReactDOM.unmountComponentAtNode(div);
});
