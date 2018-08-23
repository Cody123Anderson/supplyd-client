import React, { Component } from 'react';
import { connect } from 'react-redux';

import './OnboardingNewHires.scss';
import Input from '../ui-components/Input';
import Button from '../ui-components/Button';
import { updateBusiness, getBusiness } from '../../actions/businessActions';
import routes from '../../constants/routes';
import SupplydLogo from '../../images/supplyd-logo.png';

class OnboardingNewHires extends Component {
  state = {
    errorMessage: '',
    newHiresPerMonth: '',
    submitting: false
  }

  componentDidMount() {
    if (!this.props.business.id) {
      this.props.getBusiness(this.props.businessId);
    } else if (this.props.business.newHiresPerMonth) {
      this.props.history.push(routes.home);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { business } = this.props;

    if (business.newHiresPerMonth) {
      this.props.history.push(routes.home);
    } else if (prevProps.business.errorCount !== business.errorCount && business.error) {
      this.setState({ errorMessage: 'Server error - please try again', submitting: false });
    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.submitting) {
      return;
    } else {
      this.setState({ submitting: true, errorMessage: false, newHiresPerMonthError: '' });
    }

    if (!this.state.newHiresPerMonth) {
      return this.setState({ submitting: false, newHiresPerMonthError: true, errorMessage: 'Please enter a value of 1 or more' });
    }

    const body = { newHiresPerMonth: this.state.newHiresPerMonth };

    this.props.updateBusiness(body, this.props.businessId);
  }

  onInputTextChange = (e) => {
      const { name, value } = e.target;

      this.setState({ [name]: Number(value) });
  }

  render() {
    return (
      <div className="onboarding-new-hires">
          <div className="onh-contain-logo">
              <img className="onh-logo" alt="Supplyd Logo" src={SupplydLogo} />
          </div>
          <div className="onh-progress">
            <div className="onh-progress-circle" />
            <div className="onh-progress-circle onh-filled" />
          </div>
          <form className="onh-form" onSubmit={this.onSubmit}>
              <div className="onh-title">How many employees do you expect to hire each month?</div>
              <div className="onh-contain-input">
                  <Input
                      label="Number of new hires"
                      value={this.state.newHiresPerMonth || this.props.business.newHiresPerMonth}
                      error={this.state.newHiresPerMonthError}
                      name="newHiresPerMonth"
                      type="number"
                      onChange={this.onInputTextChange}
                  />
              </div>
              <div className="onh-contain-actions">
                <div className="onh-error-text">{this.state.errorMessage}</div>
                <Button
                  type="submit"
                  fullWidth={true}
                  disabled={this.state.submitting}
                >
                  Finish
                </Button>
              </div>
          </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    business: state.business,
    businessId: state.user.businessId
  };
}

export default connect(
  mapStateToProps,
  { updateBusiness, getBusiness }
)(OnboardingNewHires);
