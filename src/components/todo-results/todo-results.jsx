import * as React from 'react';
import { TodosContext } from '../../todo-context';
import './todo-results.scss';

export const TodoResults = () => {
  const { todos } = React.useContext(TodosContext);

  const calculateChecked = () => `${todos.filter((todoItem) => todoItem.checked).length}`;

  return (
    <div className="todo-results">
      Done:
      {calculateChecked()}
    </div>
  );
};
