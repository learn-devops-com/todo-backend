import express from 'express'

const router = express.Router();

const todos = [
  {
    id: 1,
    name: "Build todo backend"
  },
  {
    id: 2,
    name: "Build todo ui"
  },
  {
    id: 3,
    name: "Build todo ops"
  }
];

router.get('/todos', function(req, res, next) {
  res.json(todos);
});

export default router;
