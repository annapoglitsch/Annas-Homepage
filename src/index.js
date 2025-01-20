import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import App from "./client/App";
import {Grommet, Header, PageHeader} from 'grommet';
import { colors } from 'grommet/themes/base';
const root = ReactDOM.createRoot(document.getElementById('root'));
const colorTheme = {
  global: {
    colors:{
      'background': '#F7F6E3',
      'text': '#546745',
      'footer': '#E2E1CF'
    },
    font:{
      family: "Serif",
      weight: 400,
    },
    Footer:{
      colors:{
        background: '#E2E1CF',
      }
    },
    background:{
      colors:{
        background: '#F7F6E3',
      }
    },
  },
  
  Anchor:{
    font:{
      family:"Serif",
      weight: 400,
      size: "18px",
      colors: "#546745",
    },
  }
}


root.render(
  <BrowserRouter>
  <Grommet theme={colorTheme}>
  <App />
  </Grommet>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
