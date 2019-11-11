import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import { shallow } from "enzyme";
import { render } from "@testing-library/react";

describe("App", () => {
  it("renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("should Form exists [ENZYME]", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("Form").length).toBe(1);
  });

  it("should Form exists [RTL]", () => {
    const { queryByTestId } = render(<App />);
    const element = queryByTestId("todolist-form");
    expect(element).toBeInTheDocument();
  });

  it("should TodoList exists [ENZYME]", () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find("TodoList").length).toBe(1);
  });

  it("should TodoList exists [RTL]", () => {
    const { queryByTestId } = render(<App />);
    const element = queryByTestId("todolist");
    expect(element).toBeInTheDocument();
  });
});
