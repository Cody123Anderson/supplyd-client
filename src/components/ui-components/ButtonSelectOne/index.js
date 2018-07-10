import React, { PureComponent } from 'react';

import * as Styled from './styled';

export default class ButtonSelectOne extends PureComponent {
    renderButtons = (values) => {
        return values.map(value => {
            return (
                <Styled.Button key={value} active={value==='XS' ? true : false}>{value}</Styled.Button>
            );
        });
    }

    render() {
        return (
            <Styled.ButtonSelectOne>
                {this.renderButtons(this.props.btnValues)}
            </Styled.ButtonSelectOne>
        );
    }
}
