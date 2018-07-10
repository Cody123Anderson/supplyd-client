import React, { PureComponent } from 'react';

import * as Styled from './styled';

export default class ButtonSelectOne extends PureComponent {
    renderButtons = () => {
        return this.props.values.map(value => {
            return (
                <Styled.Button 
                    key={value} 
                    active={value === this.props.selected ? true : false}
                    onClick={() => this.props.onClick(value)}
                >
                    {value}
                </Styled.Button>
            );
        });
    }

    render() {
        return (
            <Styled.ButtonSelectOne>
                {this.renderButtons()}
            </Styled.ButtonSelectOne>
        );
    }
}
