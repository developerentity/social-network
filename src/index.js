import React from 'react';
import ReactDOM from 'react-dom';
import './components/css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from './redux/redux-store';
import { Provider } from './StoreContext';

let updateEntireTree = () => {
  
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

updateEntireTree(store.getState())
store.subscribe(() => {
  const state = store.getState()
  updateEntireTree(state)
})

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
