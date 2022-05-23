import React, { useEffect, useState } from 'react';

import Timer from './components/Timer/Timer';
import BoardComponent from './components/BoardComponent/BoardComponent';
import LostFigures from './components/LostFigures/LostFigures';
import GameInformationBar from './components/GameInformationBar/GameInformationBar';
import GameOptionsBar from './components/GameOptionsBar/GameOptionsBar';

import { Board } from './models/Board';
import { Player } from './models/Player';

import { Colors } from './constants/colors.enum';

function App() {
    const [board, setBoard] = useState<Board>(new Board());
    const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
    const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
    const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

    useEffect(() => {
        restart();
    }, []);

    function restart() {
        const newBoard = new Board();
        newBoard.initCells();
        newBoard.addFigures();
        setBoard(newBoard);
        setCurrentPlayer(whitePlayer);
    }

    function swapPlayer() {
        setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer);
    }

    return (
        <div className="app">
            <Timer
                restart={restart}
                currentPlayer={currentPlayer}
            />
            <GameInformationBar />
            <BoardComponent
                board={board}
                setBoard={setBoard}
                currentPlayer={currentPlayer}
                swapPlayer={swapPlayer}
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
