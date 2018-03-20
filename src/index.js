import React from 'react';
import ReactDOM from 'react-dom';
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

ReactDOM.render(<RenderedApp />, document.getElementById('root'));

registerServiceWorker();
