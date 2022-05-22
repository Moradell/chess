import React from 'react';

import { Figure } from '../../models/figures/Figure';

import styles from './LostFigures.module.scss';

interface LostFiguresProps {
    title: string;
    figures: Figure[];
}

export default function LostFigures({ title, figures }: LostFiguresProps) {
  return (
    <div className={styles.wrapper}>
        <h3>
            {title}
        </h3>
        {figures.map(figure => (
            <div
                key={figure.id}
            >
                {figure.name}
                {figure.logo && (
                    <img src={figure.logo} alt={figure.name} width={20} height={20} />
                )}
            </div>
        ))}
    </div>
  )
}
