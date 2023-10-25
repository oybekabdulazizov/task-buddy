import TodoForm from './TodoForm';

export default function CreateTodo() {
  return (
    <div className='w-full my-6'>
      <TodoForm edit={false} />
    </div>
  );
}
