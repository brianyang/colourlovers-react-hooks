import React from "react";
import ReactDOM from "react-dom";
import { act, Simulate } from "react-dom/test-utils";
import { BrowserRouter as Router } from "react-router-dom";
import ColourDetail from "./ColourDetail";
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
        <ColourDetail match={{ params: { id: 4632811 } }}>{item}</ColourDetail>
      </Router>,
      container
    );
  });
  const button = container.querySelector(".btn-primary.detail");
  act(() => {
    Simulate.click(button);
  });
});
