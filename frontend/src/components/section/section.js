import React from 'react';
import styles from './section.module.css';


export default function Section({ children }){
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};
