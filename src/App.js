import "./App.css";

function App() {
  return (
    <div className="App">
      <h1 className="text-3xl font-bold underline">To-Do list</h1>
      <input type="text" placeholder="enter a new task" />
      <button onClick={() => alert("click")}>save task!</button>
    </div>
  );
}

export default App;
