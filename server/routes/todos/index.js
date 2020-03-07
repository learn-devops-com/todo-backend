import express from 'express'
import {
  addNewTodo,
  getTodos,
  markTodoAsComplete
} from "../../service/todo-service";

const router = express.Router();

router.get('/', function(req, res, next) {
  res.json(getTodos());
});

router.post('/', function(request, response){
  response.send(addNewTodo(request.body));
});

router.post('/:id/complete', function(request, response){
  let updatedTodoResponse = markTodoAsComplete(parseInt(request.params.id));
  response.send(updatedTodoResponse);
});

export default router;
