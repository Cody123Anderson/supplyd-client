import React from 'react';

import './styles.scss'
import Footer from "../Footer/Footer";
import constants from "../../constants";

class Contact extends React.Component {
  render() {
    return (
      <div>
        <div className="supplyd-contact">
          <div className="supplyd-contact-row">Email: <a href="mailto:support@getsupplyd.com">support@getsupplyd.com</a></div>
          <div className="supplyd-contact-row">Phone: (602) 541-7677 (text or call)</div>
        </div>
        <Footer links={constants.footerLinks}/>
      </div>
    );
  }
}

export default Contact;