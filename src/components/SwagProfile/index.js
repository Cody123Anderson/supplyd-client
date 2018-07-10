import React, { Component } from 'react';
import axios from 'axios';

import * as Styled from './styled';
import { API_URL, TEE_SHIRT_SIZES } from '../../constants';
import ButtonSelectOne from '../ui-components/ButtonSelectOne';

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

    render() {
        const { employee } = this.state;

        return (
            <Styled.SwagProfile>
                {
                    employee &&
                    <div>
                        <Styled.Title>Your {employee.businessName} Swag Profile</Styled.Title>
                        <Styled.SubTitle>{employee.businessName} would like to send you some swag. Just fill out this survey so we can get it created and sent out to you.</Styled.SubTitle>
                        <Styled.FormField>
                            <Styled.Label>Shirt Size</Styled.Label>
                            <ButtonSelectOne btnValues={TEE_SHIRT_SIZES} />
                        </Styled.FormField>
                    </div>
                }
            </Styled.SwagProfile>
        );
    }
};
