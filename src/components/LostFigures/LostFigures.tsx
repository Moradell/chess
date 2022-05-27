import React from 'react';

import { Board } from '../../models/Board';
import { Colors } from '../../constants/colors.enum';
import FigureList from './FigureList';

import styles from './LostFigures.module.scss';

interface LostFiguresProps {
    board: Board;
}

export default function LostFigures({ board }: LostFiguresProps) {
    return (
      <div className={styles.lostFigures}>
          <h3 className={styles.lostFigures__title}>
              Забранные фигуры
          </h3>
          <div className={styles.lostFigures__lists}>
            <FigureList
                color={Colors.BLACK}
                figures={board.lostBlackFigures}
            />
            <FigureList
                color={Colors.WHITE}
                figures={board.lostWhiteFigures}
            />
          </div>
      </div>
    );
  }
