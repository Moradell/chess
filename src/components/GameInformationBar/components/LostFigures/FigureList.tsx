import React from 'react';

import { Colors } from '../../../../constants/colors.enum';
import { Figure } from '../../../../models/figures/Figure';

import styles from './LostFigures.module.scss';

interface FigureListProps {
    color: Colors;
    figures: Figure[];
}

export default function FigureList({ color, figures }: FigureListProps) {
  return (
    <div
      className={styles.figureList}
      style={{ color: color === Colors.BLACK ? '#000' : '#fff' }}>
      <div className={styles.figureList__title}>
        {color}
      </div>
      <ul>
        {figures.map(figure => (
          <li className={styles.figureList__figureItem}>
            {figure.logo && (
              <img src={figure.logo} alt={figure.name} width={20} height={20} />
            )}
            {figure.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
