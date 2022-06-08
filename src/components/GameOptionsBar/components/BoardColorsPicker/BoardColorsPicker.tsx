import React from 'react';

import styles from './BoardColorsPicker.module.scss';

export default function BoardColorsPicker() {
  return (
    <div className={styles.boardColorsPicker}>
      <h3 className={styles.boardColorsPicker__title}>
        Цвета поля
      </h3>
      <select name="colors" id="colors">
        <option value="red">red</option>
      </select>
    </div>
  );
}
