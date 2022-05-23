import React from 'react';

import styles from './SideBarWrapper.module.scss';

interface SideBarProps {
    children: JSX.Element;
}

export default function SideBarWrapper({ children }: SideBarProps) {
  return (
    <div className={styles.sideBar}>
        {children}
    </div>
  );
}
