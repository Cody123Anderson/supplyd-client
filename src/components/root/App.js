import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import './App.scss';
import Routes from './routes/Routes';
import v from '../../styles/variables';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: v.colorPrimaryLight,
      main: v.colorPrimary,
      dark: v.colorPrimaryDark,
      contrastText: v.colorWhite,
    },
    //   secondary: {
    //   light: palette.secondary.A200,
    //   main: palette.secondary.A400,
    //   dark: palette.secondary.A700,
    //   contrastText: getContrastText(palette.secondary.A400),
    // },
    // error: {
    //   light: palette.error[300],
    //   main: palette.errorr[500],
    //   dark: palette.error[700],
    //   contrastText: getContrastText(palette.error[500]),
    // },
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="app">
          <Routes />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
