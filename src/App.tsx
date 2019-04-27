import React, { Component } from 'react';
import logo from './logo.svg';
import { withStyles, createStyles } from "@material-ui/core";

const appStyle = createStyles({
  App: {
    textAlign: "center",
  }
  ,
  AppLogo: {
    animation: "App-logo-spin infinite 20s linear",
    height: "40vmin",
    pointerEvents: "none",
  }
  ,
  AppHeader: {
    backgroundColor: "#282c34",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "calc(10px + 2vmin)",
    color: "white",
  }
  ,
  AppLink: {
    color: "#61dafb",
  }
  ,
  "@keyframes App-logo-spin": {
    from: {
      transform: "rotate(0deg)",
    },
    to: {
      transform: "rotate(360deg)",
    }
  }
})


export interface AppProps {
  classes: any;
}

class App extends Component<AppProps>{
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.App}>
        <header className={classes.AppHeader}>
          <img src={logo} className={classes.AppLogo} alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className={classes.AppLink}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default withStyles(appStyle)(App);
