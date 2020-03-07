import Todo from "../domain/todo";

let todoData = [];
createNewTodo(new Todo("Build todo backend"));
createNewTodo(new Todo("Build todo ui"));
createNewTodo(new Todo("Build todo dev ops"));

function fetchAllTodos(): Todo[] {
  return todoData;
}

function fetchTodo(id: number): Todo {
  return todoData.find(t => t.getId() === id);
}

function createNewTodo(todo: Todo): number {
  todo.setId(todoData.length + 1);
  todoData.push(todo);
  return todo.getId();
}

function updateTodo(todo: Todo): Todo {
  todoData = todoData.map(t => {
    if(t.getId() === todo.getId()) {
      return todo;
    }
    return t;
  });
  return fetchTodo(todo.getId());
}

export { fetchAllTodos, createNewTodo, fetchTodo, updateTodo }