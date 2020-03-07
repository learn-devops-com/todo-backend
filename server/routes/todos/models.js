export class TodoCreatedResponse {
  constructor(id) {
    this.id = id;
  }
}

export class TodoRequest {
  constructor(title) {
    this.title = title;
  }
}

export class TodoResponse{
  constructor(title, isComplete) {
    this.title = title;
    this.isComplete = isComplete;
  }
}
