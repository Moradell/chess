import React from 'react';

import cn from 'classnames';

import { Cell } from '../../models/Cell';

import styles from './CellComponent.module.scss';

interface CellProps {
  cell: Cell;
}

export default function CellComponent({ cell }: CellProps) {
  return (
    <div className={cn(styles.cell, {
      [styles.white_cell]: cell.color === 'white',
      [styles.black_cell]: cell.color === 'black',
    })}
    >
      {cell.figure}
    </div>
  );
}
