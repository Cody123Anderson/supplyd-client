import React, { Component } from 'react';
import axios from 'axios';

import * as Styled from './styled';
import { API_URL, TEE_SHIRT_SIZES, SWEATSHIRT_SIZES, HAT_SIZES, PANT_SIZES } from '../../constants';
import ButtonSelectOne from '../ui-components/ButtonSelectOne';
import UIBoundary from '../ui-components/UIBoundary';
import Input from '../ui-components/Input';

export default class SwagProfile extends Component {
    state = {
        employee: null
    }

    componentDidMount() {
        axios.get(`${API_URL}/employees/${this.props.match.params.employeeId}`).then(results => {
            this.setState({ employee: results.data.employee });
        }).catch(err => {
            console.error('error fetching employee information: ', err);
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

    render() {
        const { employee } = this.state;

        return (
            <UIBoundary>
                <Styled.SwagProfile>
                    {
                        employee &&
                        <div>
                            <Styled.Title>Your {employee.businessName} Swag Profile</Styled.Title>
                            <Styled.SubTitle>{employee.businessName} would like to send you some swag. Just fill out this form so we can get it created and sent out to you. Please note - some information may not be used in this round of swag, but could potentially be used in the future.</Styled.SubTitle>
                            <Styled.Form>
                                <Styled.FormField>
                                    <Styled.Label>Personal Information</Styled.Label>
                                    <Styled.ContainInput>
                                        <Input label="First Name *" value={employee.firstName} />
                                    </Styled.ContainInput>
                                    <Styled.ContainInput>
                                        <Input label="Last Name *" value={employee.lastName} />
                                    </Styled.ContainInput>
                                    <Styled.ContainInput>
                                        <Input label="Work Email *" value={employee.workEmail} disabled={true} />
                                    </Styled.ContainInput>
                                    <Styled.ContainInput>
                                        <Input label="Personal Email *" value={employee.personalEmail} helperText="We use this email as another method to make sure you get your swag" />
                                    </Styled.ContainInput>
                                    <Styled.ContainInput>
                                        <Input label="Phone Number *" value={employee.phone} helperText="We use your phone number as another method to make sure you get your swag" />
                                    </Styled.ContainInput>
                                    <Styled.ContainInput>
                                        <Input label="Address *" value={employee.address} />
                                    </Styled.ContainInput>
                                    <Styled.ContainInput>
                                        <Input label="Address 2" value={employee.address2} />
                                    </Styled.ContainInput>
                                    <Styled.ContainInput>
                                        <Input label="City *" value={employee.city} />
                                    </Styled.ContainInput>
                                    <Styled.ContainInput>
                                        <Input label="State *" value={employee.state} />
                                    </Styled.ContainInput>
                                    <Styled.ContainInput>
                                        <Input label="Zip *" value={employee.zip} />
                                    </Styled.ContainInput>
                                </Styled.FormField>
                                <Styled.FormField>
                                    <Styled.Label>Shirt Size</Styled.Label>
                                    <ButtonSelectOne 
                                        values={TEE_SHIRT_SIZES} 
                                        selected={employee.shirtSize || 'none'} 
                                        onClick={this.onShirtSizeClick} 
                                    />
                                </Styled.FormField>
                                <Styled.FormField>
                                    <Styled.Label>Sweatshirt Size</Styled.Label>
                                    <ButtonSelectOne
                                        values={SWEATSHIRT_SIZES}
                                        selected={employee.sweatshirtSize || 'none'}
                                        onClick={this.onSweatshirtSizeClick}
                                    />
                                </Styled.FormField>
                                <Styled.FormField>
                                    <Styled.Label>Hat Size</Styled.Label>
                                    <ButtonSelectOne
                                        values={HAT_SIZES}
                                        selected={employee.hatSize || 'none'}
                                        onClick={this.onHatSizeClick}
                                    />
                                </Styled.FormField>
                                <Styled.FormField>
                                    <Styled.Label>Pant Size</Styled.Label>
                                    <ButtonSelectOne
                                        values={PANT_SIZES}
                                        selected={employee.pantSize || 'none'}
                                        onClick={this.onPantSizeClick}
                                    />
                                </Styled.FormField>
                            </Styled.Form>
                        </div>
                    }
                </Styled.SwagProfile>
            </UIBoundary>
        );
    }
};
