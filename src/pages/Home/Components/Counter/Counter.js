import PropTypes from 'prop-types';
import React from 'react';
import styles from './Counter.css';

const Counter = ({ count, incrementCount, decrementCount }) => (
  <>
    <p className={styles.title}>
      Simple counter example using redux & redux-saga.
      <br />
      Demonstrating using a promise with 1 second timeout delay.
    </p>
    <div className={styles.wrapper}>
      <button
        className={styles.actionBtn}
        onClick={() => decrementCount()}
      >-
      </button>
      <span className={styles.text}>{count}</span>
      <button
        className={styles.actionBtn}
        onClick={() => incrementCount()}
      >+
      </button>
    </div>
  </>
);

export default Counter;

Counter.defaultProps = {
  count: 0,
  incrementCount: f => f,
  decrementCount: f => f,
};

Counter.propTypes = {
  count: PropTypes.number,
  incrementCount: PropTypes.func,
  decrementCount: PropTypes.func,
};
