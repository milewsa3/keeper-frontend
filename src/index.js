import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import ThemeWrapper from './app/theme/ThemeWrapper';
import { Provider } from 'react-redux';
import { store } from './app/redux/store';

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

