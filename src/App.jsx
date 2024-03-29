import "./App.css";
import AddTodos from "./components/AddTodos";
import Todos from "./components/Todos";

function App() {
  return (
    <>
      <h1 className="text-4xl text-white">Learn Redux Toolkit Todo</h1>
      <AddTodos />
      <Todos />
    </>
  );
}

export default App;
