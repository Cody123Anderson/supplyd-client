import React, { Component } from 'react';
import axios from 'axios';
import _ from 'lodash';

import * as Styled from './styled';
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
        const fields = ['firstName', 'lastName', 'workEmail', 'personalEmail', 'phone', 'address', 'city', 'state', 'zip', 'country', 'shirtSize', 'sweatshirtSize', 'hatSize', 'pantSize', 'gender'];
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
                <Styled.SwagProfile>
                    {
                        employee &&
                        <div>
                            <Styled.Title>{employee.businessName} Swag Profile</Styled.Title>
                            <Styled.SubTitle>Please fill out this form so we can get your swag created and sent out to you. Please note - some information may not be used in this round of swag, but could potentially be used in the future.</Styled.SubTitle>
                            <Styled.Form>
                                <Styled.FormField>
                                    <Styled.Label>Personal Information</Styled.Label>
                                    <Styled.ContainInput>
                                        <Input 
                                            label="First Name *"
                                            value={employee.firstName}
                                            error={this.state.firstNameError}
                                            onChange={(e) => this.onInputTextChange('firstName', e.target.value)}
                                        />
                                    </Styled.ContainInput>
                                    <Styled.ContainInput>
                                        <Input 
                                            label="Last Name *" 
                                            value={employee.lastName} 
                                            error={this.state.lastNameError}
                                            onChange={(e) => this.onInputTextChange('lastName', e.target.value)}
                                        />
                                    </Styled.ContainInput>
                                    <Styled.ContainInput>
                                        <Input 
                                            label="Work Email *" 
                                            value={employee.workEmail} 
                                            disabled={true} 
                                            error={this.state.workEmailError} 
                                        />
                                    </Styled.ContainInput>
                                    <Styled.ContainInput>
                                        <Input 
                                            label="Personal Email *" 
                                            value={employee.personalEmail} 
                                            helperText="We use this email as another method to make sure you get your swag"
                                            error={this.state.personalEmailError}
                                            onChange={(e) => this.onInputTextChange('personalEmail', e.target.value)}
                                        />
                                    </Styled.ContainInput>
                                    <Styled.ContainInput>
                                        <Input 
                                            label="Phone Number *" 
                                            value={employee.phone} 
                                            helperText="We use your phone number as another method to make sure you get your swag"
                                            error={this.state.phoneError}
                                            onChange={(e) => this.onInputTextChange('phone', e.target.value)}
                                        />
                                    </Styled.ContainInput>
                                    <Styled.ContainInput>
                                        <Input 
                                            label="Address *" 
                                            value={employee.address || ''} 
                                            error={this.state.addressError}
                                            onChange={(e) => this.onInputTextChange('address', e.target.value)} 
                                        />
                                    </Styled.ContainInput>
                                    <Styled.ContainInput>
                                        <Input 
                                            label="Address 2" 
                                            value={employee.address2 || ''}
                                            onChange={(e) => this.onInputTextChange('address2', e.target.value)}
                                        />
                                    </Styled.ContainInput>
                                    <Styled.ContainInput>
                                        <Input 
                                            label="City *" 
                                            value={employee.city || ''} 
                                            error={this.state.cityError}
                                            onChange={(e) => this.onInputTextChange('city', e.target.value)}
                                        />
                                    </Styled.ContainInput>
                                    <Styled.ContainInput>
                                        <Input 
                                            label="State *" 
                                            value={employee.state || ''} 
                                            error={this.state.stateError}
                                            onChange={(e) => this.onInputTextChange('state', e.target.value)}
                                        />
                                    </Styled.ContainInput>
                                    <Styled.ContainInput>
                                        <Input 
                                            label="Zip *" 
                                            value={employee.zip || ''} 
                                            error={this.state.zipError}
                                            onChange={(e) => this.onInputTextChange('zip', e.target.value)}
                                        />
                                    </Styled.ContainInput>
                                    <Styled.ContainInput>
                                        <Input
                                            label="Country *" 
                                            value={employee.country || ''} 
                                            error={this.state.countryError}
                                            onChange={(e) => this.onInputTextChange('country', e.target.value)}
                                        />
                                    </Styled.ContainInput>
                                </Styled.FormField>
                                <Styled.FormField>
                                    <Styled.Label>Shirt Size</Styled.Label>
                                    <ButtonSelectOne 
                                        values={constants.teeShirtSizes} 
                                        selected={employee.shirtSize} 
                                        onClick={this.onShirtSizeClick}
                                        error={this.state.shirtSizeError}
                                    />
                                </Styled.FormField>
                                <Styled.FormField>
                                    <Styled.Label>Sweatshirt Size</Styled.Label>
                                    <ButtonSelectOne
                                        values={constants.sweatshirtSizes}
                                        selected={employee.sweatshirtSize}
                                        onClick={this.onSweatshirtSizeClick}
                                        error={this.state.sweatshirtSizeError}
                                    />
                                </Styled.FormField>
                                <Styled.FormField>
                                    <Styled.Label>Hat Size</Styled.Label>
                                    <ButtonSelectOne
                                        values={constants.hatSizes}
                                        selected={employee.hatSize}
                                        onClick={this.onHatSizeClick}
                                        error={this.state.hatSizeError}
                                    />
                                </Styled.FormField>
                                <Styled.FormField>
                                    <Styled.Label>Pant Size</Styled.Label>
                                    <ButtonSelectOne
                                        values={constants.pantSizes}
                                        selected={employee.pantSize}
                                        onClick={this.onPantSizeClick}
                                        error={this.state.pantSizeError}
                                    />
                                </Styled.FormField>
                                <Styled.FormField>
                                    <Styled.Label>Gender of Clothing</Styled.Label>
                                    <ButtonSelectOne
                                        values={constants.genders}
                                        selected={employee.gender}
                                        onClick={this.onGenderClick}
                                        error={this.state.genderError}
                                    />
                                </Styled.FormField>
                                <Styled.Line />
                                <Styled.ContainActions>
                                    <Styled.ErrorText>{this.state.errorText}</Styled.ErrorText>
                                    <Button disabled={this.state.submitting} onClick={this.onSubmit}>Submit Information</Button>
                                </Styled.ContainActions>
                            </Styled.Form>
                        </div>
                    }
                </Styled.SwagProfile>
            </UIBoundary>
        );
    }
};

export default SwagProfile;
