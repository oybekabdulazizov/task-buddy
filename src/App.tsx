import TodosPage from './pages/todos/TodosPage';

export default function App() {
  return (
    <div className='app-wrapper'>
      <div className='content-wrapper'>
        <h1 className='text-4xl font-light my-4'>TaskBuddy</h1>
        <TodosPage />
      </div>
    </div>
  );
}
