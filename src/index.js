import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';
import App from './components/root/App/index';
import { registerServiceWorker } from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();
