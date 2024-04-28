import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { store } from './store/store'
import { Provider } from 'react-redux'

import App from './App';
import Quiz from './components/quiz.component'
import Result from "./components/result.component"

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/quiz",
    element: <Quiz/>,
  },
  {
    path: "/result",
    element: <Result/>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

