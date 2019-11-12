import React, { useState } from "react";
import { Form as FormInput, Input, Button } from "antd";

const Form = ({ onCreateTodo }) => {
  const [text, setText] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    onCreateTodo && onCreateTodo(text);
  };

  const handleTextChange = e => {
    const { value } = e.target;
    setText(value);
  };

  return (
    <div data-testid="todolist-form">
      <FormInput layout="inline" onSubmit={handleSubmit}>
        <FormInput.Item label="Title">
          <Input type="text" value={text} onChange={handleTextChange} />
        </FormInput.Item>
        <FormInput.Item>
          <Button type="primary" htmlType="submit">
            Add Todo
          </Button>
        </FormInput.Item>
      </FormInput>
    </div>
  );
};

export default Form;
