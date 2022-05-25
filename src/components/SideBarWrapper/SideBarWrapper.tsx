import React from 'react';

import styles from './SideBarWrapper.module.scss';

interface SideBarProps {
    children: JSX.Element;
}

export default function SideBarWrapper({ children }: SideBarProps) {
  return (
      <div className={styles.container}>
        <div className={styles.background_img}>
          <div className={styles.box}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <div className={styles.content}>
              {children}
            </div>
          </div>
      </div>
    </div>
  );
}
