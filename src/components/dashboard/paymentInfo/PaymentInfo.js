import React from 'react';
import {connect} from 'react-redux'

import {setTab} from '../../../actions/tabActions';
import constants from '../../../constants';

class PaymentInfo extends React.Component {
  componentDidMount() {
    this.props.setTab(constants.lowerDashboardLinks.paymentInfo.name);
  }

  render() {
    return <div>Payment Info</div>
  }
}

export default connect(null, {setTab})(PaymentInfo);
