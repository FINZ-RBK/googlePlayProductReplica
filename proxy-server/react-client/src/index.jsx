import React from "react";
import ReactDOM from "react-dom";
import $ from 'jquery'
// import styled from "styled-components";

debugger;
class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var path = window.location.href;
    var id;
    // var pollRequest;
    if (path.indexOf("itemid") >= 0) {
      var startIndex = path.indexOf("=");
      id = path.substring(startIndex + 1);
      // pollRequest =
      //   'https://protected-plains-93575.herokuapp.com/?itemid=' + id;
    }

    return (
      <div className="row">
        <div className="column left"></div>
        <div className=" column middle home ">
          <div id="proxy-basic"></div>
          <div className="box1" id="slider"></div>
          <div id="Discrption"></div>
          <div id="poll">
            <div className="iframe-container">
              <iframe
                allowfullscreen
                scrolling="no"
                seamless="seamless"
                src={
                  "https://protected-plains-93575.herokuapp.com/?itemid=" + id
                }
                width="97%"
                height="100%"
              ></iframe>
            </div>
          </div>
        </div>
        <div className="column right">
          <div>
            {" "}
            <div
              style={{
                display: "inline",
                fontFamily: "Arial",
                paddingRight: "20px",
                paddingLeft: "20px"
              }}
            >
              {" "}
              Related Apps
            </div>
            <button style={{ display: "inline" }} id="related">
              More inforamtion
            </button>
            <iframe
              scrolling="no"
              src={"https://boiling-journey-53136.herokuapp.com/"}
              width="500px"
              height="1000px"
            >

  
            </iframe>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("main"));
