import React from 'react';
import Card from 'material-ui/Card';

const _Card = ({ children, className, ...rest }) => (
    <Card className={className}>
        {children}
    </Card>
);

export default _Card;