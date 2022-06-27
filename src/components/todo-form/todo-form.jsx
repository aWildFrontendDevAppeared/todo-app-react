import * as React from 'react';
import { TodosContext } from '../../todo-context';
import './todo-form.scss';

export const TodoForm = () => {
  const { todos, setTodos } = React.useContext(TodosContext);
  const [task, setTask] = React.useState('');

  const [error, setError] = React.useState('');

  const handleAddTodo = () => {
    const newTask = {
      id: todos.length > 0 ? todos[todos.length - 1].id + 1 : 0,
      label: task,
      checked: false,
    };

    if (task.length > 0) {
      setError('');
      setTodos(todos.concat(newTask));
      setTask('');
    } else {
      setError('Please add a title first');
    }
  };

  const handleKeyUp = (e) => {
    if (e.keyCode === 13) {
      handleAddTodo();
    }
  };

  return (
    <div className="todo-form">
      <input
        placeholder="Enter new task"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
          if (e.target.value.length > 0) {
            setError('');
          }
        }}
        onKeyUp={handleKeyUp}
      />
      <button type="button" onClick={handleAddTodo}>
        Add task
      </button>
      <small>{error}</small>
    </div>
  );
};
