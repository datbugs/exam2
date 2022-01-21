
import { TypeTodo } from "../typeTodo";
import { Client } from "./Client";
const TodosAPI = {
  getAll() {
    const url = `/todos`;
    return Client.get(url);
  },
  get(id:number) {
    const url = `todos${id}`;
    return Client.get(url);
  },
  add(todo: TypeTodo) {
    const url = `/todos`;
    return Client.post(url, todo);
  },
  remove(id:number){
    const url = `/todos//${id}`;
    return Client.delete(url)
  },
  update(id:number,DataTodo:TypeTodo){
    const url = `/todos/${id}`;
    return Client.put(url,DataTodo )
}
};
export default TodosAPI;