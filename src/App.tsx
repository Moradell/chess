import React, { useEffect, useState } from 'react';

import BoardComponent from './components/BoardComponent/BoardComponent';

import { Board } from './models/Board';

function App() {
  const [board, setBoard] = useState(new Board());

  function restart() {
    const newBoard = new Board();
    newBoard.initCells();
    newBoard.addFigures();
    setBoard(newBoard);
  }

  useEffect(() => {
    restart();
  }, []);

  return (
    <div className="app">
      <BoardComponent
        board={board}
      />
    </div>
  );
}

export default App;
