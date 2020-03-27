import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//essa ação chama o app.js e passa a função "App" para o html no elemento de ID = root
ReactDOM.render(<App />, document.getElementById('root')
);

