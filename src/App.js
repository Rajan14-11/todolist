import "./App.css";
import Header from "./components/Header";
import Todo from "./components/Todo";

function App() {
  return (
    <>
      <div className="box">
        <div className="container">
          <Header />
          <Todo />
        </div>
      </div>
    </>
  );
}

export default App;
