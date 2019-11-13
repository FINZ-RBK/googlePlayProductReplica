import React from "react";
import ReactDOM from "react-dom";
// import styled from "styled-components";

debugger;
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="row">
        <div className="column left"></div>
        <div className=" column middle home ">
          <div id="proxy-basic">Basic info proxy</div>
          <div className="box1" id="slider">
            slider proxy
          </div>
          <div id="Discrption">description proxy</div>
          <div className="box" id="poll">
            poll proxy
          </div>
        </div>
        <div className="column right"></div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("main"));
