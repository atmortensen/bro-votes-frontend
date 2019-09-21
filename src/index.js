import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import BroContextProvider from 'contexts/Bro.context';
import BroLocationProvider from 'contexts/BroLocation.context';

class App extends React.Component {
  render() {
    return (
      <BroContextProvider>
        <BroLocationProvider>
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </BroLocationProvider>
      </BroContextProvider>
    );
  }
}
ReactDOM.render(<App />, document.getElementById('root'));
