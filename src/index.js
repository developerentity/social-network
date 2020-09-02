import React from 'react';
import ReactDOM from 'react-dom';
import './components/css/index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let dialogsData = [
  { key: 1, id: 1, name: "Bogdan" },
  { key: 2, id: 2, name: "Vera" },
  { key: 3, id: 3, name: "Nadezhda" },
  { key: 4, id: 4, name: "Lyubov" }
]

let messagesData = [
  { key: 1, m: "First message to Dev" },
  { key: 2, m: "Second random message" },
  { key: 3, m: "Third crazy message" }
];

ReactDOM.render(
  <React.StrictMode>
    <App
      dialogsData={dialogsData}
      messagesData={messagesData}
    />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
