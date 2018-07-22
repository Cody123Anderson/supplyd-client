import React, { Component } from 'react';
import { connect } from 'react-redux';

import routes from '../../../constants/routes';

export default function(ComposedComponent) {
  class Authentication extends Component {
    componentWillMount() {
      if (!this.props.authenticated) {
        this.props.history.push(routes.signIn);
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.props.history.push(routes.signIn);
      }
    }

    render() {
      if (!this.props.authenticated) {
        return <div>Not Authorized!</div>;
      }

      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return { authenticated: state.user.isLoggedIn };
  }

  return connect(mapStateToProps)(Authentication);
}
