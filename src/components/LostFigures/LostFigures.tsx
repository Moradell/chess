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
            />
            <FigureList
                color={Colors.WHITE}
            />
          </div>
      </div>
    );
  }

// export default function LostFigures({ title, figures }: LostFiguresProps) {
//   return (
//     <div className={styles.wrapper}>
//         <h3>
//             {title}
//         </h3>
//         {figures.map(figure => (
//             <div
//                 key={figure.id}
//             >
//                 {figure.name}
//                 {figure.logo && (
//                     <img src={figure.logo} alt={figure.name} width={20} height={20} />
//                 )}
//             </div>
//         ))}
//     </div>
//   );
// }
