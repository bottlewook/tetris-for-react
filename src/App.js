import "./App.scss";
import GridSqure from "./compontents/GridSquare";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Tetris Redux</h1>
      </header>
      <GridSqure color={"1"} />
    </div>
  );
}

export default App;
