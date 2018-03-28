import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from 'material-ui/styles';
import { complement } from 'polished';

import Router from '../Router';
import * as Styled from './styled';
import v from '../../../styles/variables';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: v.colorPrimaryLight,
      main: v.colorPrimary,
      dark: v.colorPrimaryDark,
      contrastText: complement(v.colorPrimary),
    }
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Styled.App>
          <Router />
        </Styled.App>
      </MuiThemeProvider>
    );
  }
}

export default App;
