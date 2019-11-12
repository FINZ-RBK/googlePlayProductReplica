import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Basic from './components/basic.jsx';
import './app.css';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      products: [],
      id: 1
    }
  }
componentDidMount(){
  var path = window.location.href;
  if(path.indexOf("itemid") >= 0) {
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
          <Basic item_id={this.state.id}/>
      </div>
  );
}
}

ReactDOM.render(<App />, document.getElementById('proxy-basic'));