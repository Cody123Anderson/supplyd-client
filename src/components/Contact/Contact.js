import React from 'react';

import './styles.scss'

class Contact extends React.Component {
  render() {
    return (
      <div className="supplyd-contact">
        <div className="supplyd-contact-row">Email: <a href="mailto:support@getsupplyd.com">support@getsupplyd.com</a></div>
          <div className="supplyd-contact-row">Phone: (602) 541-7677 (text or call)</div>
      </div>
    );
  }
}

export default Contact;