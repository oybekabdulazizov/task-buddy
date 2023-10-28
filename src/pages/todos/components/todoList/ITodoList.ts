import { todo_type } from "../../../../services/store/todosSlice";

export default interface ITodoList {
  data: Array<todo_type>;
}