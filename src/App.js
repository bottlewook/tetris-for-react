import reducers from "./reducers";
import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./App.scss";
import Controls from "./compontents/Controls";
import GridBoard from "./compontents/GridBoard";
import MessagePopup from "./compontents/MessagePopup";
import NextBlock from "./compontents/NextBlock";
import ScoreBoard from "./compontents/ScoreBoard";

const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
