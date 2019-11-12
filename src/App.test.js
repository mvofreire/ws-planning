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

  it("should add item when set title and click add", () => {
    const { getByTestId, getAllByText } = render(<App />);

    act(() => {
      fireEvent.change(getByTestId("input-add-todo"), {
        target: { value: "my todo" }
      });
    });

    act(() => {
      fireEvent.click(getByTestId("btn-add-todo"));
    });

    const items = getAllByText(/my todo/);
    expect(items.length).toBe(1);
  });
});
