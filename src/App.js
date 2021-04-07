import React from 'react';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import { Redirect, Route, Router, Switch } from 'react-router-dom'
// import logo from './logo.svg';
import { createBrowserHistory } from 'history';
import LoginView from './views/LoginView';
import './App.css';

const hist = createBrowserHistory();

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: "#2196F3",
      },
      secondary: {
        main: "#F50057",
      },
      error: {
        main: "#F44336",
      },
    },
  });

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <MuiThemeProvider theme={theme}>
        <Router history={hist}>
          <Switch>
            <Route path='/login' component={LoginView} />
            <Redirect from='/' to='/login' />
          </Switch>
        </Router>
      </MuiThemeProvider>
    </div>
  );
}

export default App;
