import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';
import moment from 'moment';

import './SwagProfile.scss';
import constants from '../../constants';
import { API_URL } from '../../constants/env';
import ButtonSelectOne from '../ui-components/ButtonSelectOne';
import UIBoundary from '../ui-components/UIBoundary';
import Input from '../ui-components/Input';
import Button from '../ui-components/Button';
import routes from '../../constants/routes';

class SwagProfile extends Component {
    state = {
        employee: {
            firstName: '',
            lastName: '',
            workEmail: '',
            personalEmail: '',
            phone: '',
            birthday: '',
            address: '',
            address2: '',
            city: '',
            state: '',
            zip: '',
            country: '',
            shirtSize: null,
            sweatshirtSize: null,
            hatSize: null,
            pantSize: null,
            gender: null
        },
        errorText: '',
        firstNameError: false,
        lastNameError: false,
        workEmailError: false,
        personalEmailError: false,
        phoneError: false,
        birthdayErrorText: '',
        addressError: false,
        cityError: false,
        stateError: false,
        zipError: false,
        countryError: false,
        shirtSizeError: false,
        sweatshirtSizeError: false,
        hatSizeError: false,
        pantSizeError: false,
        genderError: false
    }

    componentDidMount() {
        axios.get(`${API_URL}/employees/${this.props.match.params.employeeId}`).then(results => {
            this.setState(prevState => ({ employee: { ...prevState.employee, ...results.data.employee } }));
        }).catch(err => {
            console.error('error fetching employee information: ', err);
        });
    }

    onInputTextChange = (key, value) => {
        this.setState(prevState => {
            return {
                employee: {
                    ...prevState.employee,
                    [key]: value
                }
            };
        });
    }

    onShirtSizeClick = (value) => {
        this.setState(prevState => {
            return {
                employee: {
                    ...prevState.employee,
                    shirtSize: value
                }
            };
        });
    }

    onSweatshirtSizeClick = (value) => {
        this.setState(prevState => {
            return {
                employee: {
                    ...prevState.employee,
                    sweatshirtSize: value
                }
            };
        });
    }

    onHatSizeClick = (value) => {
        this.setState(prevState => {
            return {
                employee: {
                    ...prevState.employee,
                    hatSize: value
                }
            };
        });
    }

    onPantSizeClick = (value) => {
        this.setState(prevState => {
            return {
                employee: {
                    ...prevState.employee,
                    pantSize: value
                }
            };
        });
    }

    onGenderClick = (value) => {
        this.setState(prevState => {
            return {
                employee: {
                    ...prevState.employee,
                    gender: value
                }
            };
        });
    }

    validateFields = () => {
        const fields = ['firstName', 'lastName', 'workEmail', 'personalEmail', 'phone', 'birthday', 'address', 'city', 'state', 'zip', 'country', 'shirtSize', 'sweatshirtSize', 'hatSize', 'pantSize', 'gender'];
        const { employee } = this.state;
        const errors = [];

        fields.forEach(value => {
            if (!employee[value]) {
                this.setState({ [`${value}Error`]: true });
                errors.push(`${value}Error`);
            } else {
                this.setState({ [`${value}Error`]: false });
            }
        });

        if (employee.birthday) {
          const year = _.first(employee.birthday.split('-'));
          const yearMinus100 = moment().subtract(100, 'years').format('YYYY');
          const yearMinus12 = moment().subtract(12, 'years').format('YYYY'); // Maybe a company uses underage children

          if (year < yearMinus100 || year > yearMinus12) {
            this.setState({ birthdayError: true, birthdayErrorText: 'Please enter a valid year' });
            errors.push('birthdayError');
          } else {
            this.setState({ birthdayError: false, birthdayErrorText: '' });
          }
        }

        return errors;
    }

    onSubmit = () => {
        // Don't allow multiple submissions
        if (this.state.submitting) return;

        this.setState({ submitting: true });

        // Check for form erros
        const errors = this.validateFields();

        if (errors.length) {
            return this.setState({ errorText: 'Please enter values for missing fields then resubmit', submitting: false });
        } else {
            this.setState({ errorText: '' });
        }

        // Modify the data to update necessary fields
        const data = _.cloneDeep(this.state.employee);
        delete data.businessId;
        delete data.id;
        delete data.createdAt;
        delete data.updatedAt;
        data.status = 'Active';

        // Submit data to server
        axios.put(`${API_URL}/employees/${this.props.match.params.employeeId}`, data).then(results => {
            // Redirect to success page
            this.props.history.push(routes.swagProfileComplete(this.state.employee.businessName));
        }).catch(err => {
            console.error('error updating employee information: ', err);
            this.setState({ submitting: false, errorText: 'Server error updating information - please try again.' });
        });

    }

