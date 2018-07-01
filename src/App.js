import React, { Component } from 'react';
import './App.css';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Root from './Components/Root.js'

const theme = createMuiTheme({
  palette: {
    primary:{
      main: '#212121',
      light: '#484848',
      dark: '#000000',
      contrastText: '#b2ff59',
    },
    secondary: {
      main: '#76ff03',
      light: '#b0ff57',
      dark: '#32cb00',
      contrastText: '#000000',
    }
  },
});

class App extends Component {
  constructor(props) {
    super(props);
    document.body.style.backgroundColor = 'black';
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Root />
      </MuiThemeProvider>
    );
  }
}

export default App;
