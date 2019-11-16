import React from 'react';
import ReactDOM from 'react-dom';
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
    if (path.indexOf('itemid') >= 0) {
      var startIndex = path.indexOf('=');
      id = path.substring(startIndex + 1);
      // pollRequest =
      //   'https://protected-plains-93575.herokuapp.com/?itemid=' + id;
    }
    return (
      <div className="row">
        <div className="column left"></div>
        <div className=" column middle home ">
          <div id="proxy-basic">Basic info proxy</div>
          <div className="box1" id="slider">
            slider proxy
          </div>
          <div id="Discrption">description proxy</div>
          <div id="poll">
            <div className="iframe-container">
              <iframe
                allowfullscreen
                scrolling="no"
                src={
                  'https://protected-plains-93575.herokuapp.com/?itemid=' +
                  id
                }
              ></iframe>
            </div>
            {/* <iframe frameBorder="0" scrolling="no"></iframe> */}
          </div>
        </div>
        <div className="column right"></div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('main'));
