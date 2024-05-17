import { atom } from "recoil";

export const todosState = atom({
  key: "todos",
  default: [todosLocalStorage],
});

function todosLocalStorage() {
  const todos = localStorage.getItem("todos");
  return todos
    ? JSON.parse(todos)
    : [{ id: 1, text: "Empty todo", status: "Done", editStatus: false }];
}
