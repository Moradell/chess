import React from 'react';

import CellComponent from '../CellComponent/CellComponent';

import { Board } from '../../models/Board';
import { Cell } from '../../models/Cell';

import styles from './BoardComponent.module.scss';

interface BoardProps {
  board: Board;
}

export default function BoardComponent({ board }: BoardProps) {
  return (
    <div className={styles.board}>
      {board.cells.map((row: Cell[], index: number) => (
        <React.Fragment key={index}>
          {row.map((cell: Cell) => (
            <CellComponent
              cell={cell}
              key={cell.id}
            />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
