import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
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
        
        <div id="slider"></div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app-slider"));
