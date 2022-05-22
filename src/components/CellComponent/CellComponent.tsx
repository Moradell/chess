import React from 'react';

import cn from 'classnames';

import { Cell } from '../../models/Cell';

import styles from './CellComponent.module.scss';

interface CellProps {
    cell: Cell;
    selected: boolean;
    clickOnCell: (cell: Cell) => void;
}

export default function CellComponent({ cell, selected, clickOnCell }: CellProps) {
    return (
        <div
            className={cn(styles.cell, {
                [styles.white_cell]: cell.color === 'white',
                [styles.black_cell]: cell.color === 'black',
                [styles.selected_cell]: selected,
                [styles.available_cell_background]: cell.figure && cell.available,
            })}
            onClick={() => clickOnCell(cell)}
        >
            {!cell.figure && cell.available && (
                <div className={styles.available_cell} />
            )}
            {cell.figure?.logo && (
                <img src={cell.figure.logo} alt={cell.figure.name} />
            )}
        </div>
    );
}
