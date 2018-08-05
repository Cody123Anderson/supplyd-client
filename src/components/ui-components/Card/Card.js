import React from 'react';
import Card from '@material-ui/core/Card';

const _Card = ({ children, className, ...rest }) => (
    <Card className={className}>
        {children}
    </Card>
);

export default _Card;
