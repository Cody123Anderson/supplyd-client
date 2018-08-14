import React from 'react';
import {connect} from 'react-redux'

import {setTab} from '../../../actions/tabActions';
import constants from '../../../constants';
import Footer from "../../Footer/Footer";

import './styles.scss';

class SupportCenter extends React.Component {
  componentDidMount() {
    this.props.setTab(constants.lowerDashboardLinks.supportCenter.name);
  }

  render() {
    return(
      <div>
        <div className="support-center-container">
        Support Center
        </div>
        <Footer links={constants.footerLinks}/>
      </div>
    )
  }
}

export default connect(null, {setTab})(SupportCenter);
