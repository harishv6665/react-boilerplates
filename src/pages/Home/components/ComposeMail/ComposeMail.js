import React from 'react';
import PhilComponent from './../PhilComponent/PhilComponent';
import styles from './ComposeMail.css';

export default class ComposeMail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toPhilList: ['test1', 'test2'],
      to: '',
      subject: '',
      message: '',
    };
    this.onMailSend = this.onMailSend.bind(this);
    this.onMailDraft = this.onMailDraft.bind(this);
  }

  onChangeHandler(type, value) {
    this.setState({ [type]: value });
  }

  onMailSend() {
    const { to, subject, message } = this.state;
    if(to.length && subject.length && message.length) {
      this.props.composeMailHandler('sent', to);
      this.props.toggleComposeMail(false);
    } else {
      alert('Invalid input entered');
    }
  }

  onMailDraft() {
    const { to, subject, message } = this.state;
    if(to.length && subject.length && message.length) {
      this.props.composeMailHandler('draft', to);
      this.props.toggleComposeMail(false);
    } else {
      this.props.toggleComposeMail(false);
    }
  }

  render() {
    const { to, subject, message, toPhilList } = this.state;
    return (
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <h3>Compose Mail</h3>
          <button onClick={this.onMailDraft} className={styles.header__closeBtn}>X</button>
        </div>
        <div className={styles.body}>
          <div className={styles.toField}>
            {toPhilList && toPhilList.map((phil) => <PhilComponent title={phil} />)}
            <input
              value={to}
              type="text"
              className={styles.toField__input}
              onChange={(e) => { this.onChangeHandler('to', e.target.value); }}
            />
          </div>
          <div className={styles.subjectField}>
            <input
              value={subject}
              type="text"
              className={styles.subjectField__input}
              onChange={(e) => { this.onChangeHandler('subject', e.target.value); }}
            />
          </div>
          <div className={styles.messageField}>
            <textarea
              value={message}
              className={styles.messageField__input}
              onChange={(e) => { this.onChangeHandler('message', e.target.value); }}
            />
          </div>
        </div>
        <div className={styles.footer}>
          <button className={styles.footer__button} onClick={this.onMailSend}>Send</button>
        </div>
      </div>
    );
  }
}

ComposeMail.propTypes = {};

ComposeMail.defaultProps = {};
