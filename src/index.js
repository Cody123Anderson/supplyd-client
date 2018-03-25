import React from 'react';
import { render } from 'react-snapshot';

import './index.scss';
import App from './components/root/App/index';

render(<App />, document.getElementById('root'));
