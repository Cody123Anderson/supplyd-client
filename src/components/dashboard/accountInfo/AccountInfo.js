import React from 'react';
import {connect} from 'react-redux'

import {setTab} from '../../../actions/tabActions';
import constants from '../../../constants';
import Footer from "../../Footer/Footer";

import './styles.scss';

class AccountInfo extends React.Component {
  componentDidMount() {
    this.props.setTab(constants.lowerDashboardLinks.accountInfo.name);
  }

  render() {
    return (
      <div>
        <div className="account-info-container">
          AccountInfo Info
        </div>
        <Footer links={constants.footerLinks}/>
      </div>
    )
  }
}

export default connect(null, {setTab})(AccountInfo);
