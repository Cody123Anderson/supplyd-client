import React, { PureComponent } from 'react';

import './styles.scss';
import v from '../../../styles/variables';

export default class SuccessAnimation extends PureComponent {
    render() {
        return (
            <div className="icon icon--order-success svg">
                <svg xmlns="http://www.w3.org/2000/svg" width="72px" height="72px">
                    <g fill="none" stroke={this.props.color || v.colorPrimary} strokeWidth="2">
                        <circle cx="36" cy="36" r="35" style={{ strokeDasharray: '240px, 240px', strokeDashoffset: '480px' }}></circle>
                        <path d="M17.417,37.778l9.93,9.909l25.444-25.393" style={{ strokeDasharray: '50px, 50px', strokeDashoffset: '0px' }}></path>
                    </g>
                </svg>

            </div>
        );
    }
}