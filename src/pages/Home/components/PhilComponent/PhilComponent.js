import React from 'react';
import styles from './PhilComponent.css';

const PhilComponent = ({ title }) => (
  <div className={styles.wrapper}>{title}</div>
);

export default PhilComponent;
