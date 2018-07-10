import React, { PureComponent } from 'react';

import * as Styled from './styled';

export default class ButtonSelectOne extends PureComponent {
    render() {
        return (
            <Styled.UIBoundary>
                {this.props.children}
            </Styled.UIBoundary>
        );
    }
}
