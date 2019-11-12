import React from "react";
import App from "./App";
import { render, act, cleanup, fireEvent } from "@testing-library/react";

describe("App", () => {
  beforeEach(() => {
    cleanup();
    jest.restoreAllMocks();
  });

  it("should Form exists [RTL]", () => {
    const { getByTestId } = render(<App />);
    const element = getByTestId("todolist-form");

    expect(element).toBeInTheDocument();
  });

  it("should TodoList exists [RTL]", () => {
    const { getByTestId } = render(<App />);
    const element = getByTestId("todolist");
    expect(element).toBeInTheDocument();
  });
});
