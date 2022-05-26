import React from 'react';

import { Board } from '../../models/Board';
import SideBarWrapper from '../SideBarWrapper/SideBarWrapper';
import Timer from '../Timer/Timer';
import LostFigures from '../LostFigures/LostFigures';

import styles from './GameOptionsBar.module.scss';

interface GameOptionsProps {
  board: Board;
}

export default function GameOptionsBar({ board }: GameOptionsProps) {
  return (
    <SideBarWrapper>
      <div>
          <div className={styles.title}>
            Текщая игра:
          </div>
          <Timer />
          <div>
            <LostFigures
                board={board}
            />
          </div>
      </div>
    </SideBarWrapper>
  );
}
