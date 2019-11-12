import React, { Component } from "react";
import { Layout } from "antd";

import Form from "./components/Form";
import TodoList from "./components/TodoList";

import {
  getAllTodos,
  createTodo,
  finishTodoById,
  removeTodoById
} from "./services/todo-list.service";

const { Header, Content, Footer } = Layout;
class App extends Component {
  state = {
    todos: []
  };

  componentDidMount() {
    this.loadTodos();
  }

  loadTodos = async () => {
    const todos = await getAllTodos();
    this.setState({ todos });
  };

  createNewTodo = async title => {
    await createTodo(title);
    this.loadTodos();
  };

  finishTodo = async id => {
    await finishTodoById(id);
    this.loadTodos();
  };

  removeTodo = async id => {
    await removeTodoById(id);
    this.loadTodos();
  };

  render() {
    const { todos } = this.state;

    return (
      <Layout>
        <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
          <div className="logo">WorkShop Planning</div>
        </Header>
        <Content style={{ padding: "0 50px", marginTop: 64 }}>
          <div
            style={{
              background: "#fff",
              padding: 24,
              minHeight: 380,
              height: "calc(100vh - 133px)"
            }}
          >
            <Form onCreateTodo={this.createNewTodo} />
            <TodoList
              data={todos}
              onFinish={this.finishTodo}
              onRemove={this.removeTodo}
            />
          </div>
        </Content>
        <Footer style={{ textAlign: "center" }}>Workshop PLANNING</Footer>
      </Layout>
    );
  }
}

export default App;
