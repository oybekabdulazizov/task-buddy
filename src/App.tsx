import './App.css';
import TodosList from './components/TodosList';

export default function App() {
  return (
    <div className='bg-red-300 mx-auto w-[900px] h-full pt-6 py-10'>
      <h1 className='text-4xl font-light my-6'>TaskBuddy</h1>
      <TodosList />
    </div>
  );
}
