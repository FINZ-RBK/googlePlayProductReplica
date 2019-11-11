import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";
import Slider from "./components/Slider.jsx";
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: "/items",
  //     success: data => {
  //       this.setState({
  //         items: data
  //       });
  //     },
  //     error: err => {
  //       console.log("err", err);
  //     }
  //   });
  // }

  render() {
    return (
      <div>
        {/* <h1>Slider</h1> */}
        <Slider></Slider>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("slider"));
