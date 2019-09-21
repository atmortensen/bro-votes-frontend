import React from "react";
import ReactDOM from "react-dom";
import Routes from "./routes";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import "semantic-ui-css/semantic.min.css";
class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
