import React from 'react';
import ReactDOM from 'react-dom';
//import App from './App/index';
import './styles/index.css';

function App(props) {
  return (
    <h1>
      {props.welcome} {props.name}
    </h1>
  );
}

function withGreeting(WrappedComponent) {
  return function WrappedComponentWithGreeting(welcome) {
    return function TrueComponent(props) {
      return (
        <React.Fragment>
          <WrappedComponent {...props} welcome={welcome} />
          <p>We're with the WrappedComponent</p>
        </React.Fragment>
      );
    };
  };
}

const AppWithGreeting = withGreeting(App)('Hi');

ReactDOM.render(
  //<App welcome='Hello' name='Whenix' />,
  <AppWithGreeting name='Whenix' />,
  document.getElementById('root')
);
