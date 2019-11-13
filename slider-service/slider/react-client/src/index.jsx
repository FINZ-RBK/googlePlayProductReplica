import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Slider from "./components/Slider.jsx";
// import styled from "styled-components";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      id: 1
    };
  }

  componentDidMount() {
    var path = window.location.href;
    if (path.indexOf("itemid") >= 0) {
      var startIndex = path.indexOf("=");
      this.setState({
        id: path.substring(startIndex + 1)
      });
    }
    console.log(path.substring(startIndex + 1));
  }

  render() {
    return (
      <div>
        <Slider item_id={this.state.id}></Slider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("slider"));
