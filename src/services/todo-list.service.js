const data = [
  {
    title: "Ant Design Title 1"
  },
  {
    title: "Ant Design Title 2"
  },
  {
    title: "Ant Design Title 3"
  },
  {
    title: "Ant Design Title 4"
  }
];

export const getAllTodos = () => {
  return Promise.resolve(data);
};

export const createTodo = () => {
  return Promise.resolve();
};

export const finishTodo = () => {
  return Promise.resolve();
};

export const removeTodo = () => {
  return Promise.resolve();
};
