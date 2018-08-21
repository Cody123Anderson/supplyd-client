import React, { Component } from 'react';

import './SwagProfileComplete.scss';
import SuccessAnimation from '../animations/SuccessAnimation';
import v from '../../styles/variables';

export default class SwagProfileComplete extends Component {
  render() {
    return (
      <div className="swag-profile-complete">
        <SuccessAnimation color={v.colorWhite} />
        <div className="success-text-title">Profile updated successfully</div>
        <div className="success-text-description">
          {`Your ${this.props.match.params.businessName} swag profile is now complete. You'll receive email notifications when your items ship.`}
        </div>
      </div>
    );
  }
}
