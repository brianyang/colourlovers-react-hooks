import React from "react";
import ReactDOM from "react-dom";
import ColourList from "./ColourList";
import { render, fireEvent } from "react-testing-library";

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<ColourList />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe(`pagination controls`, () => {
  const { container } = render(<ColourList />);
  const paginationContainer = container.querySelector(".pagination");
  const page1 = paginationContainer.children[1];
  const page2 = paginationContainer.children[2];
  const nextBtn = paginationContainer.lastChild;

  it(`expects page1 to be set to active`, () => {
    expect(/active/.exec(page1.classList.value)).not.toEqual(null);
  });
  it(`sets page2 to be active when clicking next`, () => {
    fireEvent.click(page2);
    expect(/active/.exec(page1.classList.value)).toEqual(null);
    expect(/active/.exec(page2.classList.value)).not.toEqual(null);
  });
});
