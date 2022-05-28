import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { toggleCurrentPlayer } from './store/gameInformationSlice';
import { Board } from './models/Board';

import BoardComponent from './components/BoardComponent/BoardComponent';
import GameOptionsBar from './components/GameOptionsBar/GameOptionsBar';
import GameInformationBar from './components/GameInformationBar/GameInformationBar';


function App() {
    const [board, setBoard] = useState<Board>(new Board());

    const dispatch = useDispatch();
    const swapPlayer = () => dispatch(toggleCurrentPlayer());

    useEffect(() => {
        restart();
    }, []);

    function restart() {
        const newBoard = new Board();
        newBoard.initCells();
        newBoard.addFigures();
        setBoard(newBoard);
        swapPlayer();
    }

    return (
        <div className="app">
            <GameOptionsBar />
            <BoardComponent
                board={board}
                setBoard={setBoard}
            />
            <GameInformationBar 
                board={board}
            />
        </div>
    );
}

export default App;
