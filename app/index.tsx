import fs from 'fs';
import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { AppContainer as ReactHotAppContainer } from 'react-hot-loader';
import Root from './containers/Root';
import { configureStore, history } from './store/configureStore';
import './app.global.css';
import { changeAvroWithDispatch } from './actions/editor';

const { remote } = require('electron');

const { filename } = remote.getGlobal('sharedObject');

const store = configureStore();

if (filename) {
  // eslint-disable-next-line consistent-return
  const avro = fs.readFileSync(filename, 'utf8');
  changeAvroWithDispatch(avro)(store.dispatch);
}

const AppContainer = process.env.PLAIN_HMR ? Fragment : ReactHotAppContainer;

document.addEventListener('DOMContentLoaded', () =>
  render(
    <AppContainer>
      <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
  )
);
