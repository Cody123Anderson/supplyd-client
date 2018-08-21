import React from 'react';
import {connect} from 'react-redux'

import {setTab} from '../../../actions/tabActions';
import constants from '../../../constants';
import Footer from "../../Footer/Footer";

import './styles.scss';

class PaymentInfo extends React.Component {
  componentDidMount() {
    this.props.setTab(constants.lowerDashboardLinks.paymentInfo.name);
  }

  render() {
    return (
      <div>
        <div className="payment-info-container">
          Payment Info
        </div>
        <Footer links={constants.footerLinks}/>
      </div>
    );
  }
}

export default connect(null, {setTab})(PaymentInfo);
