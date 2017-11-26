import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/normalize.less';
import './Styles/index.less';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
