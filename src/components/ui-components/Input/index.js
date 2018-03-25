import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextField } from 'material-ui';
import { withStyles } from 'material-ui';

const styles = {
  root: {
    '&div': {
      color: 'red',

      input: {
        '&::after': {
          backgroundColor: 'red'
        }
      }
    }
  }
}

class TextInput extends Component {
  static propTypes = {
    label: PropTypes.string.isRequired
  }

  render() {
    const { classes } = this.props;

    return (
      <TextField
        aria-label={this.props.label}
        fullWidth={true}
        className={classes.root}
        {...this.props}
      />
    );
  }
}

export default withStyles(styles)(TextInput);
