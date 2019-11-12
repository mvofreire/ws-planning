let data = [
  {
    id: 1,
    title: "Ant Design Title 1",
    complete: false
  },
  {
    id: 2,
    title: "Ant Design Title 2",
    complete: false
  },
  {
    id: 3,
    title: "Ant Design Title 3",
    complete: false
  },
  {
    id: 4,
    title: "Ant Design Title 4",
    complete: true
  }
];

export const getAllTodos = () => {
  return Promise.resolve(data);
};

export const createTodo = title => {
  const newItem = {
    id: data.length + 1,
    title,
    complete: false
  };

  data = [...data, newItem];
  return Promise.resolve();
};

export const finishTodoById = id => {
  data = data.map(item => ({
    ...item,
    complete: item.id === id ? !item.complete : item.complete
  }));
  return Promise.resolve();
};

export const removeTodoById = id => {
  const _data = [...data];
  const index = _data.findIndex(x => x.id === id);
  _data.splice(index, 1);
  data = _data;

  return Promise.resolve();
};
