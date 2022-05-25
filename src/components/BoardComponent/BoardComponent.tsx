import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store/store';
import { toggleCurrentPlayer } from '../../store/gameInformationSlice';
import { Board } from '../../models/Board';
import { Cell } from '../../models/Cell';

import CellComponent from '../CellComponent/CellComponent';

import styles from './BoardComponent.module.scss';

interface BoardProps {
  board: Board;
  setBoard: (board: Board) => void;
}

export default function BoardComponent({
    board,
    setBoard,
}: BoardProps) {
    const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

    const currentPlayer = useSelector((state: RootState) => state.gameInfo.currentPlayer);
    const dispatch = useDispatch();
    const swapPlayer = () => dispatch(toggleCurrentPlayer());

    useEffect(() => {
        highlightCells();
    }, [selectedCell]);

    function clickOnCell(cell: Cell) {
        if (selectedCell && selectedCell !== cell && selectedCell.figure?.canMove(cell)) {
            selectedCell.moveFigure(cell);
            swapPlayer();
            setSelectedCell(null);
        } else {
            if (cell.figure?.color === currentPlayer) {
                setSelectedCell(cell);
            }
        }

        if (selectedCell && selectedCell === cell) {
            setSelectedCell(null);
        }
    }

    function highlightCells() {
        board.highlightCells(selectedCell);
        updateBoard();
    }

    function updateBoard() {
        const newBoard = board.getCopyBoard();
        setBoard(newBoard);
    }

    return (
        <div className={styles.board_wrapper}>
            <h3 className={styles.current_player}>
                Current player {currentPlayer}
            </h3>
            <div className={styles.board}>
                {board.cells.map((row: Cell[], index: number) => (
                    <React.Fragment key={index}>
                    {row.map((cell: Cell) => (
                        <CellComponent
                            key={cell.id}
                            cell={cell}
                            selected={cell.x === selectedCell?.x && cell.y === selectedCell?.y}
                            clickOnCell={clickOnCell}
                        />
                    ))}
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
}