    render() {
        const { employee } = this.state;

        return (
            <UIBoundary>
                <div className="swag-profile">
                    {
                        employee &&
                        <div>
                            <div className="title">{employee.businessName} Swag Profile</div>
                            <div className="subtitle">Please fill out this form so we can get your swag created and sent out to you. Please note - some information may not be used in this round of swag, but could potentially be used in the future.</div>
                            <form className="swag-profile-form">
                                <div className="form-field">
                                    <div className="label">Personal Information</div>
                                    <div className="contain-input">
                                        <Input
                                            label="First Name *"
                                            value={employee.firstName}
                                            error={this.state.firstNameError}
                                            onChange={(e) => this.onInputTextChange('firstName', e.target.value)}
                                        />
                                    </div>
                                    <div className="contain-input">
                                        <Input
                                            label="Last Name *"
                                            value={employee.lastName}
                                            error={this.state.lastNameError}
                                            onChange={(e) => this.onInputTextChange('lastName', e.target.value)}
                                        />
                                    </div>
                                    <div className="contain-input">
                                        <Input
                                            label="Work Email *"
                                            value={employee.workEmail}
                                            disabled={true}
                                            error={this.state.workEmailError}
                                        />
                                    </div>
                                    <div className="contain-input">
                                        <Input
                                            label="Personal Email *"
                                            value={employee.personalEmail}
                                            helperText="We use this email as another method to make sure you get your swag"
                                            error={this.state.personalEmailError}
                                            onChange={(e) => this.onInputTextChange('personalEmail', _.toLower(e.target.value))}
                                        />
                                    </div>
                                    <div className="contain-input">
                                        <Input
                                            label="Phone Number *"
                                            value={employee.phone}
                                            helperText="We use your phone number as another method to make sure you get your swag"
                                            error={this.state.phoneError}
                                            onChange={(e) => this.onInputTextChange('phone', e.target.value)}
                                        />
                                    </div>
                                    <div className="contain-input">
                                      <Input
                                          label="Birthday *"
                                          value={employee.birthday}
                                          helperText={this.state.birthdayErrorText}
                                          InputLabelProps={{ shrink: true }}
                                          error={this.state.birthdayError}
                                          type="date"
                                          onChange={(e) => this.onInputTextChange('birthday', e.target.value)}
                                      />
                                    </div>
                                    <div className="contain-input">
                                        <Input
                                            label="Address *"
                                            value={employee.address || ''}
                                            error={this.state.addressError}
                                            onChange={(e) => this.onInputTextChange('address', e.target.value)}
                                        />
                                    </div>
                                    <div className="contain-input">
                                        <Input
                                            label="Address 2"
                                            value={employee.address2 || ''}
                                            onChange={(e) => this.onInputTextChange('address2', e.target.value)}
                                        />
                                    </div>
                                    <div className="contain-input">
                                        <Input
                                            label="City *"
                                            value={employee.city || ''}
                                            error={this.state.cityError}
                                            onChange={(e) => this.onInputTextChange('city', e.target.value)}
                                        />
                                    </div>
                                    <div className="contain-input">
                                        <Input
                                            label="State *"
                                            value={employee.state || ''}
                                            error={this.state.stateError}
                                            onChange={(e) => this.onInputTextChange('state', e.target.value)}
                                        />
                                    </div>
                                    <div className="contain-input">
                                        <Input
                                            label="Zip *"
                                            value={employee.zip || ''}
                                            error={this.state.zipError}
                                            onChange={(e) => this.onInputTextChange('zip', e.target.value)}
                                        />
                                    </div>
                                    <div className="contain-input">
                                        <Input
                                            label="Country *"
                                            value={employee.country || ''}
                                            error={this.state.countryError}
                                            onChange={(e) => this.onInputTextChange('country', e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="form-field">
                                    <div className="label">Shirt Size</div>
                                    <ButtonSelectOne
                                        values={constants.teeShirtSizes}
                                        selected={employee.shirtSize}
                                        onClick={this.onShirtSizeClick}
                                        error={this.state.shirtSizeError}
                                    />
                                </div>
                                <div className="form-field">
                                    <div className="label">Sweatshirt Size</div>
                                    <ButtonSelectOne
                                        values={constants.sweatshirtSizes}
                                        selected={employee.sweatshirtSize}
                                        onClick={this.onSweatshirtSizeClick}
                                        error={this.state.sweatshirtSizeError}
                                    />
                                </div>
                                <div className="form-field">
                                    <div className="label">Hat Size</div>
                                    <ButtonSelectOne
                                        values={constants.hatSizes}
                                        selected={employee.hatSize}
                                        onClick={this.onHatSizeClick}
                                        error={this.state.hatSizeError}
                                    />
                                </div>
                                <div className="form-field">
                                    <div className="label">Pant Size</div>
                                    <ButtonSelectOne
                                        values={constants.pantSizes}
                                        selected={employee.pantSize}
                                        onClick={this.onPantSizeClick}
                                        error={this.state.pantSizeError}
                                    />
                                </div>
                                <div className="form-field">
                                    <div className="label">Gender of Clothing</div>
                                    <ButtonSelectOne
                                        values={constants.genders}
                                        selected={employee.gender}
                                        onClick={this.onGenderClick}
                                        error={this.state.genderError}
                                    />
                                </div>
                                <hr className="line" />
                                <div className="contain-actions">
                                    <div className="error-text">{this.state.errorText}</div>
                                    <Button disabled={this.state.submitting} onClick={this.onSubmit}>Submit Information</Button>
                                </div>
                            </form>
                        </div>
                    }
                </div>
            </UIBoundary>
        );
    }
};

export default SwagProfile;
