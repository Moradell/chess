import React, { useEffect, useState } from 'react';

import BoardComponent from './components/BoardComponent/BoardComponent';

import { Board } from './models/Board';

function App() {
    const [board, setBoard] = useState<Board>(new Board());

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
            setBoard={setBoard}
        />
        </div>
    );
}

export default App;
