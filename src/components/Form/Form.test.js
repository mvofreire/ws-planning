import React from "react";
import ReactDOM from "react-dom";
import Form from ".";
import { render, fireEvent, act } from "@testing-library/react";

describe("Form", () => {
  it("render without crash", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Form />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Should handler on user input text [RTL]", () => {
    const { container } = render(<Form />);

    //arrange
    const title = "Title of ToDo";
    const element = container.querySelector("input");
    const event = { target: { value: title } };

    //act
    act(() => {
      fireEvent.change(element, event);
    });

    //assert
    expect(element.value).toBe(title);
  });

  it("Should run callback when Form Submit [RTL]", () => {
    //arrange
    const callback = jest.fn();
    const { container } = render(<Form onCreateTodo={callback} />);
    const form = container.querySelector("form");

    //act
    act(() => {
      fireEvent.submit(form);
    });

    //assert
    expect(callback).toHaveBeenCalled();
  });
});
