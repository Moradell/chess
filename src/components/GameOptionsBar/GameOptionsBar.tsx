import React from 'react';

import SideBarWrapper from '../SideBarWrapper/SideBarWrapper';
import BoardColorsPicker from './components/BoardColorsPicker/BoardColorsPicker';

import styles from './GameOptionsBar.module.scss';

export default function GameOptionsBar() {
  return (
    <SideBarWrapper>
      <div>
        <div className={styles.gameOptionsBar__title}>
            Настройки игры
        </div>
        <BoardColorsPicker />
      </div>
    </SideBarWrapper>
  );
}
