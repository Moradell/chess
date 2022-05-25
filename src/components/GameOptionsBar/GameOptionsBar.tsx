import React from 'react';

import SideBarWrapper from '../SideBarWrapper/SideBarWrapper';
import Timer from '../Timer/Timer';

import styles from './GameOptionsBar.module.scss';

export default function GameOptionsBar() {
  return (
    <SideBarWrapper>
      <div>
          <div className={styles.title}>
            Текщая игра:
          </div>
          <Timer />
      </div>
    </SideBarWrapper>
  );
}
