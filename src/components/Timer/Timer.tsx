import React, { useEffect, useRef, useState } from 'react';

import { Player } from '../../models/Player';

import { Colors } from '../../constants/colors.enum';

import styles from './Timer.module.scss';

interface TimerProps {
    currentPlayer: Player | null;
    restart: () => void;
}

export default function Timer({ currentPlayer, restart }: TimerProps) {
    const [blackTime, setBlackTime] = useState(300);
    const [whiteTime, setWhiteTime] = useState(300);

    const timer = useRef<null | ReturnType<typeof setInterval>>(null);

    useEffect(() => {
        startTimer();
    }, [currentPlayer]);

    function startTimer() {
        if (timer.current) {
            clearInterval(timer.current);
        }

        const callback = currentPlayer?.color === Colors.WHITE ? decrementWhiteTimer : decrementBlackTimer;
        timer.current = setInterval(callback, 1000);
    }

    function decrementBlackTimer() {
        setBlackTime(prev => prev - 1);
    }

    function decrementWhiteTimer() {
        setWhiteTime(prev => prev - 1);
    }

    function handleRestart() {
        setWhiteTime(300);
        setBlackTime(300);
        restart();
    }

  return (
    <div>
        <div>
            <button
                onClick={() => handleRestart()}
            >
                Restart game
            </button>
            <h2>Black - {blackTime}</h2>
            <h2>White - {whiteTime}</h2>
        </div>
    </div>
  );
}
