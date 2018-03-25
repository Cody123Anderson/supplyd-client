import React from 'react';
import { render } from 'react-snapshot';

import './index.scss';
import App from './components/root/App/index';
import { registerServiceWorker } from './serviceWorker';

render(<App />, document.getElementById('root'));

registerServiceWorker();
