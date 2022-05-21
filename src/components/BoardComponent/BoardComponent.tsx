import React from 'react';

import CellComponent from '../CellComponent/CellComponent';

import styles from './BoardComponent.module.scss';

export default function BoardComponent() {
  return (
    <div className={styles.board}>
      <CellComponent />
    </div>
  );
}
