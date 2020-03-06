import express from 'express'

const router = express.Router();

const todoData = [
  {
    isComplete: false,
    title: "Build todo backend"
  },
  {
    isComplete: false,
    title: "Build todo ui"
  },
  {
    isComplete: false,
    title: "Build todo ops"
  }
];

router.get('/', function(req, res, next) {
  let indexedTodos = todoData.map((todo, index) => ({
    ...todo,
    id: index + 1,
  }));
  res.json(indexedTodos);
});

router.post('/', function(request, response){
  todoData.push({
    ...request.body,
    isComplete: false,
  });
  response.send({
    id: todoData.length
  });
});

export default router;
