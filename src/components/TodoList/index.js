import React from "react";
import { List, Button } from "antd";

const TodoList = ({ data, onFinish, onRemove }) => {
  return (
    <div data-testid="todolist">
      {data.length === 0 && (
        <span>Você ainda não possui nenhum tarefa no momento!</span>
      )}
      {data.length > 0 && (
        <List
          itemLayout="horizontal"
          dataSource={data}
          renderItem={item => (
            <List.Item
              actions={[
                <Button
                  data-testid="todo-item-finish"
                  onClick={onFinish && onFinish.bind(null, item.id)}
                  type="link"
                >
                  &#10004;
                </Button>,
                <Button
                  data-testid="todo-item-remove"
                  onClick={onRemove && onRemove.bind(null, item.id)}
                  type="danger"
                >
                  X
                </Button>
              ]}
            >
              <List.Item.Meta
                title={<a href="https://ant.design">{item.title}</a>}
              />
            </List.Item>
          )}
        />
      )}
    </div>
  );
};

TodoList.defaultProps = {
  data: [],
  onFinish: null,
  onRemove: null
};

export default TodoList;
