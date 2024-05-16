import TodoList from "./components/TodoList/TodoList";
import Header from "./components/Header/Header";
import { useState } from "react";

function App() {
  const filters = ["All", "Doing", "Done"];
  const [filter, setFilter] = useState("All");
  const handleFilter = (filter) => setFilter(filter);

  return (
    <>
      <Header filters={filters} onFilter={handleFilter}/>
      <TodoList filter={filter} />
    </>
  );
}

export default App;
