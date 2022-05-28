import React from 'react';

import { Board } from '../../models/Board';
import SideBarWrapper from '../SideBarWrapper/SideBarWrapper';
import Timer from './components/Timer/Timer';
import LostFigures from './components/LostFigures/LostFigures';

import styles from './GameInformationBar.module.scss';

interface GameOptionsProps {
  board: Board;
}

export default function GameInformationBar({ board }: GameOptionsProps) {
  return (
    <SideBarWrapper>
      <div>
          <div className={styles.gameInformationBar__title}>
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
