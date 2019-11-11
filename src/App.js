import React from "react";
import { Layout, Menu } from "antd";

import Form from "./components/Form";
import TodoList from "./components/TodoList";

const { Header, Content, Footer } = Layout;

function App() {
  const loadMyTodos = () => {};
  const createNewTodo = () => {};
  const finishTodo = () => {};
  const removeTodo = () => {};

  return (
    <Layout>
      <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={["2"]}
          style={{ lineHeight: "64px" }}
        >
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
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
          <Form />
          <TodoList />
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>Workshop PLANNING</Footer>
    </Layout>
  );
}

export default App;
