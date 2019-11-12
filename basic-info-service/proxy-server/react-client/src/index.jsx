import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Basic from './components/basic.jsx';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      products: []
    }
    this.updateState = this.updateState.bind(this);
  }
  updateState(data) {
    this.setState({stories: data});
  }
  getProduct(){
    var that = this;
    $.ajax({
        url: '/:productId',
        dataType: 'json',
        data: that.state.products,
        success: function(data){
            console.log(data);
            that.updateState(data);
        },
        error: function(err){
            console.log("err", err);
        }
    });
}
componentDidMount(){
  this.getProduct();
}
render() {
  return (
      <div>
          <Basic info={this.state.products}/>
      </div>
  );
}
}

ReactDOM.render(<App />, document.getElementById('proxy-basic'));