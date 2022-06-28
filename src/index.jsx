import 'core-js/stable';
import 'regenerator-runtime/runtime';

import React from 'react';
import ReactDOM from 'react-dom';

import {
  APP_READY,
  initialize,
  subscribe,
} from 'frontend-platform-vi';
import { messages as headerMessages } from 'frontend-component-header-vi';
import { messages as footerMessages } from 'frontend-component-footer-vi';

import appMessages from './i18n';
import App from './App';

subscribe(APP_READY, () => {
  ReactDOM.render(<App />, document.getElementById('root'));
});

initialize({
  messages: [
    appMessages,
    headerMessages,
    footerMessages,
  ],
  requireAuthenticatedUser: true,
});
