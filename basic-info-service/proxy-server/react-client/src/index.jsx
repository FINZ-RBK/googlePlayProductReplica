import React from 'react';
import ReactDOM from 'react-dom';
import Basic from './components/basic.jsx';
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
      //fetch the id from the URL 
      id: path.substring(startIndex + 1)
    });
  }
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
