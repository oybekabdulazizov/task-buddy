import { useSelector } from 'react-redux';
import './App.css';
import { getTodos, todo_type } from './store/todosSlice';

export default function App() {
  const todos = useSelector(getTodos);

  return (
    <div className='bg-red-300 mx-auto w-[900px] h-full pt-6 py-10'>
      <h1 className='text-4xl font-light my-6'>TaskBuddy</h1>
      {todos.map((todo: todo_type) => (
        <div key={todo.id}>{todo.task}</div>
      ))}
    </div>
  );
}
