import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from './store/store';
import { toggleCurrentPlayer } from './store/gameInformationSlice';
import { Board } from './models/Board';

import Timer from './components/Timer/Timer';
import BoardComponent from './components/BoardComponent/BoardComponent';
import LostFigures from './components/LostFigures/LostFigures';
import GameInformationBar from './components/GameInformationBar/GameInformationBar';
import GameOptionsBar from './components/GameOptionsBar/GameOptionsBar';


function App() {
    const [board, setBoard] = useState<Board>(new Board());

    const currUsr = useSelector((state: RootState) => state.gameInfo.currentPlayer);

    const dispatch = useDispatch();
    const swapPlayer = () => dispatch(toggleCurrentPlayer());

    useEffect(() => {
        restart();
        console.log(currUsr);
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
            <Timer
                restart={restart}
            />
            <GameInformationBar />
            <BoardComponent
                board={board}
                setBoard={setBoard}
            />
            <GameOptionsBar />
            <div>
                <LostFigures
                    title='White figures'
                    figures={board.lostWhiteFigures}
                />
                <LostFigures
                    title='Black figures'
                    figures={board.lostBlackFigures}
                />
            </div>
        </div>
    );
}

export default App;
