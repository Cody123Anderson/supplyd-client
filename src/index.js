import React from 'react';
import { render } from 'react-snapshot';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import './index.scss';
import App from './components/root/App';
import { registerServiceWorker } from './serviceWorker';

const RenderedApp = () => {
  return (
    <MuiThemeProvider>
      <App />
    </MuiThemeProvider>
  );
}

render(<RenderedApp />, document.getElementById('root'));

registerServiceWorker();
