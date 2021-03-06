import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import AppRouter from './routers/AppRouter'
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import './styles/styles.css';
import registerServiceWorker from './registerServiceWorker';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Electricity bill', createdAt: -100, amount: 2300 }));
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('root'));
registerServiceWorker();
