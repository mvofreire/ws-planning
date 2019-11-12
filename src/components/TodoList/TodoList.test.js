import React from "react";
import ReactDOM from "react-dom";
import TodoList from ".";
import { render, fireEvent, act } from "@testing-library/react";

describe("TodoList", () => {
  const props = {
    data: [
      {
        id: 1,
        title: "Title of TODO"
      }
    ]
  };

  it("render without crash", () => {
    const div = document.createElement("div");
    ReactDOM.render(<TodoList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Should render message when has no data", () => {
    const { getByText } = render(<TodoList />);
    const element = getByText(
      /Você ainda não possui nenhum tarefa no momento!/
    );
    expect(element).toBeInTheDocument();
  });

  it("Should show List of TODO's", () => {
    //arrange
    const { getByText } = render(<TodoList {...props} />);

    //act
    const element = getByText(/Title of TODO/);

    //assert
    expect(element).toBeInTheDocument();
  });

  it("Should run callback when click Finish TODO", () => {
    //arrange
    const callback = jest.fn();
    const { getByTestId } = render(<TodoList {...props} onFinish={callback} />);

    //act
    act(() => {
      fireEvent.click(getByTestId("todo-item-finish"));
    });

    //assert
    expect(callback).toHaveBeenCalled();
    expect(callback.mock.calls[0][0]).toBe(props.data[0].id);
  });

  it("Should run callback when click Finish TODO", () => {
    //arrange
    const callback = jest.fn();
    const { getByTestId } = render(<TodoList {...props} onRemove={callback} />);

    //act
    act(() => {
      fireEvent.click(getByTestId("todo-item-remove"));
    });

    //assert
    expect(callback).toHaveBeenCalled();
    expect(callback.mock.calls[0][0]).toBe(props.data[0].id);
  });
});
