import React from 'react';
import PropTypes from 'prop-types';
import styles from './MailList.css';

export default class MailList extends React.Component {
  constructor (props) {
    super(props);
    this.state = {};
  }

  render () {
    const { title, mails } = this.props;
    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h3 className={styles.header__title}>{title}</h3>
        </div>
        <ul className={styles.list}>
          {mails && mails.map((mail) => <li className={styles.list__item}>{mail.title}</li>)}
        </ul>
      </div>
    );
  }
}

MailList.propTypes = {
  title: PropTypes.string,
  mails: PropTypes.array,
};

MailList.defaultProps = {
  title: '',
  mails: [],
};
