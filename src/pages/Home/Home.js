import React from 'react';
import MailList from './components/MailList/MailList';
import ComposeMail from './components/ComposeMail/ComposeMail';
import styles from './Home.css';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sentMails: [],
      draftMails: [],
      showComposeMailPopup: false,
    };
    this.toggleComposeMail = this.toggleComposeMail.bind(this);
    this.composeMailHandler = this.composeMailHandler.bind(this);
  }

  toggleComposeMail(visibility) {
    this.setState({ showComposeMailPopup: visibility || false });
  }

  composeMailHandler(type, title) {
    if(type === 'sent') {
      const newState = [...this.state.sentMails];
      newState.push({ title });
      this.setState({ sentMails: newState });
    } else if( type === 'draft') {
      const newState = [...this.state.draftMails];
      newState.push({ title });
      this.setState({ draftMails: newState });
    }
  }

  render() {
    const { sentMails, draftMails, showComposeMailPopup } = this.state;
    return (
      <div className={styles.wrapper}>
        <header className={styles.header}>
          <button onClick={() => this.toggleComposeMail(true)} className={styles.header__button}>Compose mail</button>
        </header>
        <div className={styles.colWrapper}>
          <div className={styles.col1}>
            <MailList title="SENT MAILS" mails={sentMails}/>
          </div>
          <div className={styles.col2}>
            <MailList title="DRAFT MAILS" mails={draftMails}/>
          </div>
          <div className={styles.col3}>
            <span>preview here</span>
          </div>
        </div>
        {showComposeMailPopup && <ComposeMail
          composeMailHandler={this.composeMailHandler}
          toggleComposeMail={this.toggleComposeMail}
        />}
      </div>
    );
  }
}
