import CreateTodo from './components/CreateTodo';
import TodosList from './components/TodosList';

export default function App() {
  return (
    <div className='min-h-full py-10 px-4 bg-sky-950'>
      <div className='mx-auto max-w-[500px] py-4 px-6 bg-stone-300 rounded-lg'>
        <h1 className='text-4xl font-light my-4'>TaskBuddy</h1>
        <CreateTodo />
        <TodosList />
      </div>
    </div>
  );
}
