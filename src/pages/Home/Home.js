import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  incrementCount,
  decrementCount
} from '../../commons/actions/actions';
import Counter from './Components/Counter/Counter';
import styles from './Home.css';

class Home extends React.Component {
  render () {
    const { count, dispatch } = this.props;
    return (
      <div>
        <h1 className={styles.title}>Welcome to React!</h1>
        <Counter
          count={count}
          incrementCount={() => dispatch(incrementCount())}
          decrementCount={() => dispatch(decrementCount())}
        />
      </div>
    );
  }
}

Home.defaultProps = {
  count: 0,
  dispatch: f => f
};

Home.protoTypes = {
  count: PropTypes.number,
  dispatch: PropTypes.func
};

export default connect(state => ({
  count: state.counter.count
}))(Home);
