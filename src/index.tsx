import React from 'react';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

import App from './App';
import './i18n.tsx';

import './index.css';

import { preload } from '@refinitiv-ui/elements/flag';

preload('gb', 'ro'); // preload flag icons

const loadTheme = () => {
  return new Promise(resolve => {
    const theme = sessionStorage.getItem('elf-theme') || 'light';
    import(`./themes/${theme}`);
    resolve(theme);
  });
};
loadTheme().then(theme => {
  const container = document.getElementById('root')!;
  const root = createRoot(container);

  root.render(
    <React.StrictMode>
      <Provider store={store}>
        <BrowserRouter>
          <App theme={theme} />
        </BrowserRouter>
      </Provider>
    </React.StrictMode>
  );
});
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
