import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { BrowserRouter as Router } from "react-router-dom";
import Colour from "./Colour";
import item from "./__mocks__/item";

let container;

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it("can render and update a counter", () => {
  act(() => {
    ReactDOM.render(
      <Router>
        <Colour>{item}</Colour>
      </Router>,
      container
    );
  });
});
