let data = [];
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
