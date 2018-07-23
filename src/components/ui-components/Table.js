import React, { Component } from 'react';
import ReactTable from 'react-table';
import PropTypes from 'prop-types';

import 'react-table/react-table.css'

export default class Table extends Component {
    static propTypes = {
        columns: PropTypes.array.isRequired,
        data: PropTypes.array.isRequired
    }

    render() {
        const rows = this.props.data.length;

        if (rows < 1) return <div className="table" />;

        return (
            <div className="table">
                <ReactTable 
                    className="supplyd-table"
                    columns={this.props.columns}
                    data={this.props.data}
                    pageSizeOptions={[25, 50, 100]}
                    defaultPageSize={rows >= 25 ? 25 : rows + 1}
                />
            </div>
        );
    }
}