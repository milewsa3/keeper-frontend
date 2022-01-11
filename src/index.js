import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ThemeWrapper from './util/theme/ThemeWrapper';
import { Provider } from 'react-redux';
import { store } from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeWrapper>
        <App/>
      </ThemeWrapper>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

