export default function Todo(title) {
  let _title = title;
  let _isComplete = false;
  let _id = undefined;

  this.setId = id => {
    _id = id;
  };

  this.getId = () => {
    return _id;
  };

  this.getTitle = () => {
    return _title;
  };

  this.isComplete = () => {
    return _isComplete;
  };

  this.markAsComplete = () => {
    _isComplete = true;
  };
}