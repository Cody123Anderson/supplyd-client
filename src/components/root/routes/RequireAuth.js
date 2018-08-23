import React, { Component } from 'react';
import { connect } from 'react-redux';

import routes from '../../../constants/routes';

export default function(ComposedComponent) {
  class Authentication extends Component {
    componentWillMount() {
      if (!this.props.isLoggedIn) {
        this.props.history.push(routes.signIn);
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.isLoggedIn) {
        this.props.history.push(routes.signIn);
      }
    }

    render() {
      if (!this.props.isFetched) {
        return <div>Loading...</div>;
      }

      return <ComposedComponent {...this.props} />;
    }
  }

  function mapStateToProps(state) {
    return {
      isFetched: state.user.businessId ? true : false,
      isLoggedIn: state.user.isLoggedIn
    };
  }

  return connect(mapStateToProps)(Authentication);
}
