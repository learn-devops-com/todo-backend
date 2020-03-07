import {
  fetchAllTodos,
  fetchTodo,
  createNewTodo,
  updateTodo
} from "./todo-store";
import Todo from "../domain/todo";
import {
  TodoCreatedResponse,
  TodoRequest,
  TodoResponse
} from "../routes/todos/models";

function getTodos(): TodoResponse {
  return fetchAllTodos().map(todo => new TodoResponse(todo.getTitle(), todo.isComplete()));
}

function addNewTodo(todoRequest: TodoRequest): TodoCreatedResponse {
  const id = createNewTodo(new Todo(todoRequest.title));
  return new TodoCreatedResponse(id);
}

function markTodoAsComplete(id: number): TodoResponse {
    let todo = fetchTodo(id);
    todo.markAsComplete();
    const updatedTodo = updateTodo(todo);
    return new TodoResponse(updatedTodo.getTitle(), updatedTodo.isComplete());
}

export { getTodos, addNewTodo, markTodoAsComplete };