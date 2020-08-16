import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './tailwind.output.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './i18n';
ReactDOM.render(
  <React.StrictMode>
    <Suspense
      fallback={
        <div className=" h-screen text-xl md:text-3xl flex justify-center items-center text-primary font-bold">
          Loading ...
        </div>
      }
    >
      <App />
    </Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
