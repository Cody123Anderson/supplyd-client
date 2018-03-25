import React, { Component } from 'react';

import Router from '../Router';
import * as Styled from './styled';

class App extends Component {
  render() {
    return (
      <Styled.App>
        <Router />
      </Styled.App>
    );
  }
}

export default App;
