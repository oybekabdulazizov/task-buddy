import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { getTodos, todo_type } from '../../services/store/todosSlice';
import TodosList from './components/todoList/TodosList';
import CreateTodo from './components/createTodo/CreateTodo';

export default function TodosPage() {
  const [data, setData] = useState<Array<todo_type>>([]);
  const todos = useSelector(getTodos);

  useEffect(() => {
    setData(todos);
  }, [todos]);

  return (
    <div>
      <CreateTodo />
      <TodosList data={data} />
    </div>
  );
}
