import React from 'react';

import SideBarWrapper from '../SideBarWrapper/SideBarWrapper';

import styles from './GameInformationBar.module.scss';

export default function GameInformationBar() {
  return (
    <SideBarWrapper>
      <div>
        <div className={styles.gameInformationBar__title}>
            Настройки игры
        </div>
      </div>
    </SideBarWrapper>
  );
}
