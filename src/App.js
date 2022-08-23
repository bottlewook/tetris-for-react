import "./App.scss";
import Controls from "./compontents/Controls";
import GridBoard from "./compontents/GridBoard";
import MessagePopup from "./compontents/MessagePopup";
import NextBlock from "./compontents/NextBlock";
import ScoreBoard from "./compontents/ScoreBoard";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">Tetris Redux</h1>
      </header>
      <GridBoard />
      <NextBlock />
      <ScoreBoard />
      <Controls />
      <MessagePopup />
    </div>
  );
}

export default App;
