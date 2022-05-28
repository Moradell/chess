import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

import { RootState } from '../../../../store/store';
import { Colors } from '../../../../constants/colors.enum';

import styles from './Timer.module.scss';

export default function Timer() {
    const [blackTime, setBlackTime] = useState(300);
    const [whiteTime, setWhiteTime] = useState(300);

    const timer = useRef<null | ReturnType<typeof setInterval>>(null);

    const currentPlayer = useSelector((state: RootState) => state.gameInfo.currentPlayer);

    useEffect(() => {
        startTimer();
    }, [currentPlayer]);

    function startTimer() {
        if (timer.current) {
            clearInterval(timer.current);
        }

        const callback = currentPlayer === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer;
        timer.current = setInterval(callback, 1000);
    }

    function decrementBlackTimer() {
        setBlackTime(prev => prev - 1);
    }

    function decrementWhiteTimer() {
        setWhiteTime(prev => prev - 1);
    }

  return (
    <div className={styles.timer}>
        <h3 className={styles.timer__title}>
            Время:
        </h3>
        <div>
            <h2 className={styles.timer__time}>
                Black - {blackTime}
            </h2>
            <h2 className={styles.timer__time}>
                White - {whiteTime}
            </h2>
        </div>
    </div>
  );
}
