import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from 'store';

import App from './app';

import './globalStyles';

ReactDOM.render(<App />, document.getElementById('app'));
