import React, { PureComponent } from 'react';

import './ButtonSelectOne.scss';

export default class ButtonSelectOne extends PureComponent {
    renderButtons = () => {
        return this.props.values.map(value => {
            return (
                <div
                  className={`bso-button ${value === this.props.selected ? 'active' : ''}`}
                  key={value}
                  onClick={() => this.props.onClick(value)}
                >
                  {value}
                </div>
            );
        });
    }

    render() {
        return (
            <div className="button-select-one">
                { this.props.error &&
                  <div className="bso-error">Please select one of the options below</div>
                }
                {this.renderButtons()}
            </div>
        );
    }
}
