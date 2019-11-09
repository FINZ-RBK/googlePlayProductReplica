import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import List from "./components/List.jsx";
import "whatwg-fetch";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  render() {
    return (
      <div>
        <h1>Server</h1>
        <div id="slider"></div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("proxy-slider"));
