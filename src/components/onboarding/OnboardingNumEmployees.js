import React, { Component } from 'react';
import { connect } from 'react-redux';

import './OnboardingNumEmployees.scss';
import constants from '../../constants';
import ButtonSelectOne from '../ui-components/ButtonSelectOne';
import Button from '../ui-components/Button';
import { updateBusiness, getBusiness } from '../../actions/businessActions';
import routes from '../../constants/routes';
import SupplydLogo from '../../images/supplyd-logo.png';

class onboardingNumEmployees extends Component {
  state = {
    error: '',
    numEmployees: '',
    numEmployeesError: false,
    submitting: false
  }

  componentDidMount() {
    if (!this.props.business.id) {
      this.props.getBusiness(this.props.businessId);
    } else if (this.props.business.numEmployees) {
      this.props.history.push(routes.home);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { business } = this.props;

    if (business.numEmployees) {
      this.props.history.push(routes.home);
    } else if (prevProps.business.errorCount !== business.errorCount && business.error) {
      this.setState({ error: 'Server error - please try again', submitting: false });
    }
  }

  onNumEmployeesClick = (value) => {
      this.setState({ numEmployees: value });
  }

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.submitting) {
      return;
    } else {
      this.setState({ submitting: true, error: false, numEmployeesError: false });
    }

    if (!this.state.numEmployees) {
      return this.setState({
        numEmployeesError: true,
        submitting: false
      });
    }

    const body = { numEmployees: this.state.numEmployees };

    this.props.updateBusiness(body, this.props.businessId);
  }

  onInputTextChange = (e) => {
      const { name, value } = e.target;

      this.setState({ [name]: Number(value) });
  }

  render() {
    return (
      <div className="onboarding-new-hires">
          <div className="one-contain-logo">
              <img className="one-logo" alt="Supplyd Logo" src={SupplydLogo} />
          </div>
          <div className="one-progress">
            <div className="one-progress-circle one-filled" />
            <div className="one-progress-circle" />
          </div>
          <form className="one-form" onSubmit={this.onSubmit}>
              <div className="one-title">How many employees does {this.props.business.name} have?</div>
              <div className="one-contain-input">
                  <ButtonSelectOne
                      values={constants.numEmployeesOptions}
                      selected={this.state.numEmployees}
                      onClick={this.onNumEmployeesClick}
                      error={this.state.numEmployeesError}
                  />
              </div>
              <div className="one-contain-actions">
                <div className="one-error-text">{this.state.error}</div>
                <Button
                  type="submit"
                  fullWidth={true}
                  disabled={this.state.submitting}
                >
                  Next
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
)(onboardingNumEmployees);
