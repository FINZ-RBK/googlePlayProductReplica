import React from "react";
import ReactDOM from "react-dom";
import $ from "jquery";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: []
    };
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/items',
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }

  render() {
    return (
      <div className="row">
        <div className="column left"></div>

        <div className=" column middle home ">
          <div className="box" id="basic-info-proxy">
            Basic info proxy
          </div>
          <div className="box1" id="slider">
            slider proxy
          </div>
          <div className="box" id="Discrption">
            description proxy
          </div>
          <div className="box" id="poll-proxy">
            poll proxy
          </div>
        </div>
        <div className="column right"></div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("main"));
